import withLayoutMain from "@/libs/components/layout/LayoutHome";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";


const Home: NextPage = () => {
  const device = useDeviceDetect();
  // Device: Mobile or PC

  if(device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>;
  } else {

  
  return (
        <Stack className={"home-page"}>
         <TrendProperties />
         <PopularProperties />
         <Advertisement />
         <TopProperties />
         <TopAgents />
        </Stack>
  );
}
};
export default withLayoutMain(Home);
