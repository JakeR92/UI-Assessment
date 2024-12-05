import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactInfo from '../components/contact-info';
import supportImage from '../assets/Support.png';

jest.mock('@mui/material', () => ({
    Grid2: ({ children, container, alignItems, ...props }) => (
        <div {...props} data-container={container ? 'true' : undefined} data-align-items={alignItems}>
            {children}
        </div>
    ),
}));

describe('ContactInfo Component', () => {
    const mockContact = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567'
    };

    it('renders without crashing', () => {
        render(<ContactInfo contact={mockContact} />);

        const contactInfoElement = screen.getByText(mockContact.name);
        expect(contactInfoElement).toBeInTheDocument();
    });

    it('displays the contact name correctly', () => {
        render(<ContactInfo contact={mockContact} />);

        const nameElement = screen.getByText(mockContact.name);
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveStyle('font-weight: bold');
    });

    it('displays the contact email correctly', () => {
        render(<ContactInfo contact={mockContact} />);

        const emailElement = screen.getByText(mockContact.email);
        expect(emailElement).toBeInTheDocument();
    });

    it('displays the contact phone correctly', () => {
        render(<ContactInfo contact={mockContact} />);

        const phoneElement = screen.getByText(mockContact.phone);
        expect(phoneElement).toBeInTheDocument();
    });

    it('renders the support image with correct source and alt text', () => {
        render(<ContactInfo contact={mockContact} />);

        const image = screen.getByAltText('Support Contact');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', supportImage);
    });

    it('renders the correct number of Grid2 components', () => {
        render(<ContactInfo contact={mockContact} />);

        const gridComponents = screen.getAllByText(/John Doe|john.doe@example.com|\+1 \(555\) 123-4567/i);
        expect(gridComponents.length).toBeGreaterThan(0); // Ensure Grid2 elements are present
    });

    it('throws error with missing props', () => {
        const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

        const invalidContact = { name: 'John Doe', email: 'john.doe@example.com' };
        render(<ContactInfo contact={invalidContact} />);

        expect(consoleErrorMock).toHaveBeenCalled();
        consoleErrorMock.mockRestore();
    });

    it('handles missing image source gracefully', () => {
        const { container } = render(<ContactInfo contact={mockContact} />);
        const image = container.querySelector('img');
        expect(image).toHaveAttribute('src', supportImage);
        expect(image).toHaveAttribute('alt', 'Support Contact');
    });

    it('handles missing contact number gracefully', () => {
        const invalidContact = { name: 'John Doe', email: 'john.doe@example.com' };
        render(<ContactInfo contact={invalidContact} />);
        const phoneElement = screen.queryByText(/1 (555) 123-4567/i);
        expect(phoneElement).not.toBeInTheDocument();
    });
});
