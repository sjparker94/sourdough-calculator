import styled from 'styled-components';
import { hideVisually } from 'polished';

/** styled checkbox to hide it from the dom in an accessible way */
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    ${hideVisually()};
`;

export default HiddenCheckbox;
