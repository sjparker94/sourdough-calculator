import React from 'react';
import styled from 'styled-components';
import FormikFieldText from '../Form/FormikFieldText';
import { FormStylesFormik } from '../Form/FormStylesFormik';

const FormFieldsWrapper = styled.div`
    display: grid;
    gap: var(--content-gutter);
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    > * {
    }
`;

export function TargetBreadForm() {
    return (
        <FormStylesFormik>
            <FormFieldsWrapper>
                <FormikFieldText
                    name="totalWeight"
                    type="number"
                    label="Total weight"
                    description="Grams total weight of the dough to bake."
                    required
                />
                <FormikFieldText
                    name="doughHydration"
                    type="number"
                    label="Dough hydration"
                    description="% dough hydration (water to flour ratio)."
                    required
                />
                <FormikFieldText
                    name="salt"
                    type="number"
                    label="Salt"
                    description="% salt to flour ratio; typically ranges from 1.5% to 3%."
                    required
                    step="0.1"
                />
                <FormikFieldText
                    name="levain"
                    type="number"
                    label="Levain"
                    description="Typically 10% to 30%, depending on how long you want the dough to ferment."
                    required
                />
                <FormikFieldText
                    name="levainHydration"
                    type="number"
                    label="Levain hydration"
                    description="% levain hydration; typically 100%."
                    required
                />
                <FormikFieldText
                    name="proofingTemperature"
                    type="number"
                    label="Proofing temperature"
                    description="C proofing temperature; the temperature of the dough during fermentation (bulk rise)."
                    required
                />
            </FormFieldsWrapper>
        </FormStylesFormik>
    );
}
