import withLayoutMain from "@/libs/components/layout/LayoutHome";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import { Stack } from "@mui/material";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
        <Stack className={"home-page"}>
         <TrendProperties />
         <PopularProperties />
         <Advertisement />
         <TopProperties />
         <TopAgents />
        </Stack>
  );
};

export default withLayoutMain(Home);
