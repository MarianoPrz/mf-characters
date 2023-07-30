import React from 'react';
import { render } from '@testing-library/react';
import Typography from '../../components/Typography';

describe('Typography Component', () => {
    it('should render with default tag and no className', () => {
        const { container } = render(<Typography>Hello World</Typography>);

        expect(container.firstChild).toBeInTheDocument();
        if (container.firstChild instanceof Element) {
            expect(container.firstChild.tagName.toLowerCase()).toBe('p');
            expect(container.firstChild.textContent).toBe('Hello World');
            expect(container.firstChild.className).toBe('');
        }
    });

    it('should render with specific tag and className', () => {
        const { container } = render(
            <Typography tag="h1" className="my-class">Hello World</Typography>
        );

        expect(container.firstChild).toBeInTheDocument();
        if (container.firstChild instanceof Element) {
            expect(container.firstChild.tagName.toLowerCase()).toBe('h1');
            expect(container.firstChild.textContent).toBe('Hello World');
            expect(container.firstChild.className).toBe('my-class');
        }
    });
});
