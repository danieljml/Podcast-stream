import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  border-radius: 20px;
  background: #0F0F2D;
  color: #FFF;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  border: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
	text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const IconStyledButton = styled(Link)`
	text-decoration: none;
  align-items: center;
  background: rgba(217, 217, 217, 0.00);
  border-radius: 20px;
  border: 1px solid #0F0F2D;
  color: #000;
  cursor: pointer;
  display: flex;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  padding: 10px 20px;
  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.span`
  margin-right: 8px
`;

export const Number = styled.span`
  border-radius: 15px;
  background: #0F0F2D;
  color: white;
  display: grid;
  place-items: center;
  margin-left: 8px;
  width: 30px;
  height: 30px;
`;

export const FilterContainer = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 0 30px;
`;
