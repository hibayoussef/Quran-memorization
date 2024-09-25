// ملف الأنماط لمكون TypographyComponent

export const containerBoxStyles = (containerStyles, gap) => ({
  display: "flex",
  alignItems: "flex-start", // تعديل التوسيط لمحاذاة التقييمات إلى الأعلى
  gap: gap,
  flexWrap: "nowrap", // يسمح بالانتقال إلى السطر التالي عند صغر الشاشة
  ...containerStyles,
});

export const labelTypographyStyles = (labelStyles, fontWeight) => ({
  fontWeight: fontWeight || labelStyles.fontWeight || "bold",
  whiteSpace: "nowrap", // منع التفاف النص
  fontSize: "16px",
  direction: "rtl", // ضبط اتجاه النص العربي
  ...labelStyles,
  
});

export const valueTypographyStyles = (valueStyles) => ({
  ...valueStyles,
});

export const ratingStyles = () => ({
  fontSize: "20px",
  marginLeft: "5px"
});
