import React from 'react';
import PropTypes from 'prop-types';
import {Grid2} from "@mui/material";
import ContactInfo from "./contact-info";
import styled from "styled-components";


const Title = styled.h2`
  text-align: left;
  color: slategrey;
`;

const Subheading = styled.h4`
  font-weight: bold;
  margin-bottom: 0;
  text-align: left;
  color: gray;
`;

/**
 * A functional component that renders the header section of the account overview, including the title and support contact information.
 *
 * @component
 * @example
 * const contact = { name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890' };
 * return (
 *   <Header contact={contact} />
 * );
 *
 * @param {Object} props - The props object.
 * @param {Object} props.contact - The contact information to be displayed.
 * @param {string} props.contact.name - The name of the support contact.
 * @param {string} props.contact.email - The email address of the support contact.
 * @param {string} props.contact.phone - The phone number of the support contact.
 *
 * @returns {JSX.Element} A React component that renders the header with the account overview title and contact info.
 */
const Header = ({ contact }) => {
    return (
        <Grid2 container spacing={2} sx={{ paddingBottom: '16px' }} role="header">
            <Grid2 alignItems={"center"} size={{ xs: 12, sm: 6, md: 5 }} paddingTop={{xs: 0, sm: 3}}>
                <Title id="header-info" aria-label="Account Overview">Account Overview</Title>
            </Grid2>
            <Grid2 container spacing={2} size={{xs: 12, sm: 6, md: 7}} justifyContent="flex-start">
                    <Grid2 size={12} aria-labelledby="contact-info-label">
                        <Subheading id="contact-info-label" aria-label="contact-info-label" >
                            YOUR FEEFO SUPPORT CONTACT
                        </Subheading>
                    </Grid2>

                    <Grid2 container spacing={2} alignItems="center">
                        <ContactInfo contact={contact} />
                    </Grid2>

                </Grid2>
        </Grid2>
    );
};

Header.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;