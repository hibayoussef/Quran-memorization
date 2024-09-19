import Courses from "../components/courses";
import Course from "../components/Card/course";
import { Box } from "@mui/material";
import FilterTabs from "../components/Tabs/filterTabs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CustomAppBar from "../../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../../shared/components/AppBar/CustomAppBar.config";

const RegisteredCourses = () => {
    return (
      <>
        {/* Use first app bar configuration */}
        <CustomAppBar {...firstAppBarConfig} />
        {/* Main content */}

        {/* Use second app bar configuration */}
        <CustomAppBar {...secondAppBarConfig} />
        <Courses title="الدّورات المسجّل عليها" />
        <Box style={{ margin: "3rem" }}>
          <Box style={{ marginBottom: "3rem" }}>
            <FilterTabs />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Course />
            <Course />
            <Course />
          </Box>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "2rem",
              direction: "ltr",
            }}
          >
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </Box>
      </>
    );
};

export default RegisteredCourses;
