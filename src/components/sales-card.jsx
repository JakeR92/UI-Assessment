import React from 'react';
import PropTypes from 'prop-types';
import Statistic from "./statistic";
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid2 } from '@mui/material';
import styled from "styled-components";
import calculatePercentage from "../util/calculatePercentage";

const SalesCardWrapper = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

const SalesHeader = styled.div`
    display: flex;
    padding: 0 0 0 20px;
    align-items: center;
    margin-top: 0;
`;

const SalesTitle = styled.h3`
  margin-left: 12px;
`;

const SalesDescription = styled.p`
    display: flex;
    padding: 0 0 0 20px;
    text-align: left;
    margin-top: 0;
    flex-wrap: wrap;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #424242; 
  margin: 0 5px;
`;

const InfoIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  margin-right: 20px;
`;

const DividerHorizontal = styled.hr`
  border: 0;
  border-top: 1px solid #d3d3d3;
  margin: 0 0;
`;

const DividerVertical = styled.div`
  border-left: 1px solid #d3d3d3;
  height: 100%;
`;

/**
 * A functional component that displays a sales card showing the upload success percentage and lines saved statistics.
 * It uses `calculatePercentage` to determine the upload success and lines saved percentages.
 *
 * @component
 * @example
 * const salesData = {
 *   uploads: 200,
 *   successfulUploads: 180,
 *   linesAttempted: 300,
 *   linesSaved: 250
 * };
 * return (
 *   <SalesCard sales={salesData} />
 * );
 *
 * @param {Object} props - The props object.
 * @param {Object} props.sales - The sales data to be displayed.
 * @param {number} props.sales.uploads - The total number of uploads.
 * @param {number} props.sales.successfulUploads - The number of successful uploads.
 * @param {number} props.sales.linesAttempted - The total number of lines attempted.
 * @param {number} props.sales.linesSaved - The number of lines saved.
 *
 * @returns {JSX.Element} A React component that renders the sales card with upload success and lines saved statistics.
 */
const SalesCard = ({ sales }) => {
    const uploadSuccess = calculatePercentage(sales.successfulUploads, sales.uploads);
    const linesSaved = calculatePercentage(sales.linesSaved, sales.linesAttempted);

    return (
        <SalesCardWrapper aria-labelledby="sales-info" aria-live="polite">
            <SalesHeader>
                <FontAwesomeIcon icon={faUpload} color="rgb(62, 177, 235)"/>
                <SalesTitle aria-label="Sales">Sales</SalesTitle>
                <InfoIcon icon={faInfoCircle} color="grey"/>
            </SalesHeader>
            <SalesDescription id="sales-description" aria-label="sales-description">
                You had <BoldText>{sales.uploads}</BoldText> uploads and <BoldText>{sales.linesAttempted}</BoldText> lines added.
            </SalesDescription>

            <DividerHorizontal />

            <Grid2 container spacing={2} aria-live="polite">
                <Grid2 size={{xs: 12, sm: "grow"}}>
                    <Statistic label="UPLOAD SUCCESS" value={uploadSuccess.toFixed(0)}/>
                </Grid2>

                <Grid2 size={{xs: 0, sm: 0.1}}>
                    <DividerVertical />
                </Grid2>

                <Grid2 size={{xs: 12, sm: "grow"}}>
                    <Statistic label="LINES SAVED" value={linesSaved.toFixed(0)}/>
                </Grid2>
            </Grid2>
        </SalesCardWrapper>

    );
};

SalesCard.propTypes = {
    sales: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
    }).isRequired,
};

export default SalesCard;
