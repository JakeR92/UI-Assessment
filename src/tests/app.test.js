import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';

jest.mock('../components/account-overview', () => {
    return function MockAccountOverview({ data }) {
        return (
            <div data-testid="mock-account-overview">
                {data.supportContact.name}
            </div>
        );
    };
});

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);

        const appElement = screen.getByTestId('mock-account-overview');
        expect(appElement).toBeInTheDocument();
    });

    it('passes correct account overview data to AccountOverview', () => {
        render(<App />);

        const accountOverview = screen.getByTestId('mock-account-overview');
        expect(accountOverview).toHaveTextContent('John Smith');
    });

    it('renders with correct className', () => {
        const { container } = render(<App />);

        const appContainer = container.firstChild;
        expect(appContainer).toHaveClass('App');
    });

    it('matches the predefined account overview stub', () => {
        render(<App />);

        const accountOverview = screen.getByTestId('mock-account-overview');
        expect(accountOverview).toBeInTheDocument();

        const expectedData = {
            supportContact: {
                name: 'John Smith',
                email: 'john.smith@feefo.com'
            },
            salesOverview: {
                uploads: 8,
                successfulUploads: 3,
                linesAttempted: 20,
                linesSaved: 4,
            }
        };

        expect(accountOverview.textContent).toContain(expectedData.supportContact.name);
    });
});