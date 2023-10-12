//import Head from "next/head";
//import Header from "../components/Header";
//import styles from "../styles/Home.module.css";

import ThemeProvider from "styled-components";
import { AnimetedLogo } from "../components/Buttons/button.styles";
import  Button, {FancyButton,SubmitButton} from "../components/Buttons/Button";
import Layout from "../components/Layout";
import logo from "../image/logo.png";
//const logo = require('../image/logo.png');
import styled from "styled-components";

const HomeContent = styled.div`
  background-color: limegreen;
  margin: 20px;
  padding: 20px;
`;

const theme = {
  dark: {
    primary: "#000",
    text: "#fff"
  },
  light: {
    primary: "#000",
    text: "#fff"
  }
}

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

export default function Home() {
  console.log(logo);
  return (
    <div>
      <Layout title="Anasayfa" />
        <HomeContent>
          Anasayfa içerik
          <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
          <Button variant='outline' type="submit">Custom Button with Normal Button styles</Button>
          <FancyButton>Custom Button with Normal Button styles</FancyButton>
          <SubmitButton>Custom Button with Normal Button styles</SubmitButton>
          </HomeContent>
          <AnimetedLogo src={logo?.src} alt="logo"/>
    </div>
  );
}
