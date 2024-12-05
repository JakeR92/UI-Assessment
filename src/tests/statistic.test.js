import React from 'react';
import { render, screen } from '@testing-library/react';
import Statistic from '../components/statistic';

describe('Statistic Component', () => {
    const mockLabel = 'UPLOAD SUCCESS';
    const mockValue = 75;

    it('renders without crashing', () => {
        render(<Statistic label={mockLabel} value={mockValue} />);

        const statisticLabel = screen.getByText(mockLabel);
        const statisticValue = screen.getByText(`${mockValue}%`);

        expect(statisticLabel).toBeInTheDocument();
        expect(statisticValue).toBeInTheDocument();
    });

    it('displays the correct label and value', () => {
        render(<Statistic label={mockLabel} value={mockValue} />);

        const statisticLabel = screen.getByText(mockLabel);
        const statisticValue = screen.getByText(`${mockValue}%`);

        expect(statisticLabel).toHaveTextContent(mockLabel);
        expect(statisticValue).toHaveTextContent(`${mockValue}%`);
    });

    it('applies correct styling to the components', () => {
        const { container } = render(<Statistic label={mockLabel} value={mockValue} />);

        const statisticWrapper = container.querySelector('div');
        const statisticValue = container.querySelector('p');
        const statisticLabel = container.querySelector('h4');

        expect(statisticWrapper).toHaveStyle('padding: 15px 0 15px 20px');
        expect(statisticValue).toHaveStyle('font-size: 35px');
        expect(statisticValue).toHaveStyle('color: #0F9D58');
        expect(statisticLabel).toHaveStyle('font-size: 15px');
        expect(statisticLabel).toHaveStyle('color: #6c6c6c');
    });

    it('applies correct aria-label to StatisticValue for accessibility', () => {
        render(<Statistic label={mockLabel} value={mockValue} />);

        const statisticValue = screen.getByLabelText(mockLabel);
        expect(statisticValue).toBeInTheDocument();
    });
});
