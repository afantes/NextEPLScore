import { FC } from "react";
import { AppProps } from "next/app";
import { Provider } from "jotai";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { DefaultSeo } from "next-seo";
import { Navigation } from "@/components/Navigation";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider>
      <GlobalStyle />
      <DefaultSeo
        title="EPLScore"
        description="Check out the schedule and scores of the Premier League."
        openGraph={{
          title: "EPLScore",
          description:
            "Check out the schedule and scores of the Premier League.",
        }}
      />
      <Navigation />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
