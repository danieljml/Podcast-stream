import { useEffect } from 'react'
import styled from "styled-components";
import Card from '../../components/card';
import Loading from '../../components/loading';
import ActiveCard from '../../components/card/active';
import ErrorMessage from '../../components/errorMessage';

const TrendingsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38px 40px;
  padding: 30px 154px;

  @media (max-width: 500px) {
    padding: 30px;
  }
`;

interface TrendingsPageProps {
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
}

const Trendings: React.FC<TrendingsPageProps> = ({
  podcasts,
  isLoading,
  favorites,
  setFavorites,
  handleCardClick,
  handleCloseSidebar,
  toggleAudioPlayback,
  fetchTrendingData,
  isMobile,
}) => {
  
  useEffect(() => {
    fetchTrendingData();
  }, []);

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (podcasts.length) {
    content = podcasts.map(card =>
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
    );
  } else {
    content = <ErrorMessage message="No data found"/>;
  }

  return <TrendingsContainer>{content}</TrendingsContainer>;
};

export default Trendings;
