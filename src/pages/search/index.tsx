import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import Card from '../../components/card';
import Loading from '../../components/loading';
import ActiveCard from '../../components/card/active';
import { searchPodcasts } from "../../api";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38px 40px;
  padding: 30px 154px;

  @media (max-width: 500px) {
    padding: 30px;
  }
`;

interface SearchPageProps {
  podcasts: any[];
  isLoading: boolean;
  favorites: any;
  setFavorites: any;
  handleCardClick: (cardId: string) => void;
  fetchTrendingData: () => void;
  handleCloseSidebar: () => void;
  toggleAudioPlayback: (audioUrl: string, episode: any) => void;
  currentAudioUrl: string | null;
  isMobile: boolean;
  setPodcasts: React.Dispatch<React.SetStateAction<any[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<SearchPageProps> = ({
  podcasts,
  isLoading,
  favorites,
  setFavorites,
  handleCardClick,
  handleCloseSidebar,
  toggleAudioPlayback,
  isMobile,
  setPodcasts,
  setIsLoading,
}) => {
  const { podcast } = useParams();
  const navigate = useNavigate();

  const handleSearchPodcasts = async () => {
    if (podcast) {
      const searchData = await searchPodcasts(podcast);
      setIsLoading(true);
      if(!searchData.length){
        navigate("/")
      }
      setPodcasts(searchData);
      setIsLoading(false);
    }
  } 

  useEffect(() => {
    if (podcast) {
      handleSearchPodcasts()
    }
  }, []);
  return (
    <SearchContainer>
      {isLoading ? (
        <Loading />
      ) : (
        podcasts.map(card =>
          card.selectedEpisode ? (
            <ActiveCard key={card.id} card={card} handleCloseSidebar={handleCloseSidebar} toggleAudioPlayback={toggleAudioPlayback}/>
          ) : (
            <Card
              favorites={favorites}
              setFavorites={setFavorites}
              author={card.author}
              content={card.description}
              id={card.id}
              image={card.image}
              key={card.id}
              title={card.title}
              handleCardClick={handleCardClick}
              isMobile={isMobile}
            />
          )
        )
      )}
    </SearchContainer>
  );
};

export default Search;
