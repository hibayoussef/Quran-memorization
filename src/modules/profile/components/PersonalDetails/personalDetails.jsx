import { StyledBox, StyledGridItem } from "./personal.styles"; // Adjust the import path as necessary
import TypographyComponent from "../../../../components/shared/typography/Typography";
import { Grid } from "@mui/material";

const PersonalDetails = ({ age, yearsOfExperience, placeOfResidence }) => {
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
        <StyledGridItem item xs={12} sm={6} lg={3}>
          <TypographyComponent
            label="مستوى الطالب"
            value="مبتدئ" // Update this value as needed
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
            label="تقييم الطّالب"
            value="5/10" // Update this value as needed
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

export default PersonalDetails;
