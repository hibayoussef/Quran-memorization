import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import TypographyComponent from "../../../../components/shared/typography/Typography";
import { StyledGridItem } from "../PersonalDetails/personal.styles";
import ProgressBarComponent from "../../../../components/shared/progressBar/ProgressBar";
import { formatDate } from "../../../../utils/formatDate";
import FormButtons from "../../../../components/Auth/FormButtons/FormButtons";
import ButtonComponent from "../../../../components/shared/button/buttonComponent/ButtonComponent";
import { Navigate } from "react-router-dom";

const DynamicCourseCard = ({ course, type, buttons }) => {
  const isQuranCourse = type === 'quran'; // لتحديد نوع الدورة

  return (
    <Card sx={{ maxWidth: 529 }}>
      {/* Image Box with reduced margin */}
      <Box sx={{ margin: "20px 13px 0px 13px" }}>
        <CardMedia
          component="img"
          image="https://t3.ftcdn.net/jpg/05/68/99/80/360_F_568998040_m42feFA9RajqmuR5DTlWwox44fxE3MOi.jpg"
          alt="course image"
          sx={{
            borderRadius: "12px",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Box>

      {/* Card Content */}

      <CardContent sx={{ padding: "2px 16px 16px 16px" }}>
        {
          type !== "registered" && (
            <Grid container spacing={2}>
              <StyledGridItem item xs={12} sm={12} md={6} lg={8}>
                <TypographyComponent
                  value={course?.duration}
                  valueStyles={{
                    color: "text.secondary",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  hideColon={false}
                  isTime={true}
                />
              </StyledGridItem>

              <StyledGridItem item xs={12} sm={12} md={6} lg={4}>
                <TypographyComponent
                  value={formatDate(course?.startDate)}
                  valueStyles={{
                    color: "text.secondary",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  hideColon={false}
                  isDate={true}
                />
              </StyledGridItem>
            </Grid>

          )
        }

        {/* Title */}
        <Typography
          gutterBottom
          color="text.secondary"
          sx={{ marginTop: "0px", fontSize: "22px" }}
        >
          {course?.title}
        </Typography>


        <Grid container spacing={2}>
          {
            type !== "registered" ? (
              <>
                <StyledGridItem item xs={12} sm={12} md={6} lg={12}>
                  <TypographyComponent
                    value={course?.description}
                    valueStyles={{
                      color: "card.secondary",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                    hideColon={false}
                  />
                </StyledGridItem>

                <StyledGridItem item xs={12} sm={12} md={6} lg={6}>
                  <ButtonComponent
                    text={"انضم إلى الدّورة"}
                    onClick={() => Navigate(-1)}
                    fullWidth={true}
                    variant={"outlined"}
                    noBackground={true}
                    backgroundColor="primary.main"
                  />
                </StyledGridItem>

              </>
            ) : (
              <>
                <StyledGridItem item xs={12} sm={12} md={6} lg={6}>
                  {" "}
                  <TypographyComponent
                    label="دورة"
                    value="قرأن"
                    labelStyles={{ color: "text.secondary", fontSize: "14px" }}
                    valueStyles={{
                      color: "card.secondary",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                    hideColon={false}
                  />
                </StyledGridItem>

                <StyledGridItem item xs={12} sm={12} md={6} lg={6}>
                  {" "}
                  <TypographyComponent
                    label="نوع الدّورة"
                    value="مكثّفة"
                    labelStyles={{ color: "text.secondary", fontSize: "14px" }}
                    valueStyles={{
                      color: "card.secondary",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                    hideColon={false}
                  />
                </StyledGridItem>

                <StyledGridItem item lg={12}>
                  {" "}
                  <TypographyComponent
                    label="مدرّس الدّورة"
                    value="الأستاذ أحمد أحمد"
                    labelStyles={{ color: "text.secondary", fontSize: "14px" }}
                    valueStyles={{
                      color: "card.secondary",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                    hideColon={false}
                  />
                </StyledGridItem>

              </>
            )
          }

        </Grid>
        {
          type === "registered" && (
            <>
              <ProgressBarComponent
                value={70}
                leftText="6 ساعات, 40 دقيقة"
                rightText="70%"
              />
            </>
          )
        }

      </CardContent>
    </Card>
  );
};

export default DynamicCourseCard;
