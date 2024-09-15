// start in component
import TopBar from "./TopBar/TopBar";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
// start in material ui
import { Box } from "@mui/material";

function HomeComp() {
  return (
    <Box>
      <TopBar />
      <Navbar />
      {/* hero section */}
      <Hero />
    </Box>
  );
}

export default HomeComp;
