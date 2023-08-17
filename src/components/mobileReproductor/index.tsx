import React, { useState, useEffect, useRef } from 'react';
import PauseIcon from '../../assets/icon_pause_.png';
import PlayIcon from '../../assets/icon_play_.png';
import {
  CardMobileReproductorContainer,
  CardMobileReproductorImage,
  CardMobileReproductorContent,
  TitleMobileReproductor,
  DescriptionMobileReproductor,
  MobileReproductorIconContainer,
  MobileReproductorIcon,
  StyledAudio,
  StyledAudioInput,
} from './styles';

interface mobileReproductorProps {
  isPlaying: boolean;
  selectedEpisode: any;
  toggleAudioPlayback: (audioUrl: string, episode: any) => void;
  currentAudioUrl: string | null;
}

interface AudioPlayerProps {
  selectedEpisode: any;
  currentAudioUrl: string | null;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentAudioUrl, selectedEpisode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(selectedEpisode.duration);

  useEffect(() => {
    if (audioRef.current && currentAudioUrl) {
      audioRef.current.src = currentAudioUrl;
    }
  }, [currentAudioUrl]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  function secondsToMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${Math.floor(remainingSeconds).toString().padStart(2, '0')}`;
  }

  return (
    <div>
      {currentAudioUrl && (
        <>
          <StyledAudio ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedData={handleLoadedData} autoPlay>
            <source src={currentAudioUrl} type="audio/mpeg" />
          </StyledAudio>
          <StyledAudioInput type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} />
          <div>
            {secondsToMinutes(currentTime)} / {secondsToMinutes(duration)}
          </div>
        </>
      )}
    </div>
  );
};

const MobileReproductor: React.FC<mobileReproductorProps> = ({currentAudioUrl, isPlaying, selectedEpisode, toggleAudioPlayback }) => {
  return (
    <>
      {selectedEpisode && currentAudioUrl && (
        <CardMobileReproductorContainer>
          <CardMobileReproductorImage src={selectedEpisode?.image} alt="CardMobileReproductorImage" />
          <CardMobileReproductorContent>
            <TitleMobileReproductor>{selectedEpisode?.title}</TitleMobileReproductor>
            <DescriptionMobileReproductor>{selectedEpisode?.content}</DescriptionMobileReproductor>
            <AudioPlayer selectedEpisode={selectedEpisode} currentAudioUrl={currentAudioUrl} />
          </CardMobileReproductorContent>
          <MobileReproductorIconContainer
            onClick={e => {
              e.stopPropagation();
              toggleAudioPlayback(currentAudioUrl, selectedEpisode);
            }}
          >
            <MobileReproductorIcon src={isPlaying ? PauseIcon : PlayIcon} alt="Icon" />
          </MobileReproductorIconContainer>
        </CardMobileReproductorContainer>
      )}
    </>
  );
};

export default MobileReproductor;
