import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountOverview from '../components/account-overview';

jest.mock('../components/header', () => {
  return function MockHeader({ contact }) {
    return <div data-testid="mock-header">{contact.name}</div>;
  };
});

jest.mock('../components/sales-card', () => {
  return function MockSalesCard({ sales }) {
    return <div data-testid="mock-sales-card">{sales.uploads}</div>;
  };
});

describe('AccountOverview Component', () => {
  const mockData = {
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

  it('renders without crashing', () => {
    render(<AccountOverview data={mockData} />);

    const accountOverviewWrapper = screen.getByTestId('mock-header');
    expect(accountOverviewWrapper).toBeInTheDocument();
  });

  it('passes correct data to Header', () => {
    render(<AccountOverview data={mockData} />);

    const headerElement = screen.getByTestId('mock-header');
    expect(headerElement).toHaveTextContent(mockData.supportContact.name);
  });

  it('passes correct data to SalesCard', () => {
    render(<AccountOverview data={mockData} />);

    const salesCardElement = screen.getByTestId('mock-sales-card');
    expect(salesCardElement).toHaveTextContent(mockData.salesOverview.uploads);
  });

  it('matches the predefined data', () => {
    render(<AccountOverview data={mockData} />);

    expect(screen.getByTestId('mock-header')).toHaveTextContent(mockData.supportContact.name);
    expect(screen.getByTestId('mock-sales-card')).toHaveTextContent(mockData.salesOverview.uploads);
  });
});
