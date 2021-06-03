import styled, { css } from 'styled-components';
import { lighten, math, darken } from 'polished';

// This is a converted scss file that was used in a previous project
const trackColor = '#eceff1';
const thumbColor = '#607d8b';

const trackWidth = '100%';
const trackHeight = '8px';
// $track-width: 100% !default;
// $track-height: 6px !default;
const trackShadowSize = '1px';
const trackShadowBlur = '1px';
const trackShadowColor = 'rgba(0,0,0,0.2)';

const trackBorderWidth = '2px';
const trackBorderColor = '#cfd8dc';

const thumbScaleBy = 2.5;
const thumbShadowSize = '4px';
const thumbShadowBlur = '4px';

const thumbRadius = math(`${trackHeight} * ${thumbScaleBy}`);
const thumbHeight = math(`${trackHeight} * ${thumbScaleBy}`);
const thumbWidth = math(`${trackHeight} * ${thumbScaleBy}`);

const thumbShadowColor = 'rgba(0,0,0,0.2)';
const thumbBorderWidth = '2px';

const trackRadius = '5px';
const contrast = 0.1;

const ieBottomTrackColor = darken(contrast, trackColor);

function shadow(shadowSize: string, shadowBlur: string, shadowColor: string) {
    return css`
        box-shadow: ${shadowSize} ${shadowSize} ${shadowBlur} ${shadowColor},
            0 0 ${shadowSize} ${lighten(0.05, shadowColor)};
    `;
}

const track = css`
    cursor: default;
    height: ${trackHeight};
    transition: all 0.2s ease;
    width: ${trackWidth};
`;

const thumb = css`
    ${shadow(thumbShadowSize, thumbShadowBlur, thumbShadowColor)}
    box-shadow: ${thumbShadowSize} ${thumbShadowSize} ${thumbShadowBlur} ${thumbShadowColor},
            0 0 ${thumbShadowSize} ${lighten(
        0.05,
        thumbShadowColor
    )}, inset 0 0 0 2px ${(props) => props.theme.primaryColor};
    background: #fff;
    /* border: ${thumbBorderWidth} solid ${(props) =>
        props.theme.primaryColor}; */
    border-radius: ${thumbRadius};
    box-sizing: border-box;
    cursor: default;
    height: ${thumbHeight};
    width: ${thumbWidth};
`;

const InputSliderStyles = styled.input.attrs(() => ({ type: 'range' }))`
    -webkit-appearance: none;
    background: transparent;
    margin: ${math(`${thumbHeight} / 2`)} 0;
    width: ${trackWidth};
    &::-moz-focus-outer {
        border: 0;
    }

    &:focus {
        outline: 0;

        &::-webkit-slider-runnable-track {
            background: ${lighten(contrast, trackColor)};
        }

        &::-ms-fill-lower {
            background: $track-color;
        }

        &::-ms-fill-upper {
            background: ${lighten(contrast, trackColor)};
        }
    }

    &::-webkit-slider-runnable-track {
        ${track}
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)}
        background: ${trackColor};
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: ${trackRadius};
    }

    &::-webkit-slider-thumb {
        ${thumb}
        -webkit-appearance: none;
        transform: translateY(-50%);
        /* margin-top: ${math(
            `-(${trackBorderWidth} * 2) + ((${trackHeight} / 2) - (${thumbHeight} / 2))`
        )}; */
    }

    &::-moz-range-track {
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)}
        ${track}
        background: $track-color;
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: ${trackRadius};
        height: ${trackHeight} / 2;
    }

    &::-moz-range-thumb {
        ${thumb};
    }

    &::-ms-track {
        ${track}
        background: transparent;
        border-color: transparent;
        border-width: ${math(`${thumbHeight} / 2`)} 0;
        color: transparent;
    }

    &::-ms-fill-lower {
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)};
        background: ${ieBottomTrackColor};
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: ${math(`${trackRadius} * 2`)};
    }

    &::-ms-fill-upper {
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)};
        background: $track-color;
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: (${trackRadius} * 2);
    }

    &::-ms-thumb {
        ${thumb}
        margin-top: ${math(`${trackHeight} / 4`)};
    }

    &:disabled {
        &::-webkit-slider-thumb,
        &::-moz-range-thumb,
        &::-ms-thumb,
        &::-webkit-slider-runnable-track,
        &::-ms-fill-lower,
        &::-ms-fill-upper {
            cursor: not-allowed;
        }
    }
`;

export default InputSliderStyles;
