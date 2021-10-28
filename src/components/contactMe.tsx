import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import useWindowDimensions from "../hooks/useWindowDimensions";

type FormState = {
    email: string;
    name: string;
    message: string;
};

type ServiceMessage = {
    class: string;
    text: string;
};

const ContactMe: React.FC<{ index: number }> = ({ index }) => {
    const formId = "ZB6RUwMc";
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = "6LdT1OIcAAAAADYmoRbuQmg6oXsNQ25PebP7vvMu";
    const recaptchaRef = useRef<any>();
    const initialFormState = {
        email: "",
        name: "",
        message: "",
    };

    const { width } = useWindowDimensions();
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<ServiceMessage>();
    const [recaptchaToken, setRecaptchaToken] = useState<string>();

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken,
        };

        try {
            await axios.post(formSparkUrl, payload);
            setMessage({
                class: "bg-green-500",
                text: "Thanks, I'll get back to you shortly!",
            });
            setFormState(initialFormState);
            recaptchaRef.current.reset();
        } catch (error) {
            console.log(error);
            setMessage({
                class: "bg-red-500",
                text: "Sorry, something went wrong with your submission, please try again.",
            });
        }
    };

    const updateFormControl = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = event.target;
        const formKey = id as keyof FormState;
        const updatedFormState = { ...formState };
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    };

    const updateRecaptchaToken = (token: string | null) => {
        setRecaptchaToken(token as string);
    };

    return (
        <article
            className="my-40 mx-4 sm:mx-12 lg:mx-3/16 xl:mx-1/5"
            id="contactMe"
        >
            <span className="flex justify-center text-2xl lg:text-3xl 2xl:text-4xl">
                <h1 className="pr-1 text-green-400">[{index}]</h1>
                <h1 className="text-gray-300">Contact Me</h1>
            </span>
            <div className="my-20 h-full w-full mx-auto bg-gray-750 rounded-lg shadow-lg">
                <form
                    className="m-8 flex flex-col text-gray-300 text-3xl"
                    onSubmit={submitForm}
                >
                    {message && (
                        <div
                            className={`my-4 text-gray=300 w-full p-4 rounded-md ${message.class}`}
                        >
                            {message.text}
                        </div>
                    )}
                    <div className="flex flex-col my-6">
                        <label htmlFor="name" className="pb-1">
                            Name
                        </label>
                        <input
                            onChange={updateFormControl}
                            className="border-2 rounded-md border-green-400 p-2 bg-gray-800 h-14 text-xl shadow-lg"
                            type="text"
                            id="name"
                            value={formState.name}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="email" className="pb-1">
                            Email
                        </label>
                        <input
                            onChange={updateFormControl}
                            className="border-2 rounded-md p-2 bg-gray-800 border-green-400 h-14 text-xl shadow-lg"
                            type="email"
                            id="email"
                            value={formState?.email}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="message" className="pb-1">
                            Message
                        </label>
                        <textarea
                            onChange={updateFormControl}
                            className="border-2 rounded-md p-2 bg-gray-800 border-green-400 h-32 text-xl resize-none shadow-lg"
                            id="message"
                            value={formState?.message}
                        />
                    </div>
                    <div className="mx-auto shadow-lg">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaKey}
                            onChange={updateRecaptchaToken}
                            theme="dark"
                            size={width < 768 ? "compact" : "normal"}
                        />
                    </div>
                    <button
                        disabled={submitting}
                        className="h-14 my-6 bg-green-600 rounded-md shadow-lg active:bg-green-700"
                    >
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </article>
    );
};

export default ContactMe;
