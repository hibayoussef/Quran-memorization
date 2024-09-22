import { Box, Container } from "@mui/material";
import "./StudentExcellence.css"; // Assuming this is for general CSS or other styles
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Image
import img from "../../../assets/images/MaskGroup.png";
// Hooks
import { useRef, useEffect } from "react";
//
import { styles } from "./StudentExcellence.styles";

const StudentExcellence = () => {
  const students = [
    { name: "الطالب المتفوق احمد احمد", course: "دورات : القرآن", rating: 5 },
    { name: "الطالب المتفوق محمد علي", course: "دورات : الحديث", rating: 4 },
    { name: "الطالب المتفوق عمر خالد", course: "دورات : الفقه", rating: 5 },
    { name: "الطالب المتفوق عمر خالد", course: "دورات : الفقه", rating: 5 },
  ];

  // Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Update the buttons once the swiper component is mounted
    if (prevRef.current && nextRef.current) {
      prevRef.current.style.zIndex = 10; // Set z-index to make sure they appear above the Swiper
      nextRef.current.style.zIndex = 10;
    }
  }, []);

  return (
    <Box sx={styles.student}>
      <Container maxWidth="xl">
        <h1 style={styles.title}>الطلاب المتميزين :</h1>
        <h3 style={styles.titleTow}>
          تم تكريم الطلاب المتميزين من دورات القرآم والحديث.
        </h3>
        {/* Swiper for slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            // Update Swiper with navigation refs
            if (swiper.params.navigation) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          modules={[Navigation, Pagination]}
        >
          {students.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="student-card">
                <img src={img} alt="student" />
                <h3>{student.name}</h3>
                <p>{student.course}</p>
                <div className="stars">{"⭐".repeat(student.rating)}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="swiper-navigation">
          <button ref={prevRef} className="custom-prev-btn">
            &#8249; {/* Left arrow */}
          </button>
          <button ref={nextRef} className="custom-next-btn">
            &#8250; {/* Right arrow */}
          </button>
        </div>
      </Container>
    </Box>
  );
};

export default StudentExcellence;
