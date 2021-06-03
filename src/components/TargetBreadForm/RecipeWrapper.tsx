import styled from 'styled-components';

export const RecipeWrapper = styled.div`
    padding: var(--content-gutter);
    margin-top: var(--content-gutter);
    border: 1px solid var(--light-grey-300);
    box-shadow: var(--content-bs);
    h2 {
        font-size: 2rem;
    }
`;
export const RecipeErrorWrapper = styled.div`
    padding: var(--content-gutter);
    margin-top: var(--content-gutter);
    border: 1px solid var(--red);
    border-left: 5px solid var(--red);
    box-shadow: var(--content-bs);
`;
