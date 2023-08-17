import styled from 'styled-components';

const CardContainer = styled.div<{ imagebg: string | null }>`
	width: 271px;
	height: 344px;
	background-size: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 20px;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.41) 40%), url(${({ imagebg }) => imagebg }) center/cover no-repeat;
	backdrop-filter: blur(100px);
  cursor: pointer;
`;

const StarIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ContainerContent = styled.div``;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContainerIconActive = styled.div`
  display: flex;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  width: 238px;
  font-size: 20px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Paragraph = styled.p`
  width: 238px;
  font-size: 16px;
  margin: 0;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const AuthorIcon = styled.img`
  font-size: 18px;
  margin-right: 5px;
`;

const AuthorText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const ActiveCardContainer = styled.div`
  width: 380px;
  height: 440px;
	background-size: 100%;
	color: white;
	display: flex;
  row-gap: 12px;
	flex-direction: column;
	border: 1px solid #ddd;
	padding: 30px;
  border-radius: 39px;
  background: rgba(15, 15, 45, 0.80);
  backdrop-filter: blur(7.5px);

`;

const Image = styled.img`
  width: 203px;
  height: 199px;
  border-radius: 14px;
`;

const TitleCardActive = styled.h2`
  font-size: 20px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const PlayButton = styled.img`
  width: 20px;
  height: 20px;
`;

const PlayButtonContainer = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  cursor: pointer;
`;

const CardActivePlayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EpisodeTitleCardActive = TitleCardActive


const CardMobileContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  cursor: pointer;
`;

const TitleMobile = styled.h2`
  font-size: 16px;
  margin: 0;
  width: 216.966px;
  height: 26px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardMobileImage = styled.img`
  width: 78.54px;
  height: 83px;
  border-radius: 8px;
  object-fit: cover;
  margin: 0 14px 0 0;
`;

const CardMobileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const DescriptionMobile = styled.p`
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  margin: 0;
  width: 216.966px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MobileIcon = styled.img`
  width: 10px;
  height: 20px;
`;

const MobileIconContainer = styled.span`
  display: grid;
  place-items: center;
  justify-items: end;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  cursor: pointer;
`;


export {
  CardContainer,
  ActiveCardContainer,
  TitleCardActive,
  DescriptionMobile,
  MobileIconContainer,
  MobileIcon,
  EpisodeTitleCardActive,
  Icon,
  PlayButton,
  PlayButtonContainer,
  CardActivePlayButtonContainer,
  Image,
  StarIcon,
  ContainerContent,
  ContainerImage,
  ContainerIcon,
  ContainerIconActive,
  Title,
  Paragraph,
  AuthorContainer,
  AuthorIcon,
  AuthorText,
  CardMobileContainer,
  TitleMobile, 
  CardMobileImage, 
  CardMobileContent
};
