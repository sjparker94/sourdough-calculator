import { TargetBread } from '@/types/targetBread';

export function calculateFermentationTime({
    proofingTemperature,
    levain,
}: TargetBread): number {
    const f = (proofingTemperature * 9) / 5 + 32;
    const value =
        Math.log(levain / 100 / 0.894) *
        (-0.0000336713 * f ** 4 +
            0.0105207916 * f ** 3 -
            1.2495985607 * f ** 2 +
            67.0024722564 * f -
            1374.6540546564);
    return Math.round(value);
}
