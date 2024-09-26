import { Box, Container, Grid } from "@mui/material";
import MediaCard from "../../components/shared/mediaCard/MediaCard";
import ViewAll from "../../components/shared/viewAll/ViewAll";
import Course from "../courses/components/card/Course";
import Courses from "../courses/components/Courses";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../shared/components/AppBar/CustomAppBar.config";
import PersonalDetails from "./components/PersonalDetails/personalDetails";
import ProfileCard from "./components/ProfileCard/profileCard";
import ContentWrapper from "../../components/styled/ContentWrapper";
import PageWrapper from "../../components/styled/PageWrapper";

const StudentProfile = () => {
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

  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="الملف الشّخصي" />

      <PageWrapper>
        <ContentWrapper>
          <ProfileCard />
          <PersonalDetails />

          <ViewAll title="الدّورات المسجّل عليها:" showAllText="عرض الكل" />
          {/* Wrap Grid in a Box to ensure even spacing */}

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
      </PageWrapper>

      <PageWrapper>
        <ContentWrapper>
          <ViewAll title="الشّهادات الحاصل عليها:" showAllText="عرض الكل" />
          {/* Display Certificates */}
         
            <Grid container spacing={5}>
              {certificateData.map((certificate) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={certificate.id}>
                  {/* Pass props to MediaCard to ensure it remains dynamic and reusable */}
                  <MediaCard
                    imageUrl={certificate.imageUrl}
                    title={certificate.title}
                    maxWidth={529} // Set maxWidth to match the style
                    imageHeight="auto" // Let the image height adapt dynamically
                  />
                </Grid>
              ))}
            </Grid>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default StudentProfile;
