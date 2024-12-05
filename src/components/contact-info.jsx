import React from 'react';
import PropTypes from 'prop-types';
import {Grid2} from "@mui/material";
import supportImage from '../assets/Support.png';
import styled from "styled-components";

const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    align-items: flex-start;
`;

/**
 * A functional component that displays contact information with an image, name, email, and phone number.
 *
 * @component
 * @example
 * const contact = { name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890' };
 * return (
 *   <ContactInfo contact={contact} />
 * );
 *
 * @param {Object} props - The props object.
 * @param {Object} props.contact - The contact information to be displayed.
 * @param {string} props.contact.name - The name of the contact.
 * @param {string} props.contact.email - The email address of the contact.
 * @param {string} props.contact.phone - The phone number of the contact.
 *
 * @returns {JSX.Element} A React component that renders the contact information.
 */
const ContactInfo = ({ contact }) => {
    return (
        <Grid2 container spacing={2} alignItems="center">
            <Grid2 size={{ xs: 12, sm: 4, md: 3 }} sx={{
                textAlign: { xs: 'left', sm: 'center' }
            }} >
                <img src={supportImage} alt="Support Contact"/>
            </Grid2>

            <Grid2 size={{xs: 12, sm: 8, md: 9 }} sx={{
                textAlign: { xs: 'left', sm: 'center' },
                paddingLeft: { xs: '0', sm: '0' }
            }}>
                <ContactInfoWrapper>
                    <div style={{fontWeight: "bold", fontSize: "1.2rem"}}>
                        {contact.name}
                    </div>
                    <Grid2 container>
                        <Grid2 size={{xs: 12, md: 10}} sx={{ textAlign: 'left' }}>
                        <div>{contact.email}</div>
                        </Grid2>
                        <Grid2 size={{xs: 12, md: 2}} sx={{ textAlign: 'left' }}>
                        <div>{contact.phone}</div>
                        </Grid2>
                    </Grid2>
                </ContactInfoWrapper>
            </Grid2>
        </Grid2>
    );
};

ContactInfo.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default ContactInfo;