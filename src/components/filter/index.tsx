import React from "react";
import {
  StyledButton,
  IconStyledButton,
  Icon,
  Number,
  FilterContainer
} from "./styles";
import FavoriteIcon from "../../assets/icon_star_.png";

interface FilterProps {
  favoriteCount: number;
}

const Filter: React.FC<FilterProps> = ({ favoriteCount }) => {
  return (
    <FilterContainer>
      <StyledButton to="/">Trending</StyledButton>
      <IconStyledButton to="/favorites">
        <Icon>
          <img src={FavoriteIcon} alt="favorite-icon" />
        </Icon>
        Favoritos <Number>{favoriteCount}</Number>
      </IconStyledButton>
    </FilterContainer>
  );
};

export default Filter;
