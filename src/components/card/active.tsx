import CloseIcon from '../../assets/icon_close_.png';
import PlayIcon from '../../assets/icon_play_.png';
import {
  ActiveCardContainer,
  ContainerIconActive,
  EpisodeTitleCardActive,
  ContainerImage,
  Image,
  TitleCardActive,
  Icon,
  PlayButtonContainer,
  PlayButton,
  CardActivePlayButtonContainer,
} from './styles';

interface ActiveCardProps {
  card: any;
  handleCloseSidebar: () => void;
  toggleAudioPlayback: (audioUrl: string, episode: any) => void;
}

const ActiveCard: React.FC<ActiveCardProps> = ({ card, handleCloseSidebar, toggleAudioPlayback }) => {
  return (
    <ActiveCardContainer>
      <ContainerIconActive>
        <Icon src={CloseIcon} alt="close-icon" onClick={handleCloseSidebar} />
      </ContainerIconActive>
      <ContainerImage>
        <Image src={card.selectedEpisode.image} alt={card.selectedEpisode.title} />
      </ContainerImage>
      <div>
        <TitleCardActive>{card.title}</TitleCardActive>
        <EpisodeTitleCardActive>{card.selectedEpisode.title}</EpisodeTitleCardActive>
      </div>
      <CardActivePlayButtonContainer>
        <PlayButtonContainer onClick={() => toggleAudioPlayback(card.selectedEpisode.enclosureUrl, card.selectedEpisode)}>
          <PlayButton src={PlayIcon} alt="Icon" />
        </PlayButtonContainer>
      </CardActivePlayButtonContainer>
    </ActiveCardContainer>
  );
};

export default ActiveCard;
