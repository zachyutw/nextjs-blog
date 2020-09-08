import Button from './Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('component button', () => {
    test('render correct', () => {
        const testId = 'test-button';
        const { getByTestId } = render(<Button data-testid={testId} />);
        expect(getByTestId(testId)).toBeTruthy();
    });
});
