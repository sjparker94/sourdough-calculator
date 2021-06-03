import * as React from 'react';
import { useField } from 'formik';

import FormFieldStyles from './styles/FormFieldStyles';
import FormFieldLabel from './FormFieldLabel';
import FormikFieldCustomProps from './FormikFieldCustomProps';

type Props = FormikFieldCustomProps &
    React.InputHTMLAttributes<HTMLInputElement>;

function FormikFieldText({
    label,
    name,
    type = 'text',
    gutter,
    description,
    placeholder,
    autoComplete,
    disabled,
    required = false,
    ...html
}: Props): React.ReactElement {
    const [field, meta] = useField(name);
    const isTouched = meta.touched;
    const isError = !!meta.error;
    const errorMessage = meta.error;
    return (
        <FormFieldStyles
            gutter={gutter}
            valid={!isError}
            touched={isTouched}
            required={required}
        >
            <FormFieldLabel
                label={label}
                required={required}
                name={field.name}
                type={type}
            />
            <div className="input-wrapper">
                <input
                    {...html}
                    id={field.name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    disabled={disabled}
                    {...field}
                />
            </div>
            {isTouched && !!isError && (
                <p className="input-error">{errorMessage}</p>
            )}
            {description && <p className="input-description">{description}</p>}
        </FormFieldStyles>
    );
}

export default FormikFieldText;
