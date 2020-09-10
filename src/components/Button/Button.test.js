import Button from './Button';
import { render } from '@testing-library/react';

describe('component button', () => {
    test('render correct', () => {
        const testId = 'test-button';
        const { getByTestId } = render(<Button data-testid={testId} />);
        expect(getByTestId(testId)).toBeTruthy();
    });
});
