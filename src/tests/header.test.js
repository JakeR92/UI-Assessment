import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { ContactInfo } from '../components/contact-info';

jest.mock('../components/contact-info', () => {
    return function MockContactInfo({ contact }) {
        return (
            <div data-testid="mock-contact-info">
                {contact.name} - {contact.email} - {contact.phone}
            </div>
        );
    };
});

describe('Header Component', () => {
    const mockContact = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    };

    it('renders without crashing', () => {
        render(<Header contact={mockContact} />);

        const title = screen.getByText('Account Overview');
        const subheading = screen.getByText('YOUR FEEFO SUPPORT CONTACT');
        const contactInfo = screen.getByTestId('mock-contact-info');

        expect(title).toBeInTheDocument();
        expect(subheading).toBeInTheDocument();
        expect(contactInfo).toBeInTheDocument();
    });

    it('passes correct contact info to ContactInfo component', () => {
        render(<Header contact={mockContact} />);

        const contactInfo = screen.getByTestId('mock-contact-info');
        expect(contactInfo).toHaveTextContent('John Doe');
        expect(contactInfo).toHaveTextContent('john.doe@example.com');
        expect(contactInfo).toHaveTextContent('123-456-7890');
    });

    it('renders with correct aria-label attributes', () => {
        render(<Header contact={mockContact} />);

        const title = screen.getByLabelText('Account Overview');
        const subheading = screen.getByLabelText('contact-info-label');

        expect(title).toBeInTheDocument();
        expect(subheading).toBeInTheDocument();
    });

    it('renders with correct class names and styles (optional)', () => {
        const { container } = render(<Header contact={mockContact} />);

        const title = container.querySelector('h2');
        const subheading = container.querySelector('h4');

        expect(title).toHaveStyle('color: slategrey');
        expect(subheading).toHaveStyle('color: gray');
    });
});
