// start in component
import TopBar from "./TopBar/TopBar";
import Navbar from "../shared/Navbar/Navbar";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Categories from "./Categories/Categories";
import AddTotalNumber from "./AddTotalNumber/AddTotalNumber";
// start in material ui
import { Box } from "@mui/material";

function HomeComp() {
  return (
    <Box>
      <TopBar />
      <Navbar />
      <Hero />
      <AboutUs />
      <Categories />
      <AddTotalNumber />
    </Box>
  );
}

export default HomeComp;
