import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer';
import { TopSection } from './topSection';
import { deviceSize } from "../../components/responsive";
import { StuffAd } from '../../components/stuffAd';
import { Marginer } from '../../components/marginer';
import { Footer } from '../../components/footer';
import { AboutUs } from './aboutUs';

const Title = styled.h1 `

font-weight:700;
color:#000;
`;

const ContentContainer = styled.div `
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  margin-left:100px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;



export function Homepage(props) {
    return ( <
        PageContainer >
        <
        TopSection >
        <
        Navbar useTransparent / >
        <
        /TopSection> <
        InnerPageContainer >
        <
        ContentContainer >
        <
        AboutUs / >


        <
        /ContentContainer> <
        Marginer direction = 'vertical'
        margin = '5em' / >
        <
        StuffAd / >
        <
        Marginer direction = 'vertical'
        margin = '4em' / >
        <
        /InnerPageContainer> <
        Footer / >
        <
        /PageContainer>
    );
}