import { styled } from "styled-components";

const CardMobileReproductorContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  cursor: pointer;
  z-index: 3;
  background: #0F0F2D;
  color: white;
  padding: 24px;
  @media (min-width: 500px) {
    display: none;
  }
`;

const TitleMobileReproductor = styled.h2`
  font-size: 16px;
  margin: 0;
  width: 216.966px;
  height: 26px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardMobileReproductorImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  object-fit: cover;
  margin: 0 14px 0 0;
`;

const CardMobileReproductorContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const DescriptionMobileReproductor = styled.p`
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

const MobileReproductorIcon = styled.img`
  width: 12.857px;
  height: 15px;
`;

const MobileReproductorIconContainer = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
  background-color: white;
`;

const StyledAudio = styled.audio`
  width: 100%;
`;


const StyledAudioInput = styled.input`
  width: 92%;
  height: 3px;
  background: #FFF;
  outline: none;
  appearance: none;
  margin: 0;
  padding: 0;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: #FFF;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #FFF;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export {
  CardMobileReproductorContainer,
  CardMobileReproductorImage,
  CardMobileReproductorContent,
  TitleMobileReproductor,
  DescriptionMobileReproductor,
  MobileReproductorIconContainer,
  MobileReproductorIcon,
  StyledAudio,
  StyledAudioInput
} 
