import Course from "../courses/components/Card/course";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../shared/components/AppBar/CustomAppBar.config";
import { Grid, Container, Box } from "@mui/material";
import ViewAll from "../../components/shared/ViewAll/ViewAll";
import { useState } from "react";
import Courses from "../courses/components/courses";
import PersonalDetailsTeacher from "./components/PersonalDetailsTeacher/personalDetailsTeacher";
import MediaCard from "../../components/shared/mediaCard/MediaCard";
import ProfileCard from "./components/ProfileCard/profileCard";

const TeacherProfile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy data for certificates
  const certificateData = [
    {
      id: 1,
      imageUrl:
        "https://khamsat.hsoubcdn.com/images/services/3709485/6f948141e9060d1d9291f8afdcd81844.jpg", // Replace with actual image URLs
      title: "Certificate 1",
    },
    {
      id: 2,
      imageUrl:
        "https://khamsat.hsoubcdn.com/images/services/3709485/6f948141e9060d1d9291f8afdcd81844.jpg",
      title: "Certificate 2",
    },
    {
      id: 3,
      imageUrl:
        "https://khamsat.hsoubcdn.com/images/services/3709485/6f948141e9060d1d9291f8afdcd81844.jpg",
      title: "Certificate 3",
    },
  ];
  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log(`Current Page: ${value}`);
    // You can also fetch new data based on `value`
  };

  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="الملف الشّخصي" />

      <Box>
        <Container
          maxWidth={false} // This removes the maxWidth limitation and makes it full width
          style={{ marginTop: "3rem", marginBottom: "3rem", padding: "0 70px" }} // Adjust padding equally on both sides
        >
          <ProfileCard />
          <PersonalDetailsTeacher />

          <ViewAll title="الدّورات المشترك بها:" showAllText="عرض الكل" />
          {/* Wrap Grid in a Box to ensure even spacing */}
          <Box sx={{ width: "100%", padding: "0 16px" }}>
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
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TeacherProfile;
