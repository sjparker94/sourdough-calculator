interface FormikFieldCustomProps {
    name: string;
    label: string;
    required?: boolean;
    placeholder?: string;
    description?: string;
    disabled?: boolean;
    /** only required for text fields that aren't text e.g. password/email */
    type?: string;
    /** css margin value */
    gutter?: string;
}

export default FormikFieldCustomProps;
