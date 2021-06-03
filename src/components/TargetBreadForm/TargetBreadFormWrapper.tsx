import React, { ReactElement, useEffect, useState } from 'react';
import { withFormik, FormikProps } from 'formik';
import { number, object, SchemaOf } from 'yup';
import { TargetBread } from '@/types/targetBread';
import { Recipe } from '@/types/recipe';
import { calculateRecipeFromTarget } from '@/utils/calculateRecipeFromTarget';
import { TargetBreadForm } from './TargetBreadForm';
import { RecipeErrorWrapper, RecipeWrapper } from './RecipeWrapper';

type OtherProps = TargetBread;
type Props = OtherProps & FormikProps<TargetBread>;

const percentageValidation = number()
    .min(0, 'The minimum value is 0')
    .max(100, 'The maximum value is 100')
    .required('This field is required');

const targetBreadSchema: SchemaOf<TargetBread> = object().shape({
    totalWeight: number().min(1).required('Required'),
    doughHydration: percentageValidation,
    salt: percentageValidation,
    levain: percentageValidation,
    levainHydration: percentageValidation,
    proofingTemperature: number().required('Required'),
});

export function TargetBreadInnerFormWrapper({
    // isSubmitting,
    // touched,
    isValid,
    setFieldValue,
    values,
    errors,
}: Props): ReactElement {
    const [recipeValues, setRecipeValues] = useState<Recipe>(
        calculateRecipeFromTarget(values)
    );
    useEffect(() => {
        if (isValid) {
            setRecipeValues(calculateRecipeFromTarget(values));
        }
    }, [isValid, values]);

    return (
        <>
            <TargetBreadForm />
            {isValid ? (
                <RecipeWrapper>
                    <h2>Dough Recipe</h2>
                    <p>
                        <strong>{recipeValues.flour}</strong>g of flour,{' '}
                        <strong>{recipeValues.salt}</strong>g of water,{' '}
                        <strong>{recipeValues.levain}</strong>g of levain and{' '}
                        <strong>{recipeValues.salt}</strong>g of salt, fermented
                        for ~<strong>{recipeValues.fermentationTime}</strong>{' '}
                        hours.
                    </p>
                </RecipeWrapper>
            ) : (
                <RecipeErrorWrapper>
                    <p>
                        The data is invalid - view input boxes for full errors
                    </p>
                </RecipeErrorWrapper>
            )}
        </>
    );
}

export const TargetBreadFormWrapper = withFormik<OtherProps, TargetBread>({
    // Transform outer props into form values
    mapPropsToValues: (props) => ({ ...props }),
    validationSchema: targetBreadSchema,
    handleSubmit: async (values, { props, setSubmitting }) => {
        // try {
        // } catch (e) {}
    },
    displayName: 'TargetBreadFormWrapper',
})(TargetBreadInnerFormWrapper);
