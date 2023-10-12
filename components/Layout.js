import Header from "./Header";
import styled from "styled-components";

const StyledHeader = styled(Header)`
    border: 10px solid #f00;
`;

export default ({ title }) => (
    <div>
        <h1>{title}</h1>
        <StyledHeader />
    </div>
);