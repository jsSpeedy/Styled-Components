import Header from "./Header";
import styled from "styled-components";

const BodyDiv = styled.div`
   
`;

export default ({ title }) => (
    <BodyDiv>
        <h1>{title}</h1>
        <Header/>
    </BodyDiv>
);