import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Card from '../../components/card';
import ActiveCard from '../../components/card/active';

const FavoritesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38px 40px;
  padding: 30px 154px;

  @media (max-width: 500px) {
    padding: 30px;
  }
`;

interface FavoritesPageProps {
  favorites: any;
  setFavorites: any;
  handleCardClick: (cardId: string) => void;
  handleCloseSidebar: () => void;
  clearSelectedEpisodeInFavorites: () => void;
  toggleAudioPlayback: (audioUrl: string, episode: any) => void;
  isMobile: boolean;
}

const Favorites: React.FC<FavoritesPageProps> = ({ favorites, setFavorites, handleCardClick, handleCloseSidebar, clearSelectedEpisodeInFavorites, toggleAudioPlayback, isMobile }) => {
  useEffect(() => {
    clearSelectedEpisodeInFavorites();
  }, []);
  return (
    <FavoritesContainer>
      {favorites.length === 0 ? (
        <p>No favorite podcasts yet.</p>
      ) : (
        favorites.map((card: any) =>
          card.selectedEpisode && !isMobile ? (
            <ActiveCard key={card.id} card={card} handleCloseSidebar={handleCloseSidebar} toggleAudioPlayback={toggleAudioPlayback}/>
          ) : (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              content={card.description}
              author={card.author}
              image={card.image}
              favorites={favorites}
              setFavorites={setFavorites}
              handleCardClick={handleCardClick}
              isMobile={isMobile}
            />
          )
        )
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
