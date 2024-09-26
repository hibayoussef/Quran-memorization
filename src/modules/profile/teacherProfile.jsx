import { Grid } from "@mui/material";
import ViewAll from "../../components/shared/viewAll/ViewAll";
import ContentWrapper from "../../components/styled/ContentWrapper";
import PageWrapper from "../../components/styled/PageWrapper";
import Course from "../courses/components/card/Course";
import Courses from "../courses/components/Courses";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import { secondAppBarConfig } from "../shared/components/AppBar/CustomAppBar.config";
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

  return (
    <>
      {/* Use first app bar configuration */}
      {/* <CustomAppBar {...firstAppBarConfig} /> */}
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="الملف الشّخصي" />

      <PageWrapper>
        <ContentWrapper>
          <ProfileCard />
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
