import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: #ddddff;
    padding: 20px;

    & > span {
        font-weight: bold;
        cursor: pointer;
        &:hover {
            color: blue;
            margin-left: 10px;
        }
    }
`;

const StyledLink = styled(Link)`
    color: blue;
    padding: 10px;
    margin-right: 10px;
    text-decoration: ${({cizgi}) => ((cizgi) ? "underline":"none")};
    border: ${({borderSize}) => `${borderSize}px`} solid blue;
    background-color: lightpink;
    &:hover {
        background-color: blue;
        color: lightpink;
    }
`;




export default () => (
    <div>
        <HeaderDiv>
            <StyledLink href="/" passHref borderSize={7}>Ana Sayfa</StyledLink>
            <StyledLink href="/about" passHref cizgi>Hakkımızda</StyledLink>
            <span>Ek Açıklamalar</span>
            <span>Hizmetler</span>
            
        </HeaderDiv>
    </div>

);

