import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DownArrow from "@/home_profile_assets/DownArrow.svg";

import useApi from "@/api";

const SideBarLinks = ({ links, scannersItems, navigate }) => {
	const api = useApi();
	const location = useLocation(); // Get current path

	const [scannersOpen, setScannersOpen] = useState(false);

	const logout = async () => {
		try {
			const res = await api.post("/logout");

			localStorage.setItem("user", null);
			localStorage.setItem("token", null);
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};
	const linkStyles = (isActive) => ({
		listStyleType: "none",
		display: "flex",
		alignItems: "center",
		gap: "10px",
		padding: "9px 10px",
		cursor: "pointer",
		width: "100%",
		border: isActive ? "2px solid #ecbc56" : "", // Active border color
		borderRadius: "15px",
		boxShadow: isActive
			? "0 0px 10px rgba(255, 255, 255, 0.7)" // Box shadow for active state
			: "none", // No shadow when inactive
		transition:
			"0.3s all ease-in-out",

		"&:hover": {
			transform: "scale(1.02)",
			border: "1px solid #ecbc56", // Hover border color

			boxShadow: "0 4px 8px rgba(236, 188, 86, 0.4)", // Hover box shadow
		},
	});

	return (
		<Box
			component="ul"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "center",
				gap: "15px",
				color: "#fff",
				m: 0,
				py: 10,
				px: 2,
				transition: "all 0.3s",
			}}
		>
			{links.map((link) =>
				link.name === "Scanners" ? (
					<Box key={link.name}>
						<Box
							component="li"
							sx={{
								...linkStyles(
									scannersItems.some(
										(item) =>
											location.pathname === item.path
									)
								),
								// Add spacing or margin between list items or contents
								marginBottom: "10px", // Adds space between each item
								width: "100%",
								padding: "10px 10px", // Adjust padding if needed
								transition: "all 0.3s",
							}}
							onClick={() => setScannersOpen(!scannersOpen)}
						>
							<Box sx={{ color: "#fff" }}>{link.icon}</Box>
							<Typography
								sx={{
									fontFamily: "Motken noqta ii",
									fontSize: "12px",
									letterSpacing: "-4%",
									color: "#fff",
								}}
							>
								{link.name}
							</Typography>
							<Box
								sx={{
									fontSize: "14px",
									transform: scannersOpen
										? "rotate(0deg)"
										: "rotate(-90deg)",
								}}
							>
								<img
									src={DownArrow}
									alt="Dropdown Arrow"
									style={{ width: "10px", height: "10px" }}
								/>
							</Box>
						</Box>

						{scannersOpen &&
							scannersItems.map((item) => (
								<Box
									key={item.name}
									sx={linkStyles(
										location.pathname === item.path
									)}
									onClick={() => {
										navigate(item.path);
										window.scrollTo(0, 0);
									}}
								>
									<Box
										sx={{
											fontSize: "22px",
											color: "text.primary",
										}}
									>
										{item.icon}
									</Box>
									<Typography
										sx={{
											fontFamily: "Motken noqta ii",
											fontSize: "12px",
											letterSpacing: "-4%",
											color: "#fff",
										}}
									>
										{item.name}
									</Typography>
								</Box>
							))}
					</Box>
				) : (
					<Link
						to={link.path}
						key={link.name}
						style={{
							...linkStyles(location.pathname === link.path),
							width: "100%",
						}}
						onClick={() => {
							navigate(link.path);
							window.scrollTo(0, 0);
						}}
					>
						<Box sx={{ fontSize: "22px", color: "text.primary" }}>
							{link.icon}
						</Box>
						<Typography
							sx={{
								fontFamily: "Motken noqta ii",
								fontSize: "12px",
								letterSpacing: "-4%",
								color: "#fff",
							}}
						>
							{link.name}
						</Typography>
					</Link>
				)
			)}

			{/* Logout Button */}
			<Button
				onClick={logout}
				sx={{
					color: "#c1954a",
					width: "120px",
					height: "40px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					mt: "15px",
					backgroundColor: "#201b14",
				}}
			>
				<Typography
					sx={{
						fontFamily: "Motken noqta ii",
						fontSize: "18px",
						letterSpacing: "-4%",
					}}
				>
					Logout
				</Typography>
			</Button>
		</Box>
	);
};

export default SideBarLinks;
