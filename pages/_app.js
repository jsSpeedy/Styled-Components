import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
    }
`;

export default function App ({Component, pageProps}) {
    return(
            <>
                <GlobalStyle/>
                <Component {...pageProps}/>
            </>
        );
}