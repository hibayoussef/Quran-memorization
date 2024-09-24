import { Grid } from "@mui/material";
import { StyledBox } from "../../profile/components/PersonalDetailsTeacher/personalDetailsTeacher.styles";
import { StyledGridItem } from "../../profile/components/PersonalDetailsTeacher/personalDetailsTeacher.styles";
import TypographyComponent from "../../../components/shared/typography/Typography";

const FirstSection = ({
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
        <StyledGridItem item xs={12} sm={6} lg={12}>
          <TypographyComponent
            label="الطّالب أحمد أحمد"
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            hideColon={false}
          />
        </StyledGridItem>

        <StyledGridItem item xs={12} sm={6} lg={12}>
          <TypographyComponent
            label="جلسة التّسميع الأولى"
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
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

        <StyledGridItem item xs={12} sm={12} lg={12} sx={{ mt: 3 }}>
          <TypographyComponent
            label="الملاحظات"
            value={`هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.`} // Update this value as needed
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
            valueStyles={{
              color: "card.secondary",
              fontSize: "18px",
              fontWeight: 400,
            }}
            hideColon={false}
          />
        </StyledGridItem>

        {/* ********************************** */}
        <StyledGridItem item xs={12} sm={6} lg={12}>
          <TypographyComponent
            label="جلسة التّسميع الثانية"
            labelStyles={{ color: "text.secondary", fontSize: "17px" }}
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

        <StyledGridItem item xs={12} sm={12} lg={12} sx={{ mt: 3 }}>
          <TypographyComponent
            label="الملاحظات"
            value={`هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.`} // Update this value as needed
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

export default FirstSection;
