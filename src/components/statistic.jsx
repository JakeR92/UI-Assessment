import React from "react";
import styled from "styled-components";

const StatisticWrapper = styled.div`
  display: flex;
  padding: 15px 0 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StatisticValue = styled.p`
  font-size: 35px;
  color: #0F9D58;
  font-weight: bold;
  margin: 0;
  text-align: left;
`;

const StatisticLabel = styled.h4`
  font-size: 15px;
  color: #6c6c6c; 
  margin: 0;
  text-align: left;
`;

/**
 * A functional component that displays a statistic with a value and its corresponding label.
 * The value is presented as a percentage with a large font size, and the label is styled smaller in grey.
 *
 * @component
 * @example
 * const statisticData = {
 *   label: "UPLOAD SUCCESS",
 *   value: 90
 * };
 * return (
 *   <Statistic label={statisticData.label} value={statisticData.value} />
 * );
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label for the statistic (e.g., "UPLOAD SUCCESS").
 * @param {number} props.value - The percentage value to display (e.g., 90).
 *
 * @returns {JSX.Element} A React component that renders a statistic with a value and a label.
 */
const Statistic = ({ label, value }) => {
    return (
        <StatisticWrapper>
            <StatisticValue aria-label={label}>{value}%</StatisticValue>
            <StatisticLabel>{label}</StatisticLabel>
        </StatisticWrapper>
    );
};

export default Statistic;
