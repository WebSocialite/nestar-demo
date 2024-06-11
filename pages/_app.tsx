import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "@/scss/MaterialTheme";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";

import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/pc/property/property.scss";
import "../scss/mobile/main.scss";
import client from "@/apollo/client";


export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));
  // Socket.io, Redux, Mui, Apollo client  ...
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </ApolloProvider>
  );
}
