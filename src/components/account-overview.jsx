import PropTypes from 'prop-types';
import Header from "./header";
import SalesCard from "./sales-card";
import styled from "styled-components";

const AccountOverviewWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgb(240, 240, 240);
`;

/**
 * A functional component that displays an account overview, including a header with contact information and a sales card with an overview of sales data.
 *
 * @component
 * @example
 * const data = {
 *   supportContact: { name: 'John Doe', email: 'john.doe@example.com' },
 *   salesOverview: { uploads: 100, successfulUploads: 95, linesAttempted: 200, linesSaved: 180 }
 * };
 * return (
 *   <AccountOverview data={data} />
 * );
 *
 * @param {Object} props - The props object.
 * @param {Object} props.data - The data to be displayed in the account overview.
 * @param {Object} props.data.supportContact - The support contact details.
 * @param {string} props.data.supportContact.name - The name of the support contact.
 * @param {string} props.data.supportContact.email - The email of the support contact.
 * @param {Object} props.data.salesOverview - The sales data overview.
 * @param {number} props.data.salesOverview.uploads - The total number of uploads.
 * @param {number} props.data.salesOverview.successfulUploads - The number of successful uploads.
 * @param {number} props.data.salesOverview.linesAttempted - The number of lines attempted.
 * @param {number} props.data.salesOverview.linesSaved - The number of lines saved.
 *
 * @returns {JSX.Element} A React component that renders the account overview with a header and sales card.
 */
const AccountOverview = ({ data }) => {
    return (
        <AccountOverviewWrapper>
            <Header contact={data.supportContact} />
            <SalesCard sales={data.salesOverview} />
        </AccountOverviewWrapper>
    );
};

AccountOverview.propTypes = {
    data: PropTypes.shape({
        supportContact: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
        salesOverview: PropTypes.shape({
            uploads: PropTypes.number.isRequired,
            successfulUploads: PropTypes.number.isRequired,
            linesAttempted: PropTypes.number.isRequired,
            linesSaved: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default AccountOverview;