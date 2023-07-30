import React from "react";
import { render } from '@testing-library/react';
import { SectionBg, Section } from "../../components/Section";

describe('Section', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <Section>
                <div>Child Component</div>
            </Section>
        );

        expect(getByText('Child Component')).toBeInTheDocument();
    });
});

describe('SectionBg', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <SectionBg>
                <div>Child Component</div>
            </SectionBg>
        );

        expect(getByText('Child Component')).toBeInTheDocument();
    });

    it('has correct padding', () => {
        const { container } = render(<SectionBg />);
        const sectionBg = container.firstChild;

        expect(sectionBg).toHaveStyleRule('padding', '0 0 5rem 0');
    });
});
