import { Recipe } from '@/types/recipe';
import { TargetBread } from '@/types/targetBread';
import { calculateFermentationTime } from './calculateFermentationTime';
import { roundWithDecimals } from './roundWithDecimals';

function calculateTotalFlour({
    totalWeight,
    doughHydration,
    salt,
}: TargetBread): number {
    return (totalWeight * 100) / (100 + doughHydration + salt);
}
function calculateFlour(totalFlour: number, levainFlour: number): number {
    return Math.round(totalFlour - levainFlour);
}
function calculateLevain(totalFlour: number, { levain }: TargetBread): number {
    return Math.round((totalFlour * levain) / 100);
}
function calculateSalt(totalFlour: number, { salt }: TargetBread): number {
    return roundWithDecimals((totalFlour * salt) / 100);
}
function calculateLevainFlour(
    totalLevain: number,
    { levainHydration }: TargetBread
): number {
    return (totalLevain * 100) / (100 + levainHydration);
}
function calculateLevainWater(
    totalLevain: number,
    levainFlour: number
): number {
    return totalLevain - levainFlour;
}
function calculateWater(
    totalFlour: number,
    levainWater: number,
    { doughHydration }: TargetBread
): number {
    return Math.round((totalFlour * doughHydration) / 100 - levainWater);
}

export function calculateRecipeFromTarget(targetBread: TargetBread): Recipe {
    const totalFlour = calculateTotalFlour(targetBread);
    const totalLevain = calculateLevain(totalFlour, targetBread);
    const levainFlour = calculateLevainFlour(totalLevain, targetBread);
    const levainWater = calculateLevainWater(totalLevain, levainFlour);
    console.log('Total flour', totalFlour);
    console.log('levainFlour', levainFlour);
    return {
        flour: calculateFlour(totalFlour, levainFlour),
        levain: totalLevain,
        salt: calculateSalt(totalFlour, targetBread),
        water: calculateWater(totalFlour, levainWater, targetBread),
        fermentationTime: calculateFermentationTime(targetBread),
    };
}
