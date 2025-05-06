import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "swiper/swiper-bundle.css"; // Ensure Swiper CSS is imported



// assets
import CourseImg from '../../assets/PackagesImages/IMG-20250203-WA0021.jpg';
import CourseImg2 from '../../assets/PackagesImages/IMG-20250203-WA0022.jpg';
import CourseImg3 from '../../assets/PackagesImages/IMG-20250203-WA0023.jpg';
import CourseImg4 from '../../assets/PackagesImages/IMG-20250203-WA0024.jpg';
import CourseImg5 from '../../assets/PackagesImages/IMG-20250203-WA0025.jpg';
import CourseImg6 from '../../assets/PackagesImages/IMG-20250203-WA0026.jpg';


const NewCourses = () => {
	const swiperRef = useRef(null);

	const handleNextSlide = () => {
		swiperRef.current.swiper.slideNext();
	};

	const handlePrevSlide = () => {
		swiperRef.current.swiper.slidePrev();
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				width: "100%",
				height: { xs: "auto", md: "100vh" }, 
				mb: "10%",
				px: { xs: "20px", md: "40px" }, 
			}}
		>
			{/* Left side */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: { xs: "center", md: "flex-start" }, 
					flexDirection: "column",
					width: { xs: "100%", md: "40%" },
					color: "white",
					textAlign: { xs: "center", md: "left" }, 
					mb: { xs: "40px", md: 0 }, 
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: "16px", md: "18px" },
						fontFamily: "poppins",
						fontWeight: "400",
						color: "#878787",
					}}
				>
					Unlock Your Potential
				</Typography>
				<Typography
					variant="h5"
					sx={{
						mt: 2,
						fontSize: { xs: "28px", md: "36px" },
						fontFamily: "poppins",
						fontWeight: "800",
					}}
				>
					Our Academy
				</Typography>
				<Typography
					sx={{
						mt: 2,
						fontSize: { xs: "14px", md: "16px" }, 
						fontFamily: "poppins",
						lineHeight: 1.5,
						fontWeight: "100",
						color: "#878787",
						maxWidth: { xs: "100%", md: "80%" }, 
					}}
				>
					Trading Society is here to simplify the world of trading and
					digital currencies, empowering you with the knowledge,
					tools, and a vibrant community to navigate the markets with
					confidence. Whether you're just starting your trading
					journey or refining your strategies, Trading Society
					provides the education, insights, and support you need to
					thrive.
				</Typography>
			</Box>

			{/* Right side */}
			<Box
				sx={{
					display: "flex",
					width: { xs: "100%", md: "60%" }, 
					alignItems: "center",
					mt: { xs: 0, md: 2 },
					position: "relative",
					flexDirection: "column",
				}}
			>
				{/* Swiper Container */}
				<Swiper
					ref={swiperRef}
					style={{
						width: "100%",
						height: { xs: "300px", md: "400px" },
					}}
					spaceBetween={10} 
					slidesPerView={1} 
					loop={true} 
					breakpoints={{
						320: { slidesPerView: 1 }, 
						768: { slidesPerView: 2 }, 
						1024: { slidesPerView: 3 },
					}}
				>
					{/* Slides */}
					<SwiperSlide>
                <Box sx={{  backgroundImage: `url(${CourseImg})`, padding: '20px', color: 'white',width: '100%',height: '100%',borderRadius: '10px' }}>
                <p>Element 1</p>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ backgroundImage: `url(${CourseImg2})`, padding: '20px', color: 'white',width: '100%',height: '100%',borderRadius: '10px' }}>
                <p>Element 2</p>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{  backgroundImage: `url(${CourseImg3})`, padding: '20px', color: 'white',width: '100%',height: '100%',borderRadius: '10px' }}>
                <p>Element 3</p>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ backgroundImage: `url(${CourseImg4})`, padding: '20px', color: 'white',width: '100%',height: '100%',borderRadius: '10px' }}>
                <p>Element 4</p>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{  backgroundImage: `url(${CourseImg5})`, padding: '20px', color: 'white',width: '100%',height: '100%',borderRadius: '10px' }}>
                <p>Element 5</p>
                </Box>
            </SwiperSlide>
				</Swiper>

				{/* Navigation Buttons */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mt: { xs: "20px", md: "40px" },
						gap: "10px",
					}}
				>
					<IconButton
						onClick={handlePrevSlide}
						sx={{
							width: 50,
							height: 50,
							backgroundColor: "#fff",
							color: "#333",
							borderRadius: "50%",
							boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
							transition: "0.3s",
							"&:hover": {
								backgroundColor: "#f0f0f0",
							},
						}}
					>
						<ArrowBack />
					</IconButton>

					<IconButton
						onClick={handleNextSlide}
						sx={{
							width: 50,
							height: 50,
							backgroundColor: "#fff",
							color: "#333",
							borderRadius: "50%",
							boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
							transition: "0.3s",
							"&:hover": {
								backgroundColor: "#f0f0f0",
							},
						}}
					>
						<ArrowForward />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default NewCourses;
