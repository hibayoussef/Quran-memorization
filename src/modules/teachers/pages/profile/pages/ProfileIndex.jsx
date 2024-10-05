import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MainLayout from "../../../../../layout/MainLayout";
import Course from "../../../../students/components/card/Course";
import PersonalDetailsTeacher from '../../../../students/components/PersonalDetailsTeacher/personalDetailsTeacher';
import ProfileCard from '../../../../students/components/ProfileCard/profileCard';
import ViewAll from "../../../../../components/shared/viewAll/ViewAll";

const ProfileIndex = () => {
  const handleEdit = () => {
    console.log("Edit icon clicked!");
  };

  return (
    <>
      <MainLayout title="الملف الشّخصي">
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
      </MainLayout>
    </>
  );
};

export default ProfileIndex;
