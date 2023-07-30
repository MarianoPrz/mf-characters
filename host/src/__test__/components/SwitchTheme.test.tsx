import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SwitchTheme from '../../components/SwitchTheme';

describe('SwitchTheme Component', () => {
    it('should invoke onChange callback when clicked', () => {
        const onChange = jest.fn();
        const { getByTestId } = render(<SwitchTheme onChange={onChange} />);

        const switchInput = getByTestId('switch-input');
        fireEvent.click(switchInput);

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should have checked attribute when clicked', () => {
        const { getByTestId } = render(<SwitchTheme onChange={() => { }} />);

        const switchInput = getByTestId('switch-input') as HTMLInputElement;
        fireEvent.click(switchInput);

        expect(switchInput.checked).toBe(true);
    });
});
