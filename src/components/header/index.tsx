import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { StyledToolbar, CustomIconButton } from "./styles";
import SearchForm from "../form";
import SearchIcon from "../../assets/icon_search_.png";
import Title from "../title";

interface HeaderProps {
  setPodcasts: React.Dispatch<React.SetStateAction<any[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setPodcasts, setIsLoading }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        padding: '25px 4px 20px 4px',
        background: 'white',
        boxShadow: 'none',
      }}
    >
      <StyledToolbar>
        <Title title='Podcasts'/>
        {isSearchOpen ? (
          <SearchForm handleSearchToggle={handleSearchToggle} setPodcasts={setPodcasts} setIsLoading={setIsLoading} />
        ) : (
          <CustomIconButton edge="start" color="inherit" aria-label="menu" onClick={handleSearchToggle} >
            <img src={SearchIcon} alt="search-icon" />
          </CustomIconButton>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
