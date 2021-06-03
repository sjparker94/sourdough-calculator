import styled, { css } from 'styled-components';
import { transparentize, math } from 'polished';

interface Props {
    checkboxPadding?: string;
    checkboxSquareSize?: string;
    fontSize?: string;
    isNoTransition?: boolean;
}

const FormCheckboxStyles = styled.div<Props>`
    --checkbox-square-size: ${(props) => props.checkboxSquareSize || '24px'};
    --checkbox-padding: ${(props) => props.checkboxPadding || '0.5rem'};
    .custom-checkbox-label {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        text-transform: none;
        letter-spacing: 0;
        margin: 0;
        padding: var(--checkbox-padding);
        border-radius: var(--small-border-radius);
        border: 1px solid var(--blue-grey-400);
        ${(props) =>
            !props.isNoTransition &&
            css`
                transition: all 0.25s var(--smooth-animation);
            `}
        /* min-height: 48px; */
        .custom-check-icon {
            flex: 0 0 var(--checkbox-square-size);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            height: var(--checkbox-square-size);
            width: var(--checkbox-square-size);
            border: 1px solid var(--blue-grey-400);
            border-radius: var(--small-border-radius);
            background-color: #fff;
            i {
                font-size: calc(var(--checkbox-square-size) / 1.3);
                opacity: 0;
                display: block;
                ${(props) =>
                    !props.isNoTransition &&
                    css`
                        transition: transform 0.25s var(--bounce-animation);
                        transform: translate3d(-100%, 0, 0);
                    `}
                color: #fff;
            }
        }
        .custom-checkbox-text {
            user-select: none;
            flex: 1 1 100%;
            letter-spacing: -0.5px;
            margin-left: var(--checkbox-padding);
            > span {
                display: block;
                /* flex: 1 1 100%; */
            }
        }
        .main-checkbox-label-text {
        }
        .checkbox-label-subtext {
            color: var(--light-text-color);
            font-size: 1.2rem;
        }
        &:hover {
            background-color: #fff;
            box-shadow: var(--small-bs);
        }
        &:active {
            /* background-color: ${(props) => props.theme.lightestBlue}; */
            background-color: #fff;
            .custom-check-icon {
                box-shadow: inset 0 0 5px 0
                    ${(props) => transparentize(0.6, props.theme.blueGrey)};
            }
        }
    }
    .custom-checkbox {
        /* Hide checkbox visually but remain accessible to screen readers. */
        /* Source: https://polished.js.org/docs/#hidevisually */
        border: 0;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
    .custom-checkbox:focus + .custom-checkbox-label {
        /* background-color: ${(props) => props.theme.lightestBlue}; */
        background-color: #fff;
        box-shadow: 2px 2px 8px 0 ${transparentize(0.95, '#000')};
        .custom-check-icon {
            border-color: ${(props) => props.theme.colors.primary};
            box-shadow: inset 0 0 5px 0
                    color-mod(var(--blue-grey-400) alpha(60%)),
                0 0 0 1px ${(props) => props.theme.colors.primary};
        }
    }
    .custom-checkbox:checked + .custom-checkbox-label {
        .custom-check-icon {
            background-color: ${(props) => props.theme.colors.primary};
            border-color: ${(props) => props.theme.colors.primary};
            i {
                opacity: 1;
                /* transform: translateX(0); */
                ${(props) =>
                    !props.isNoTransition &&
                    css`
                        transform: translate3d(0, 0, 0);
                    `}
            }
        }
    }
    .custom-checkbox:disabled + .custom-checkbox-label {
        background-color: var(--light-grey-200);
        cursor: not-allowed;
        color: var(--light-text);
        .custom-check-icon {
            background-color: var(--light-grey-200);
        }
        &:hover {
            box-shadow: none;
        }
        &:active {
            .custom-check-icon {
                box-shadow: none;
            }
        }
    }
`;

export default FormCheckboxStyles;
