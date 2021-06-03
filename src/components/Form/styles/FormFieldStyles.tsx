import styled, { css } from 'styled-components';
import { FieldMetaProps } from 'formik';

import FormikFieldCustomProps from '../FormikFieldCustomProps';

type Props = Pick<FormikFieldCustomProps, 'gutter' | 'required'> &
    Pick<FieldMetaProps<''>, 'touched'> & {
        valid: boolean;
    };

const FormFieldStyles = styled.div<Props>`
    text-align: left;
    label {
        display: block;
        letter-spacing: -0.5px;
        cursor: pointer;
        margin-bottom: calc(var(--form-gutter) / 2);
    }

    .required {
        color: var(--red);
        font-weight: var(--bold-font-weight);
    }
    .input-description,
    .input-error {
        margin: calc(var(--form-gutter) / 2) 0 0 0;
        font-size: 0.8rem;
        font-weight: 500;
    }
    .input-error {
        color: var(--red);
    }
    .input-description {
        color: var(--light-text);
    }
    input[type='text'],
    input[type='password'],
    input[type='email'] {
        appearance: none;
    }
    input[type='text'],
    input[type='password'],
    input[type='email'],
    input[type='search'],
    input[type='number'],
    input[type='file'],
    input[type='time'],
    select,
    textarea {
        padding: 1rem;
        font-size: 1.4rem;
        border: 1px solid var(--light-grey-300);
        transition: border 0.25s var(--smooth-animation),
            box-shadow 0.25s var(--smooth-animation);
        border-radius: var(--small-border-radius);
        outline: none;
        line-height: 1.5;
        width: 100%;
        ${(props) => {
            if (props.touched && !props.valid) {
                return css`
                    border-color: var(--red);
                `;
            }
            return css``;
        }}

        &:focus {
            border-color: ${(props) => props.theme.colors.primary};
            box-shadow: inset 1px 1px 5px 0
                    color-mod(var(--blue-grey-400) alpha(80%)),
                var(--bs), 0 0 0 1px ${(props) => props.theme.colors.primary};
            ${(props) => {
                if (props.touched && !props.valid) {
                    return css`
                        border-color: var(--red);
                        box-shadow: inset 1px 1px 5px 0
                                color-mod(var(--blue-grey-400) alpha(80%)),
                            var(--bs), 0 0 0 1px var(--red);
                    `;
                }
                return css``;
            }}
        }
        &:disabled {
            background: var(--light-grey-300);
            cursor: not-allowed;
        }
    }
    input::-ms-clear {
        display: none;
    }
`;

export default FormFieldStyles;
