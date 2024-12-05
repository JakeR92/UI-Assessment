import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesCard from '../components/sales-card';
import calculatePercentage from '../util/calculatePercentage';

jest.mock('../util/calculatePercentage', () => jest.fn());

describe('SalesCard Component', () => {
    const mockSales = {
        uploads: 10,
        successfulUploads: 7,
        linesAttempted: 15,
        linesSaved: 12,
    };

    beforeEach(() => {
        calculatePercentage.mockImplementation((numerator, denominator) => (numerator / denominator) * 100);
    });

    it('renders without crashing', () => {
        render(<SalesCard sales={mockSales} />);

        const salesTitle = screen.getByText(/Sales/i);
        expect(salesTitle).toBeInTheDocument();
    });

    it('displays "UPLOAD SUCCESS" label', () => {
        render(<SalesCard sales={mockSales} />);

        const uploadSuccessLabel = screen.getByText(/UPLOAD SUCCESS/i);
        expect(uploadSuccessLabel).toBeInTheDocument();
    });

    it('displays "LINES SAVED" label', () => {
        render(<SalesCard sales={mockSales} />);

        const linesSavedLabel = screen.getByText(/LINES SAVED/i);
        expect(linesSavedLabel).toBeInTheDocument();
    });

    it('displays sales statistics correctly', () => {
        render(<SalesCard sales={mockSales} />);

        const salesDescription = screen.getByLabelText('sales-description');
        expect(salesDescription).toBeInTheDocument();
    });

    it('applies correct styles to the SalesCardWrapper', () => {
        const { container } = render(<SalesCard sales={mockSales} />);

        const salesCardWrapper = container.querySelector('section');
        expect(salesCardWrapper).toHaveStyle('background-color: #fff');
        expect(salesCardWrapper).toHaveStyle('border-radius: 8px');
    });

    it('has correct ARIA attributes for accessibility', () => {
        render(<SalesCard sales={mockSales} />);

        const salesCardWrapper = screen.getByRole('region');
        expect(salesCardWrapper).toHaveAttribute('aria-live', 'polite');
        expect(salesCardWrapper).toHaveAttribute('aria-labelledby', 'sales-info');
    });

    it('renders the divider components correctly', () => {
        render(<SalesCard sales={mockSales} />);

        const dividerHorizontal = screen.getByRole('separator');
        expect(dividerHorizontal).toBeInTheDocument();
    });
});
