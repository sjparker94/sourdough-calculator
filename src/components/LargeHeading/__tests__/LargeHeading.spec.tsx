import React from 'react';
import { render, screen } from '@testing-library/react';
import { LargeHeading } from '@/components/LargeHeading/LargeHeading';

// test to check tests are all setup correctly
describe('<LargeHeading />', () => {
    it('renders correctly', () => {
        render(<LargeHeading>Hello world</LargeHeading>);

        const helloWorldEl = screen.getByText(/hello world/i);

        expect(helloWorldEl).toBeInTheDocument();
    });
});
