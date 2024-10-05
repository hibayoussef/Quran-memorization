import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MediaCard from "../../../../../components/shared/mediaCard/MediaCard";
import MainLayout from "../../../../../layout/MainLayout";
import Course from "../../../components/card/Course";
import ProfileCard from "../../../components/ProfileCard/profileCard";
import PersonalDetailsTeacher from "../../../components/PersonalDetailsTeacher/personalDetailsTeacher";
import ViewAll from "../../../../../components/shared/viewAll/ViewAll";

const ProfileIndex = () => {
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
      </MainLayout>
    </>
  );
};

export default ProfileIndex;
