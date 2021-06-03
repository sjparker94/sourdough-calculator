import React from 'react';
import { FieldInputProps } from 'formik';

import FormikFieldCustomProps from './FormikFieldCustomProps';

type Props = Pick<FormikFieldCustomProps, 'label' | 'required' | 'type'> &
    Pick<FieldInputProps<''>, 'name'> & {};

/**
 * form label element with optional popup for extra information about the form field
 */
function FormFieldLabel({
    label,
    required,
    type = 'text',
    name,
}: Props): React.ReactElement {
    const isCheckbox = type === 'checkbox';
    return (
        // disabled as the related form element is in another component
        // eslint-disable-next-line
        <label htmlFor={!isCheckbox ? name : ''}>
            {label}
            {required && <span className="required">*</span>}
        </label>
    );
}

export default FormFieldLabel;
