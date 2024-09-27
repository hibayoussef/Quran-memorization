import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ContentWrapper from "../../../components/styled/ContentWrapper";
import PageWrapper from "../../../components/styled/PageWrapper";
import CustomAppBar from "../../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../../shared/components/AppBar/CustomAppBar.config";
import Courses from "../components/Courses";
import Course from "../components/card/Course";
import FilterTabs from "../components/tabs/FilterTabs";

const RegisteredCourses = () => {

  const tabsData = [
    {
      label: "جميع الدورات",
      content: <Typography>Content for جميع الدورات</Typography>,
    },
    {
      label: "دورات القرآن",
      content: <Typography>Content for دورات القرآن</Typography>,
    },
    {
      label: "دورات الحديث",
      content: <Typography>Content for دورات الحديث</Typography>,
    },
  ];

  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />

      <Courses title="الدّورات المسجّل عليها" />

      <PageWrapper>
        <ContentWrapper>
          <FilterTabs tabsData={tabsData} />

          {/* Responsive Grid Layout */}
          <Grid container spacing={{ md: 5, xs: 2 }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid
                item
                xs={12} // Full width on extra small screens (mobile)
                sm={6} // 2 items per row on small screens (tablets)
                md={4} // 3 items per row on medium screens (desktop)
                lg={4} // 4 items per row on large screens
                key={index}
              >
                <Course />
              </Grid>
            ))}
          </Grid>
        </ContentWrapper>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "2rem",
          }}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </PageWrapper>
    </>
  );
};

export default RegisteredCourses;
