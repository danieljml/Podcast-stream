import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { fetchTrendingPodcasts } from "./api"
import { usePersistentState } from './hooks';
import theme from './theme';
import Header from './components/header';
import Filter from './components/filter';
import Trendings from './pages/trendings';
import Favorites from './pages/favorites';
import Search from './pages/search';
import Sidebar from './components/sidebar';
import MobileReproductor from './components/mobileReproductor';

function App() {
  const [podcasts, setPodcasts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = usePersistentState('favorites', []);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 500);

  const toggleAudioPlayback = (audioUrl: string, episode: string) => {
    if (selectedEpisode === episode) {
      setIsPlaying(!isPlaying);
    } else {
      setSelectedEpisode(episode);
      setCurrentAudioUrl(audioUrl);
      setIsPlaying(true);
    }
  };

  const handleCardClick = (cardId: string): void => {
    handleCloseSidebar();
    setPodcasts(prevPodcasts =>
      prevPodcasts.map(prevPodcast =>
        prevPodcast.id === selectedCardId ? { ...prevPodcast, selectedEpisode: null } : prevPodcast
      ).filter(Boolean)
    );
    setIsSidebarVisible(true);
    setSelectedCardId(cardId);
  };

  const handleCloseSidebar = (): void => {
    const isSeletedPodcastFavorite = favorites.some((favorite: any) => favorite.id === selectedCardId);
    setIsSidebarVisible(false);
    setCurrentAudioUrl(null);
    setPodcasts(prevPodcasts =>
      prevPodcasts.map(prevPodcast =>
        prevPodcast.id === selectedCardId ? { ...prevPodcast, selectedEpisode: null } : prevPodcast
      ).filter(Boolean)
    );
    if (isSeletedPodcastFavorite) {
      setFavorites((prevFavorite: any) =>
        prevFavorite.map((prevFavorite: any) =>
          prevFavorite.id === selectedCardId ? { ...prevFavorite, selectedEpisode: null } : prevFavorite
        ).filter(Boolean)
      );
    }
  };

  const fetchTrendingData = async () => {
    setIsLoading(true);
    setPodcasts(await fetchTrendingPodcasts());
    setIsLoading(false);
  };

  const clearSelectedEpisodeInFavorites = () => {
    setFavorites((prevFavorite: any) =>
      prevFavorite.map((prevFavorite: any) => ({ ...prevFavorite, selectedEpisode: null })).filter(Boolean)
    );
  };

  useEffect(() => {
    const isSeletedPodcastFavorite = favorites.some((favorite: any) => favorite.id === selectedCardId);
    if (selectedEpisode && selectedCardId) {
      setPodcasts(prevPodcasts =>
        prevPodcasts.map(prevPodcast =>
          prevPodcast.id === selectedCardId ? { ...prevPodcast, selectedEpisode } : prevPodcast
        )
      );
    }
    if (isSeletedPodcastFavorite) {
      setFavorites((prevFavorite: any) =>
        prevFavorite.map((prevFavorite: any) =>
          prevFavorite.id === selectedCardId ? { ...prevFavorite, selectedEpisode } : prevFavorite
        )
      );
    }
  }, [selectedEpisode]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header setPodcasts={setPodcasts} setIsLoading={setIsLoading} />
        <Filter favoriteCount={favorites.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Trendings
                handleCardClick={handleCardClick}
                favorites={favorites}
                setFavorites={setFavorites}
                podcasts={podcasts}
                isLoading={isLoading}
                fetchTrendingData={fetchTrendingData}
                handleCloseSidebar={handleCloseSidebar}
                toggleAudioPlayback={toggleAudioPlayback}
                currentAudioUrl={currentAudioUrl}
                isMobile={isMobile}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                handleCardClick={handleCardClick}
                favorites={favorites}
                setFavorites={setFavorites}
                handleCloseSidebar={handleCloseSidebar}
                clearSelectedEpisodeInFavorites={clearSelectedEpisodeInFavorites}
                toggleAudioPlayback={toggleAudioPlayback}
                isMobile={isMobile}
              />
            }
          />
          <Route
            path="/search/:podcast"
            element={
              <Search
                handleCardClick={handleCardClick}
                favorites={favorites}
                setFavorites={setFavorites}
                podcasts={podcasts}
                setPodcasts={setPodcasts}
                isLoading={isLoading}
                fetchTrendingData={fetchTrendingData}
                handleCloseSidebar={handleCloseSidebar}
                toggleAudioPlayback={toggleAudioPlayback}
                currentAudioUrl={currentAudioUrl}
                isMobile={isMobile}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
        {isSidebarVisible && (
          <Sidebar
            selectedCardId={selectedCardId}
            handleCloseSidebar={handleCloseSidebar}
            favorites={favorites}
            setFavorites={setFavorites}
            selectedEpisode={selectedEpisode}
            toggleAudioPlayback={toggleAudioPlayback}
            currentAudioUrl={currentAudioUrl}
            isMobile={isMobile}
          />
        )}
        {isPlaying && isMobile && (
          <MobileReproductor currentAudioUrl={currentAudioUrl} isPlaying={isPlaying} selectedEpisode={selectedEpisode} toggleAudioPlayback={toggleAudioPlayback} />
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
