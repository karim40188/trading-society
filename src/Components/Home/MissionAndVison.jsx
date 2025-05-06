import { Box, Typography, Grid2 } from "@mui/material";
import missionImg from "../../assets/misson_img.png";
import mission from "../../assets/mission.png";
import visionImg from "../../assets/vision_img.png";
import vision from "../../assets/Vision.png";
import { motion } from "framer-motion";

function MissionAndVision() {
	return (
		<Box
			sx={{
				position: "relative",
				overflow: "hidden",
				mt: "-110px",
				px: { xs: "20px", md: "40px" },
			}}
		>
			<Grid2
				container
				display="flex"
				alignItems="center"
				justifyContent="center"
				spacing={5}
				sx={{
					flexDirection: { xs: "column", md: "row" },
					width: "100%",
					px: { xs: 2, md: 4 },
					gap: { xs: 4, md: 6 },
				}}
			>
				{/* Mission Section */}
				<Grid2
					xs={12}
					md={6}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							textAlign: { xs: "center", md: "left" },
							width: "100%",
							maxWidth: { xs: "400px", md: "500px" },
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignItems: "center",
								justifyContent: "center",
								gap: { xs: "20px", md: "10px" },
								width: "auto",
								height: "auto",
								mb: { xs: 2, md: 3 },
							}}
						>
							{/* Mission Image */}
							<Box
								sx={{
									width: {
										xs: "150px",
										sm: "200px",
										md: "250px",
									},
									height: {
										xs: "100px",
										sm: "150px",
										md: "200px",
									},
									mb: { xs: 2, md: 0 },
								}}
							>
								<motion.img
									src={missionImg}
									style={{
										height: "100%",
										objectFit: "cover",
									}}
									initial={{ opacity: 0, y: -20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
								/>
							</Box>

							{/* Mission Title */}
							<Box
								sx={{
									width: "100%",
									maxWidth: "264px",
									textAlign: { xs: "center", md: "left" },
								}}
							>
								<Typography
									variant="body2"
									sx={{
										fontSize: { xs: "30px", md: "40px" },
										textTransform: "capitalize",
										letterSpacing: {
											xs: "10px",
											md: "16px",
										},
										color: "#ECBC56",
										textAlign: { xs: "center", md: "left" },
									}}
								>
									<Typography
										component="span"
										sx={{
											color: "#ffffff",
											fontSize: {
												xs: "50px",
												md: "60px",
											},
											fontWeight: "600",
										}}
									>
										M
									</Typography>{" "}
									ission
								</Typography>
							</Box>
						</Box>

						{/* Mission Description */}
						<Typography
							sx={{
								fontSize: {
									xs: "16px",
									md: "22px",
									xl: "27px",
								},
								color: "text.secondary",
								fontFamily: "TanseekModernProArabic-ExBold",
								lineHeight: "1.5",
								maxWidth: { xs: "100%", md: "380px" },
								textAlign: { xs: "center", md: "left" },
							}}
							component={motion.div}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							Our mission at Trading Society is to provide high
							quality, easy to understand Forex education that
							empowers traders of all levels. We aim to build a
							strong, collaborative community where traders can
							share insights, learn from each other, and grow in a
							supportive environment.
						</Typography>
					</Box>
				</Grid2>

				{/* Vision Section */}
				<Grid2
					xs={12}
					md={6}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mt: { xs: 4, md: 0 },
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							textAlign: { xs: "center", md: "left" },
							width: "100%",
							maxWidth: { xs: "400px", md: "500px" },
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignItems: "center",
								justifyContent: "center",
								gap: { xs: "10px", md: "20px" },
								width: "auto",
								height: "auto",
								mb: { xs: 2, md: 3 },
							}}
						>
							{/* Vision Image */}
							<Box
								sx={{
									width: {
										xs: "150px",
										sm: "200px",
										md: "250px",
									},
									height: {
										xs: "100px",
										sm: "150px",
										md: "200px",
									},
									mb: { xs: 2, md: 0 },
								}}
							>
								<motion.img
									src={visionImg}
									style={{
										height: "100%",
										objectFit: "cover",
									}}
									initial={{ opacity: 0, y: -20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
								/>
							</Box>

							{/* Vision Title */}
							<Box
								sx={{
									width: { xs: "200px", md: "234px" },
									height: { xs: "30px", md: "36px" },
								}}
							>
								<motion.img
									src={vision}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								/>
							</Box>
						</Box>

						{/* Vision Description */}
						<Typography
							sx={{
								fontSize: {
									xs: "16px",
									md: "22px",
									xl: "27px",
								},
								color: "text.secondary",
								fontFamily: "TanseekModernProArabic-ExBold",
								lineHeight: "1.5",
								maxWidth: { xs: "100%", md: "380px" },
								textAlign: { xs: "center", md: "left" },
							}}
							component={motion.div}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							Our vision is to create a global network of skilled
							traders who not only succeed individually but also
							contribute to the growth of a thriving, informed
							trading community. We envision a future where Forex
							trading is accessible, transparent, and rewarding
							for all.
						</Typography>
					</Box>
				</Grid2>
			</Grid2>
		</Box>
	);
}

export default MissionAndVision;
