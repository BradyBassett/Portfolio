import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe/aboutMe";
import MyProjects from "./components/myProjects/myProjects";
import ContactMe from "./components/contactMe/contactMe";

let index = 0;

const increment = (index: number): number => {
    return index + 1;
};

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <div className="bg-wave-1 w-full aspect-w-4 aspect-h-1 bg-no-repeat bg-cover bg-center"></div>
                <div className="bg-layered-waves-1 w-full aspect-w-4 aspect-h-1 bg-no-repeat bg-cover bg-center"></div>
                <AboutMe index={index} />
                <div className="bg-wave-2 w-full aspect-w-4 aspect-h-1 bg-no-repeat bg-cover bg-center"></div>
                <div className="bg-layered-waves-2 w-full aspect-w-4 aspect-h-1 bg-no-repeat bg-cover bg-center "></div>
                <MyProjects index={increment(index)} />
                <div className="bg-wave-3 w-full aspect-w-4 aspect-h-1 bg-no-repeat bg-cover bg-center"></div>
                <div className="bg-layered-waves-3 w-full aspect-w-4 aspect-h-1 bg-no-repeat bg-cover bg-center "></div>
                <ContactMe index={increment(index)} />
            </main>
            <Footer />
        </>
    );
};

export default App;
