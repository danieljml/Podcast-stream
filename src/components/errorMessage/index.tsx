import React from 'react'
import styled from "styled-components";

interface ErrorMessageProps {
  message: string;
}


const NoDataMessage = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: gray;
  padding: 20px;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <NoDataMessage>{message}</NoDataMessage>
  )
}

export default React.memo(ErrorMessage);