import React, { useEffect, useState, useRef } from 'react';
import { fetchPodcastById, fetchPodcastEpisodesById } from '../../api';
import EmptyStartIcon from '../../assets/icon_empty_star_.png';
import StartIcon from '../../assets/icon_star_.png';
import CloseIcon from '../../assets/icon_close_.png';
import PlayIcon from '../../assets/icon_play_.png';
import {
  SidebarContainer,
  IconsContainer,
  Icon,
  ImageContainer,
  Image,
  Loading,
  LoadingText,
  PodcastDetailsContainer,
  PodcastDetailsTitle,
  PodcastDetailsEpisodes,
  PodcastDetailsSubtitle,
  EpisodeListContainer,
  EpisodeCardContainer,
  EpisodeImage,
  EpisodeDetails,
  EpisodeTitle,
  EpisodeSubtitle,
  PlayButtonContainer,
  PlayButton,
  AudioElement,
} from './styles';
import ErrorMessage from '../errorMessage';
import { useSpring, animated } from 'react-spring';

interface SidebarProps {
  selectedCardId: string | null;
  handleCloseSidebar: () => void;
  favorites: any;
  setFavorites: any;
  selectedEpisode: any;
  toggleAudioPlayback: (audioUrl: string, episode: any) => void;
  currentAudioUrl: string | null
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCardId,
  handleCloseSidebar,
  favorites,
  setFavorites,
  selectedEpisode,
  toggleAudioPlayback,
  currentAudioUrl,
  isMobile
}) => {
  const [podcastDetails, setPodcastDetails] = useState<any | null>(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const AnimatedImage = animated(Image);
  const AnimatedPodcastDetailsTitle = animated(PodcastDetailsSubtitle)
  const getFavoriteRecord = (id: string) => favorites.find((favorite: any) => favorite.id === id);
  const checkIfRecordIsFavorite = (id: string) => Boolean(getFavoriteRecord(id));
  const removeRecord = (id: string, records: any[]) => records.filter((favorite: any) => favorite.id !== id);
  const createRecord = (record: any, records: any[]) => records.concat(record);
  const toggleFavorite = (isFavoriteRecord: boolean, id: string, record: any, records: any[]) =>
    isFavoriteRecord ? removeRecord(id, records) : createRecord(record, records);
  const handleFavoriteClick = ({ id, title, author, image, description }: { id: string; title: string; author: string; image: string; description: string }): void => {
    const isFavoriteRecord = checkIfRecordIsFavorite(id);
    setFavorites((prevState: any[]) =>
      toggleFavorite(
        isFavoriteRecord,
        id,
        {
          id,
          title,
          author,
          image,
          description,
          favorite: true,
        },
        prevState
      )
    );
  };

  const isPodcastInFavorites = (podcastId: string): boolean => {
    return favorites.find((favorite: any) => favorite.id === podcastId) !== undefined;
  };

  const fetchPodcastData = async (podcastId: string) => {
    setIsLoading(true);
    try {
      const [details, episodes] = await Promise.all([fetchPodcastById(podcastId), fetchPodcastEpisodesById(podcastId)]);
      setPodcastDetails(details);
      setPodcastEpisodes(episodes);
    } catch (error) {
      console.error('Error fetching podcast details or episodes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (sidebarRef.current) {
      if (sidebarRef.current.scrollTop > 0) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
    }
  };

  const imageAnimationProps = useSpring({
    transform: isScrollingUp ? 'scale(0.7)' : 'scale(1)',
    config: { tension: 200, friction: 20 },
  });

  const descriptionAnimationProps = useSpring({
    display: isScrollingUp ? 'none' : 'block',
    config: { tension: 200, friction: 20 },
  });

  function secondsToMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    if (selectedCardId) {
      fetchPodcastData(selectedCardId);
    }
  }, [selectedCardId]);


  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.addEventListener('scroll', handleScroll);
      return () => {
        sidebarRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <SidebarContainer ref={sidebarRef} scroll={isScrollingUp ? '0' : '30px'}>
      {isLoading ? (
        <Loading>
          <LoadingText>Loading podcast details...</LoadingText>
        </Loading>
      ) : (
        <>
          <IconsContainer>
            {podcastDetails && (
              <Icon
                src={isPodcastInFavorites(podcastDetails.id) ? StartIcon : EmptyStartIcon}
                alt="favorite-icon"
                onClick={() => handleFavoriteClick(podcastDetails)}
              />
            )}
            <Icon src={CloseIcon} alt="close-icon" onClick={handleCloseSidebar} />
          </IconsContainer>
          <ImageContainer>{podcastDetails?.image && <AnimatedImage src={podcastDetails.image} alt="sidebar-image" loading="lazy" style={imageAnimationProps}/>}</ImageContainer>
          {podcastEpisodes && podcastDetails ? (
            <EpisodeListContainer>
              <>
                <PodcastDetailsContainer>
                  <PodcastDetailsTitle>{podcastDetails.title}</PodcastDetailsTitle>
                  <AnimatedPodcastDetailsTitle style={descriptionAnimationProps}>{podcastDetails.description}</AnimatedPodcastDetailsTitle>
                </PodcastDetailsContainer>
                <PodcastDetailsEpisodes>{podcastDetails.episodeCount} episodios</PodcastDetailsEpisodes>
              </>

              {podcastEpisodes.map((podcastEpisode: any) => (
                <div key={podcastEpisode.id}>
                  <EpisodeCardContainer>
                    <EpisodeImage src={podcastEpisode.image} alt="Episode" />
                    <EpisodeDetails>
                      <EpisodeTitle>{podcastEpisode.title}</EpisodeTitle>
                      <EpisodeSubtitle>{secondsToMinutes(podcastEpisode.duration)} mins</EpisodeSubtitle>
                    </EpisodeDetails>
                    <PlayButtonContainer onClick={() => toggleAudioPlayback(podcastEpisode.enclosureUrl, podcastEpisode)}>
                      <PlayButton src={PlayIcon} alt="Icon" />
                    </PlayButtonContainer>
                  </EpisodeCardContainer>
                  {!isMobile && selectedEpisode === podcastEpisode && currentAudioUrl && (
                    <AudioElement controls autoPlay>
                      <source src={currentAudioUrl} type={podcastEpisode.enclosureType} />
                      Your browser does not support the audio element.
                    </AudioElement>
                  )}
                </div>
              ))}
            </EpisodeListContainer>
          ) : (
            <ErrorMessage message="No data found"/>
          )}
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
