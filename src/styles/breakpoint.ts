import { em, math } from 'polished';

const bodyFontSize = 16;
/**
 * Set the sizes with em value
 * em allows for mobile on zoom
 * */
const size = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export const minusPixel = (value: number) => `${value - 1}px`;

/**
 * Set up the device media queries to use
 * e.g. @media ${device.mdMin} { ...styles }
 */
const device = {
    xsMax: `(max-width: ${minusPixel(size.xs)})`,
    xsMin: `(min-width: ${size.xs}px})`,
    smMax: `(max-width: ${minusPixel(size.sm)})`,
    smMin: `(min-width: ${size.sm}px})`,
    mdMax: `(max-width: ${minusPixel(size.md)})`,
    mdMin: `(min-width: ${size.md}px})`,
    lgMax: `(max-width: ${minusPixel(size.lg)})`,
    lgMin: `(min-width: ${size.lg}px})`,
    xlMax: `(max-width: ${minusPixel(size.xl)})`,
    xlMin: `(min-width: ${size.xl}px})`,
};

export { device, size };
