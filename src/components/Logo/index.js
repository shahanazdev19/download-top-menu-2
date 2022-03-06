import React from 'react';
import styled from 'styled-components';
import image from '../../images/TheSTEPS.png';
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.div`
    width: 70px;
    height: 70px;
    img{
      width: 100%;
      heigth: 100%;
    }
`;

export const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color:#222;
    font-weight: 500;  

`;

const index = () => {
  return <LogoWrapper>
    <LogoImg><img src={image} alt='logo'/></LogoImg>
    <LogoText>NFT LAB.</LogoText>
  </LogoWrapper>;
};

export default index;
