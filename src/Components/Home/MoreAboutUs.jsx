import React from "react";
import { Box, Typography } from "@mui/material";
import LandingPageMoreAboutUs from "../../assets/LandingPageMoreAboutUs.png";

const MoreAboutUs = () => {
	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "150vh", 
				backgroundImage: `url(${LandingPageMoreAboutUs})`,
				backgroundSize: "cover",
				backgroundPosition: " center center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				flexDirection: { xs: "column", md: "row" }, 
				alignItems: "center",
				justifyContent: "center",
				gap: { xs: "40px", md: "200px" },
				textAlign: "center",
				py: { xs: "50px", md: "100px" },
				px: { xs: "20px", md: "200px" }, 
			}}
		>
			{/* Main Content */}
			<Box
				sx={{
					width: { xs: "100%", md: "50%" }, 
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: { xs: "20px", md: "40px" }, 
				}}
			>
				<Typography
					color="#000"
					variant="h1"
					sx={{
						fontSize: { xs: "24px", sm: "30px", md: "35px" }, 
						fontWeight: "900",
					}}
				>
					Master the Markets with Trading Society
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "18px", sm: "22px", md: "24px" }, 
						fontWeight: "500",
						color: "#000",
					}}
				>
					Master the Markets with Trading Society – Expert-led
					courses, live analysis, and proven strategies to kickstart
					your trading journey!
				</Typography>
			</Box>

			{/* Cards Section */}
			<Box
				sx={{
					width: { xs: "100%", md: "90%" },
					display: "flex",
					flexDirection: { xs: "column", md: "row" }, 
					alignItems: "center",
					justifyContent: "center",
					gap: { xs: "20px", md: "40px" }, 
				}}
			>
				{/* Card 1 */}
				<Box
					sx={{
						backgroundColor: "#4c4c4c20",
						backdropFilter: "blur(5px)",
						borderRadius: "15px",
						p: "20px",
						width: { xs: "100%", md: "80%" }, // Full width on mobile
					}}
				>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: "24px", md: "30px" }, // Responsive font size
							fontWeight: "600",
							color: "#fff",
							mb: { xs: "10px", md: "20px" }, // Add margin bottom
						}}
					>
						Tools for Every Trader
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "16px", md: "18px" }, // Responsive font size
							fontWeight: "500",
							color: "#fff",
						}}
					>
						Access advanced technical analysis tools, risk
						management calculators, and a trading journal to track
						your performance. Plus, get notified with signal alerts
						for high-probability trade opportunities.
					</Typography>
				</Box>

				{/* Card 2 */}
				<Box
					sx={{
						backgroundColor: "#4c4c4c20",
						backdropFilter: "blur(5px)",
						borderRadius: "15px",
						p: "20px",
						width: { xs: "100%", md: "80%" }, // Full width on mobile
					}}
				>
					<Typography
						variant="h4"
						sx={{
							fontSize: { xs: "24px", md: "30px" }, // Responsive font size
							fontWeight: "600",
							color: "#fff",
							mb: { xs: "10px", md: "20px" }, // Add margin bottom
						}}
					>
						Student Portal Section
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "16px", md: "18px" }, // Responsive font size
							fontWeight: "500",
							color: "#fff",
						}}
					>
						Access all your courses, track your progress, and
						participate in live sessions through your personalized
						student portal. Stay organized, stay motivated, and keep
						track of your trading journey - all in one place.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default MoreAboutUs;
