// Import the necessary testing dependencies
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <Navbar>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </Navbar>
        );

        expect(getByText('Child 1')).toBeInTheDocument();
        expect(getByText('Child 2')).toBeInTheDocument();
        expect(getByText('Child 3')).toBeInTheDocument();
    });
});
