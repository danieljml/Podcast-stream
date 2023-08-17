import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
}

const CustomTypography = styled.h1`
  margin: 0;
  font-family: Raleway, Arial, sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  padding: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  text-align: left;
  color: #0f0f2d;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const Title: React.FC<TitleProps> = ({ title }) => {
  return <CustomTypography>{title}</CustomTypography>;
};

export default React.memo(Title);
