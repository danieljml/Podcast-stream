import styled from 'styled-components';
import IconButton from "@mui/material/IconButton";

export const Form = styled.form`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: 2px solid #0F0F2D;
  border-radius: 45px;
  background: rgba(217, 217, 217, 0.00);
  width: 359px;
  height: 58px;
  padding: 11px 14px 11px 16px;
  @media (max-width: 500px) {
    width: 100%;
    background: #EEE;
    outline: unset;
    border-radius: unset;
  }
`;

export const CustomIconButton = styled(IconButton)(({}) => `
  width: 42px;
  height: 42px;
  padding: 4px;
  & img {
    width: 100%;
    height: 100%;
  }
`);

export const CustomInputBase = styled.input`
  color: rgba(0, 0, 0, 0.7);
  font-family: Raleway;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background-color: inherit;
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    &::placeholder {
      color: #333;
      font-size: 20px;
      font-weight: 900;
    }
  }
`;
