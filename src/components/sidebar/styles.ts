import styled, { keyframes } from "styled-components";

export const slideInFromLeftAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInFromBottomAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SidebarContainer = styled.div<{ scroll: string }>`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => (props.scroll)};
  position: fixed;
  top: 0;
  left: 0;
  width: 481px;
  height: 100vh;
  padding: 30px;
  border-radius: 0 30px 30px 0;
  background: #0f0f2d;
  color: white;
  z-index: 2;
  animation: ${slideInFromLeftAnimation} 0.3s ease-in-out;
  overflow-y: auto;
  @media (max-width: 500px) {
    top: 90px;
    width: 100%;
    border-radius: 30px 30px 0 0;
    animation: ${slideInFromBottomAnimation} 0.3s ease-in-out;
    background: rgba(15, 15, 45, 0.80);
    backdrop-filter: blur(7.5px);
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 0 120px;
`;

export const Image = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 170px;
    height: 170px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoadingText = styled.p`
  color: white;
  font-size: 16px;
`;

export const EpisodeContainer = styled.div`
  margin-top: 20px;
  width: 393px;
  height: 58px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Raleway;
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const Description = styled.p`
  color: #fff;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EpisodeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  color: #fff;
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const EpisodeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const EpisodeCount = styled.p`
  color: #fff;
  font-family: Ubuntu;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EpisodeCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 14px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.30);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #252547;
  }
`;

export const EpisodeImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  margin: 0 14px 0 0;
`;

export const EpisodeDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PodcastDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PodcastDetailsTitle = styled.h3`
  color: #FFF;
  font-family: Raleway;
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis; 
  text-align: center;
  margin-bottom: 16px;
  width: 394px;
`;

export const PodcastDetailsEpisodes = styled.h3`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PodcastDetailsSubtitle = styled.p`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  margin: 0;
  text-align: center;
`;

export const EpisodeTitle = styled(PodcastDetailsTitle)`
  text-align: start;
  font-size: 16px;
  margin: 0;
  width: 200px;
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis; 
`;

export const EpisodeSubtitle = styled(EpisodeTitle)`
  text-align: start;
  font-size: 16px;
`;

export const EpisodeIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const PlayButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const PlayButtonContainer = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  cursor: pointer;
`;

export const AudioElement = styled.audio`
  display: block;
  margin-top: 20px;
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const EpisodeList = styled.div`
`;

export const EpisodeCard = styled.div`
`;

export const AudioPlayer = styled.audio`
`;
