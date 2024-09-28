import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import PaginationComponent from "../../components/shared/pagination/pagination";
import ViewAll from "../../components/shared/viewAll/ViewAll";
import Course from "../courses/components/card/Course";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../shared/components/AppBar/CustomAppBar.config";
import PageWrapper from "../../components/styled/PageWrapper";
import ContentWrapper from "../../components/styled/ContentWrapper";

const StudentCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log(`Current Page: ${value}`);
  };

  return (
    <>
    
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />

      <PageWrapper>
        <ViewAll title="الدّورات المسجّل عليها:" showAllText="عرض الكل" />
        {/* Wrap Grid in a Box to ensure even spacing */}
        <ContentWrapper>
          {/* Responsive Grid Layout */}
          <Grid container spacing={5}>
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
        <PaginationComponent
          count={20} // Total number of pages
          page={currentPage} // Controlled page state
          onChange={handlePageChange} // Handle page change
        />

        {/* Part 2 */}

        <ViewAll title="دورات القرأن:" showAllText="عرض الكل" />
        {/* Wrap Grid in a Box to ensure even spacing */}
        <ContentWrapper>
          {/* Responsive Grid Layout */}
          <Grid container spacing={5}>
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
        <PaginationComponent
          count={20} // Total number of pages
          page={currentPage} // Controlled page state
          onChange={handlePageChange} // Handle page change
        />

        {/* Part 3 */}
        <ViewAll title="دورات الحديث:" showAllText="عرض الكل" />
        {/* Wrap Grid in a Box to ensure even spacing */}
        <ContentWrapper>
          {/* Responsive Grid Layout */}
          <Grid container spacing={5}>
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
        <PaginationComponent
          count={20} // Total number of pages
          page={currentPage} // Controlled page state
          onChange={handlePageChange} // Handle page change
        />
      </PageWrapper>
    </>
  );
};

export default StudentCourses;
