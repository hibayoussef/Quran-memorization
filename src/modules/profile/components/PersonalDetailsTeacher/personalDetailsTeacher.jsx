import { StyledBox, StyledGridItem } from "./personalDetailsTeacher.styles"; // Adjust the import path as necessary
import TypographyComponent from "../../../../components/shared/typography/Typography";
import { Grid } from "@mui/material";

const PersonalDetailsTeacher = ({
  age,
  yearsOfExperience,
  placeOfResidence,
}) => {
  const ratingsData = [
    { label: "تقييم المدرس", value: 4 },
    { label: "متابعة الطلاب", value: 3 },
    { label: "التقييد بالدوام", value: 5 },
    { label: "التقييد بوقت الدوام", value: 2 },
  ];
  
  return (
    <StyledBox>
      <Grid container spacing={2}>
        <StyledGridItem item xs={12} sm={6} lg={3}>
          <TypographyComponent
            label="العمر"
            value="8 سنوات"
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            valueStyles={{
              color: "card.secondary",
              fontSize: "17px",
              fontWeight: 400,
            }}
            hideColon={false}
          />
        </StyledGridItem>

        <StyledGridItem item xs={12} sm={6} lg={3}>
          <TypographyComponent
            label="سنوات الخبرة"
            value="6" // Update this value as needed
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            valueStyles={{
              color: "card.secondary",
              fontSize: "18px",
              fontWeight: 400,
            }}
            hideColon={false}
          />
        </StyledGridItem>

        <StyledGridItem item xs={12} sm={6} lg={3}>
          <TypographyComponent
            label="مكان الإقامة"
            value="دبي"
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            valueStyles={{
              color: "card.secondary",
              fontSize: "17px",
              fontWeight: 400,
            }}
            hideColon={false}
          />
        </StyledGridItem>

        <StyledGridItem item xs={12} sm={12} lg={12} sx={{ mt: 3 }}>
          <TypographyComponent
            label="خبرات المدرّس"
            value={`هذا نص تجريبي باللغة العربية يستخدم لملء المساحات الفارغة في التصميمات والمطبوعات. الغرض من هذا النص هو تقديم عرض مرئي بدون الإلهاء عن المحتوى. يتم استخدامه كثيرًا في عالم الطباعة والنشر.
أو يمكنك استخدام نصوص من كتابات عربية مختلفة لإنشاء محتوى بديل. إذا كنت بحاجة إلى نص أطول أو موضوع معين، فأنا هنا للمساعدة!`} // Update this value as needed
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            valueStyles={{
              color: "card.secondary",
              fontSize: {
                sm: "18px", 
                xs: "14px"
              },
              fontWeight: 400,
            }}
            hideColon={false}
          />
        </StyledGridItem>

        <StyledGridItem item xs={12} sm={12} lg={12} sx={{ mt: 3 }}>
          <TypographyComponent
            label="تقييمات المدرس"
            ratings={ratingsData}
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            valueStyles={{
              color: "card.secondary",
              fontSize: "18px",
              fontWeight: 400,
            }}
            hideColon={false}
          />
        </StyledGridItem>
      </Grid>
    </StyledBox>
  );
};

export default PersonalDetailsTeacher;
