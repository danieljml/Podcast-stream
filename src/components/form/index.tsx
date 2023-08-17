import React, { useState } from "react";
import { Form, ContainerInput, CustomInputBase, CustomIconButton } from "./styles";
import SearchIcon from "../../assets/icon_search_.png";
import { searchPodcasts } from "../../api";
import { useNavigate } from "react-router-dom";

interface SearchFormProps {
  handleSearchToggle: () => void;
  setPodcasts: React.Dispatch<React.SetStateAction<any[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm: React.FC<SearchFormProps> = ({
  setPodcasts,
  setIsLoading,
  handleSearchToggle
}) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const performSearch = async () => {
    if (searchValue) {
      setIsLoading(true);
      navigate(`/search/${searchValue}`);
      const searchData = await searchPodcasts(searchValue);
      if (!searchData.length) {
        navigate("/");
      }
      setPodcasts(searchData);
      setIsLoading(false);
      setSearchValue("");
    }
    handleSearchToggle();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event?.preventDefault();
    await performSearch();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleIconButtonClick = () => {
    performSearch();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerInput>
        <CustomInputBase
          placeholder="Search"
          name="name"
          value={searchValue}
          onChange={handleInputChange}
        />
        <CustomIconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleIconButtonClick}
        >
          <img src={SearchIcon} alt="search-icon"/>
        </CustomIconButton>
      </ContainerInput>
    </Form>
  );
};

export default SearchForm;
