import React, { useCallback } from 'react';
import EmptyStartIcon from "../../assets/icon_empty_star_.png";
import StartIcon from "../../assets/icon_star_.png";
import PersonIcon from "../../assets/icon_person_.png";
import ChevronRightIcon from "../../assets/icon_chevron right_.png";

import {
  CardContainer,
  StarIcon,
  ContainerContent,
  ContainerIcon,
  Title,
  Paragraph,
  AuthorContainer,
  AuthorIcon,
  AuthorText,
  CardMobileContainer,
  CardMobileImage,
  TitleMobile, 
  DescriptionMobile,
  CardMobileContent,
  MobileIconContainer,
  MobileIcon
} from "./styles";

interface CardProps {
  id: string;
  title: string;
  content: string;
  author?: string;
  image: string;
	favorites?: any;
	setFavorites?: any;
  handleCardClick: (cardId: string) => void; 
  isMobile?: boolean;  
}


const CardMobile: React.FC<CardProps> = ({ id, image, title, content, handleCardClick }) => {
  return (
    <CardMobileContainer
      onClick={e => {
        e.stopPropagation();
        handleCardClick(id);
      }}
    >
      <CardMobileImage src={image} alt="CardMobileImage" />
      <CardMobileContent>
        <TitleMobile>{title}</TitleMobile>
        <DescriptionMobile>{content}</DescriptionMobile>
      </CardMobileContent>
      <MobileIconContainer>
        <MobileIcon src={ChevronRightIcon} alt="Icon" />
      </MobileIconContainer>
    </CardMobileContainer>
  );
};

const Card: React.FC<CardProps> = ({ id, title, content, author, image, favorites, setFavorites, handleCardClick, isMobile }) => {
  const getFavoriteRecord = (id: string) => favorites.find((favorite: any) => favorite.id === id);
  const checkIfRecordIsFavorite = (id: string) => Boolean(getFavoriteRecord(id));
  const removeRecord = (id: string, records: any[]) => records.filter((favorite: any) => favorite.id !== id);
  const createRecord = (record: any, records: any[]) => records.concat(record);
  const toggleFavorite = (isFavoriteRecord: boolean, id: string, record: any, records: any[]) =>
    isFavoriteRecord ? removeRecord(id, records) : createRecord(record, records);

  const handleFavoriteClick = useCallback(() => {
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
          description: content,
          favorite: true,
        },
        prevState
      )
    );
  }, [id, title, author, image, content, setFavorites]);

  const isPodcastInFavorites = (podcastId: string): boolean => {
    return favorites.find((favorite: any) => favorite.id === podcastId) !== undefined;
  };

  return (
    <>
      {isMobile ? (
        <CardMobile id={id} image={image} title={title} content={content} handleCardClick={handleCardClick}/>
      ) : (
        <CardContainer
          imagebg={image}
          onClick={e => {
            e.stopPropagation();
            handleCardClick(id);
          }}
        >
          <ContainerIcon>
            <StarIcon
              src={isPodcastInFavorites(id) ? StartIcon : EmptyStartIcon}
              alt="favorite-icon"
              onClick={e => {
                e.stopPropagation();
                handleFavoriteClick();
              }}
            />
          </ContainerIcon>
          <ContainerContent>
            <Title>{title}</Title>
            <Paragraph>{content}</Paragraph>
            <AuthorContainer>
              <AuthorIcon src={PersonIcon} />
              <AuthorText>{author}</AuthorText>
            </AuthorContainer>
          </ContainerContent>
        </CardContainer>
      )}
    </>
  );
};

export default Card;

