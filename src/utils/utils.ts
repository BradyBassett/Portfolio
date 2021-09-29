export function getRandomBias(
    min: number,
    max: number,
    bias: number,
    influence: number
): number {
    let rand = Math.random() * (max - min) + min;
    let mix = Math.random() * influence;
    return rand * (1 - mix) + bias * mix;
}
