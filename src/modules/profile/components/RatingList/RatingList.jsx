import React from "react";
import RatingComponent from "../../../../components/shared/Rating/RatingComponent";

const RatingsList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
      }}
    >
      <RatingComponent label="تقييم المدرس" ratingValue={4} />
      <RatingComponent label="متابعة الطلاب" ratingValue={3} />
      <RatingComponent label="التقييد بالدوام" ratingValue={5} />
      <RatingComponent label="التقييد بوقت الدوام" ratingValue={2} />
    </div>
  );
};

export default RatingsList;
