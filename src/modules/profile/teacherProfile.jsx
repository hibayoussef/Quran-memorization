import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ViewAll from "../../components/shared/viewAll/ViewAll";
import ContentWrapper from "../../components/styled/ContentWrapper";
import PageWrapper from "../../components/styled/PageWrapper";
import Course from "../courses/components/card/Course";
import Courses from "../courses/components/Courses";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import { firstAppBarConfig, secondAppBarConfig } from "../shared/components/AppBar/CustomAppBar.config";
import PersonalDetailsTeacher from "./components/PersonalDetailsTeacher/personalDetailsTeacher";
import ProfileCard from "./components/ProfileCard/profileCard";

const TeacherProfile = () => {
  // const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  //   console.log(`Current Page: ${value}`);
  //   // You can also fetch new data based on `value`
  // };
  const handleEdit = () => {
    console.log("Edit icon clicked!");
  };

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
          <ProfileCard
            avatarSrc="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            name="أحمد أحمد"
            email="ahmad@ahmad.com"
            onEdit={handleEdit}
            modalContent={
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h6">Edit Profile</Typography>
                <TextField
                  label="Name"
                  defaultValue="أحمد أحمد"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Email"
                  defaultValue="ahmad@ahmad.com"
                  fullWidth
                  variant="outlined"
                />
                <Button variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            }
          />
          <PersonalDetailsTeacher />
          <ViewAll title="الدّورات المشترك بها:" showAllText="عرض الكل" />
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
    </>
  );
};

export default TeacherProfile;
