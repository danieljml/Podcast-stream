import styled from 'styled-components';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

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
`;

export const CustomIconButton = styled(IconButton)`
  width: 42px;
  height: 42px;
  padding: 4px;
  
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const CustomInputBase = styled(InputBase)`
  font-family: Raleway;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  color: rgba(0, 0, 0, 0.7);
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  padding: 0 4px;
  align-items: center;
  min-height: unset;
  flex-wrap: wrap;
  row-gap: 15px;
`;
