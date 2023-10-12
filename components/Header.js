import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: #ddddff;
    padding: 20px;
`;

export default () => (
    <div>
        <HeaderDiv>
            <Link href="/" passHref>Ana Sayfa</Link>
            <Link href="/about" passHref>Hakkımızda</Link>
        </HeaderDiv>
    </div>

);