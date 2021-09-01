import react from 'react';
import styled from 'styled-components';

import LogoImg from '../../images/logo.png';
import { Link } from 'react-router-dom';

const BrandLogoContainer = styled.div `
display:flex;
align-items:center;
`;

const LogoImage = styled.div `
width:${({size}) => size ? size + 'px' : '4em'};
height:${({size}) => size ? size + 'px' : '4em'};
margin:0px;
img{
    width :100%;
    height : 100%;
}

`;

const LogoTitle = styled.div `
margin:-10px;
font-size:${({size}) => size ? size + 'px' : '20px'};
color :  ${({ color }) => (color ? color : "#fff")};
font-weight:800;
margin-left: 6px;
`;

const StyledLink = styled(Link)
`
  text-decoration: none;
`;

export function BrandLogo(props) {
    const { logoSize, textSize, textColor, color, hideLogo } = props;
    return ( <
        BrandLogoContainer > {
            hideLogo && ( <
                Link to = "/" >
                <
                LogoImage size = { logoSize } >


                <
                img src = { LogoImg }
                alt = "PriceRack logo" / >
                <
                /LogoImage> <
                /Link>
            )
        } <
        StyledLink to = "/" >
        <
        LogoTitle size = { textSize }
        color = { color } >
        PriceRack <
        /LogoTitle> <
        /StyledLink>

        <
        /BrandLogoContainer>
    );

}