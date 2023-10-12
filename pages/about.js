//import Link from "next/link";
//import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";

const AboutContent = styled.div`
    margin: 20px;
    padding: 20px;
    background-color: lightpink;
`;

export default () => (
    <div>
        <Layout title="Hakkımızda"/>
        <AboutContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, officiis facere! Soluta, molestiae quasi mollitia quisquam aliquid eos fugit ut temporibus, nemo illo est modi repellat aliquam tenetur, distinctio illum voluptas quia id explicabo nam velit dolor obcaecati blanditiis perferendis? Repellendus fuga beatae, odio doloribus cumque culpa officia error optio.
        </AboutContent>
    </div>

);