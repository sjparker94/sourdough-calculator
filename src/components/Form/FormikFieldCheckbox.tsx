import * as React from 'react';
import { useField } from 'formik';

import FormFieldStyles from './styles/FormFieldStyles';
import FormCheckboxStyles from './styles/FormCheckboxStyles';
import FormFieldLabel from './FormFieldLabel';
import FormikFieldCustomProps from './FormikFieldCustomProps';

interface Props extends Omit<FormikFieldCustomProps, 'label'> {
    /** Use this if it is a checkbox group as they need a unique identifier that cannot be taken from name value */
    id?: string;
    /** optional when using checkbox - will be displayed above the checkbox if required */
    label?: string;
    checkboxLabel: string;
    /** Use this if it is a checkbox group or you want a specific value, otherwise it will be a true false set by formik */
    value?: string | number;
    /** removes the animation on checking and unchecking the box */
    isNoTransition?: boolean;
    /** extra description text underneath the checkbox label */
    checkboxLabelSubText?: string;
    /** css value edit the padding styles */
    checkboxPadding?: string;
    /** size of the checkbox check item */
    checkboxSquareSize?: string;
}

function FormikFieldCheckbox({
    name,
    id,
    label,
    value,
    required = false,
    description,
    checkboxLabel,
    gutter,
    isNoTransition,
    checkboxLabelSubText,
    checkboxPadding,
    checkboxSquareSize,
}: Props): React.ReactElement {
    const [field, meta] = useField({ name, value, type: 'checkbox' });
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
            {label && (
                <FormFieldLabel
                    label={label}
                    required={required}
                    name={field.name}
                    type="checkbox"
                />
            )}

            <div className="input-wrapper">
                <FormCheckboxStyles
                    checkboxPadding={checkboxPadding}
                    checkboxSquareSize={checkboxSquareSize}
                    isNoTransition={isNoTransition}
                    className="custom-checkbox-wrapper"
                >
                    <input
                        className="custom-checkbox"
                        type="checkbox"
                        id={id || field.name}
                        aria-label={checkboxLabel}
                        {...field}
                    />

                    {/* linked to the element above for styling so remove the eslint warning */}
                    {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                    <label
                        className="custom-checkbox-label"
                        htmlFor={id || field.name}
                    >
                        <span className="custom-check-icon">
                            <i className="material-icons">check</i>
                        </span>
                        <span className="custom-checkbox-text">
                            <span className="main-checkbox-label-text">
                                {checkboxLabel}
                                {required && (
                                    <span className="required">*</span>
                                )}
                            </span>
                            {checkboxLabelSubText && (
                                <span className="checkbox-label-subtext">
                                    {checkboxLabelSubText}
                                </span>
                            )}
                        </span>
                    </label>
                </FormCheckboxStyles>
            </div>
            {isTouched && !!isError && (
                <p className="input-error">{errorMessage}</p>
            )}
            {description && <p className="input-description">{description}</p>}
        </FormFieldStyles>
    );
}

export default FormikFieldCheckbox;
