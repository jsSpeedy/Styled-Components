import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: #ddddff;
    padding: 20px;
    border: 10px solid red;
`;

export default () => (
    <div>
        <HeaderDiv>
            <Link href="/" passHref>Ana Sayfa</Link>
        </HeaderDiv>
        <div>
            <Link href="/about" passHref>Hakkımızda</Link>
        </div>
    </div>

);