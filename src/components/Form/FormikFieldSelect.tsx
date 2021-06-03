import React, { InputHTMLAttributes, PropsWithChildren } from 'react';
import { useField } from 'formik';

import FormFieldStyles from './styles/FormFieldStyles';
import FormFieldLabel from './FormFieldLabel';
import FormikFieldCustomProps from './FormikFieldCustomProps';

interface DropDownOption {
    title: string;
    value: string | number;
}

type Props = FormikFieldCustomProps &
    InputHTMLAttributes<HTMLSelectElement> & {
        /** the dropdown items/options */
        options?: DropDownOption[];
        /** set to true if there is reason for no blank first dropdown item */
        isNoBlankOption?: boolean;
    };

function FormFieldSelect({
    label,
    required = false,
    description,
    name,
    placeholder,
    options,
    disabled,
    isNoBlankOption,
    gutter,
    type = 'select',
    children,
}: PropsWithChildren<Props>): React.ReactElement {
    const [field, meta] = useField({ name, type });
    const isTouched = meta.touched;
    const isError = !!meta.error;
    const errorMessage = meta.error;
    return (
        <FormFieldStyles
            gutter={gutter}
            required={required}
            touched={isTouched}
            valid={!isError}
        >
            <FormFieldLabel
                label={label}
                required={required}
                name={name}
                type="select"
            />
            <div className="input-wrapper">
                <select
                    id={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    aria-required={required}
                    aria-label={label}
                    {...field}
                >
                    {
                        // If there is reason for no blank dropdown items
                        !isNoBlankOption && (
                            <option value="">{placeholder}</option>
                        )
                    }
                    {options &&
                        options.length > 0 &&
                        options.map((option, i) => (
                            <option key={i} value={option.value}>
                                {option.title}
                            </option>
                        ))}
                    {children}
                </select>
            </div>
            {isTouched && !!isError && (
                <p className="input-error">{errorMessage}</p>
            )}
            {description && <p className="input-description">{description}</p>}
        </FormFieldStyles>
    );
}

export default FormFieldSelect;
