// start in MIU
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// start in in css
import { styles } from "./WeeklyCreation.styles";
//
import Frame from "../../../assets/images/Frame.png";

const WeeklyCreation = () => {
  return (
    <Box sx={styles.boxWeekly}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* start in title */}
          <Grid size={{ sm: 12, md: 6 }}>
            <h1 style={styles.title}>الخُلق الأسبوعي</h1>
            <h3 style={styles.titleTow}>إغاثة الملهوف</h3>
            <Typography sx={styles.subTitle}>
              ان تقديم العون والنصرة لمن يحتاج إليها سلوك إسلامي أصيل، وخلق رفيع
              تقتضيه الأخوة الصادقة، وتدفع إليه المروءة ومكارم الأخلاق. وقد كانت
              حياة النبي محمد صلى الله عليه وسلم خير مثال يحتذى في كل شيء، ولا
              سيما إغاثة الملهوف، وتقديم العون لكل من يحتاج إليه، حتى لقد عرف
              بذلك قبل بعثته صلى الله عليه وسلم، فعند نزول الوحي عليه أول مرة
              رجع إلى خديجة فأخبرها الخبر ثم قال: "لقد خشيت على نفسي". عندئذ
              أجابته أم المؤمنين خديجة رضي الله عنها: كلا والله! ما يخزيك ا لله
              أبدًا، إنك لتصل الرحم، وتحمل الكلَّ، وتكسب المعدوم، وتقري الضيف،
              وتعين على نوائب الحق.
            </Typography>
            <Typography sx={styles.subTitle}>
              هكذا استدلت أم المؤمنين خديجة رضي الله عنها على حفظ الله له، وعدم
              تضييعه إياه بصنائع المعروف التي كان يصنعها، وبإغاثة الملهوف؛
              فالجزاء من جنس العمل.
            </Typography>
          </Grid>
          {/* start in img  */}
          <Grid size={{ sm: 12, md: 6 }}>
            <Box sx={styles.BoxImg}>
              <img src={`${Frame}`} alt="" style={styles.img} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WeeklyCreation;
