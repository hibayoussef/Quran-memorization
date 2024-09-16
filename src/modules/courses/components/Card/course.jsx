import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

const Course = () => {
  return (
    <>
      <Card sx={{ maxWidth: 440 }}>
        {/* Image Box with reduced margin */}
        <Box sx={{ margin: "10px 10px 0px 10px" }}>
          <CardMedia
            component="img"
            image="https://t3.ftcdn.net/jpg/05/68/99/80/360_F_568998040_m42feFA9RajqmuR5DTlWwox44fxE3MOi.jpg"
            alt="course image"
            sx={{
              borderRadius: "12px",
              objectFit: "cover", // Ensures the image scales well
              width: "100%",
            }}
          />
        </Box>

        {/* Card Content */}
        <CardContent>
          {/* Title */}
          <Typography gutterBottom variant="h5" color="headerText.main">
            وقفات مع الايات
          </Typography>

          {/* Course and Type */}
          <Box sx={{ display: "flex", flexDirection: "row", gap: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              دورة: قرأن
            </Typography>
            <Typography variant="body2" color="text.secondary">
              نوع الدورة: مكثفة
            </Typography>
          </Box>

          {/* Instructor */}
          <Typography variant="body2" color="text.secondary">
            مدرس الدورة: الاستاذ أمجد
          </Typography>

          {/* Progress Line */}
          <Box sx={{ mt: 2 }}>
            <LinearProgress variant="determinate" value={40} />
          </Box>

          {/* Time Remaining */}
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            6 ساعات و 40 دقيقة
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Course;
