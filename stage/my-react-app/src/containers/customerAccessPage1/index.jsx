import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { AddBox } from "../../components/addBox";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)
`
  margin-top: 4em;
  margin-bottom:4em;
`;


export function CustomerAccessAdd(props) {

    const { action } = useParams();
    return ( <
        PageContainer >
        <
        Navbar color = '#ffffff' / >
        <







        StyledInnerContainer >







        <







        AddBox /
        > < /
        StyledInnerContainer >
        <
        Footer / >
        <
        /PageContainer>
    );
}