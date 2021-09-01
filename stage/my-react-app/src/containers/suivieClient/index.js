import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { SuivieBoxForm } from "../../components/suivie/suivieBoxForm";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)
`
  margin-top: 4em;
  margin-bottom:4em;
`;


export function SuivieAccessPage(props) {

    const { action } = useParams();
    return ( <
        PageContainer >
        <
        Navbar color = '#ffffff' / > <







        StyledInnerContainer >







        <







        SuivieBoxForm initialActive = { action }
        /> < /
        StyledInnerContainer > <
        Footer / >
        <
        /PageContainer>
    );
}