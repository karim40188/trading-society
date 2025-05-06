import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	Link,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import Widget from "./Widget.jsx";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
	const [hideNavbar, setHideNavbar] = useState(false); // Track if navbar should hide
	const [hideWidget, setHideWidget] = useState(false); // Track if widget should hide
	gsap.registerPlugin(ScrollToPlugin);

	// Define the links array
	const links = [
		{ name: "Home", href: "#home" },
		{ name: "About Us", href: "#aboutus" },
		{ name: "Trade Alerts", href: "#tradealerts" },
		{ name: "Academy", href: "#academy" },
		{ name: "Scanners", href: "#scanners" },
		{ name: "Login", href: "/login" },
		{ name: "Join us", href: "https://www.hfssociety.com" },
	];

	const goTo = (e, id) => {
		if (id.startsWith("#")) {
			e.preventDefault();
			const targetElement = document.getElementById(id.substr(1));

			if (targetElement) {
				const offsetTop = targetElement.offsetTop;
				const screenHeight = window.innerHeight;
				const scrollPosition = offsetTop - screenHeight / 3;
				gsap.to(window, {
					scrollTo: scrollPosition,
					ease: "power2.out",
				});
			}
		}
	};

	const handleToggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setScrolling(scrollY > 0);

			// Logic to hide navbar on scroll down and show on scroll up for desktop
			if (scrollY > lastScrollY && window.innerWidth > 768) {
				setHideNavbar(true); // Hide navbar on scroll down
				setHideWidget(true); // Hide widget on scroll down
			} else {
				setHideNavbar(false); // Show navbar on scroll up
				setHideWidget(false); // Show widget on scroll up
			}

			setLastScrollY(scrollY); // Update last scroll position
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<Box
			sx={{
				width: "100%",
				position: "fixed",
				zIndex: "999",
			}}
		>
			<AppBar
				className="navbar"
				sx={{
					background: "#000000",
					width: "100%",
					height: "70px",
					zIndex: "999",
					transition: "300ms all ease",
					backdropFilter: "blur(15.7px)",
					justifyContent: "space-between",
					display: "flex",
					backgroundColor: scrolling
						? "rgba(0, 0, 0, 0.7)"
						: "rgba(0, 0, 0, 1)",
					top: "0",
					gap: "10px",
					// Hide the AppBar when scrolling down on desktop
					transform:
						hideNavbar && window.innerWidth > 768
							? "translateY(-100%)"
							: "none",
				}}
			>
				<Toolbar
					sx={{
						transition: "all 1s ease",
						display: "flex",
						justifyContent: "space-between", // Changed to space-between
						alignItems: "center", // Added to align items vertically
						width: "100%", // Ensure Toolbar takes full width
						px: 5, // Add padding on the sides
						gap: "20px",
					}}
				>
					<Box
						component="img"
						src={logo}
						sx={{
							maxWidth: { xs: "50px", md: "65px" },
							maxHeight: { xs: "50px", md: "70px" },
							animation: "fadeIn 0.5s ease",
						}}
					/>

					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							justifyContent: "space-around",
							gap: "20px", // Adjust the gap between links
							flexGrow: 1, // Allow the Box to grow and take up remaining space
							mx: 2, // Add margin on the sides
							ml: "150px",
						}}
					>
						{links.map((link) => (
							<Box
								key={link.name}
								sx={{
									position: "relative",
                                    transition: "all 3s ease",
									"&:hover": {
                                        ...(link.name !== "Join us" && {
                                            borderBottom: "3px solid #ecbc56",
											"&:after": {
												content: '""',
												position: "absolute",
												top: "100%",
											},
										}),
									},
								}}
							>
								<a
									href={link.href}
									className="link"
									onClick={(e) => goTo(e, link.href)}
									style={{
										color: "#fff",
										textDecoration: "none",
										fontSize: "20px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "10px",
										position: "relative",
										transition: "all 2s ease",
										"&:hover": {
											color: "#ecbc56",
											borderBottom: "2px solid #ecbc56",
										},
									}}
								>
									<Typography
										variant="p"
										sx={{
											color: "#fff",
											fontFamily:
												"TanseekModernProArabic-ExBold",
											letterSpacing: ".071em",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: {
												xs: "16px",
												md: "25px",
											},
											transition: "all 2s easeInOut",
											width: "auto",
											...(link.name === "Join us" && {
												background:
													"linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
												display: "flex",
												justifyContent: "center",

												textAlign: "center",
												px: "10px",
												py: "4px",
												borderRadius: "5px",
												fontSize: "20px",
												fontWeight: "bold",
												position: "relative",
												"&:hover": {
													background:
														"linear-gradient(180deg, #dfb247 0%, #ecbc56 100%)",
												},
											}),
										}}
									>
										{link.name}
									</Typography>
								</a>
							</Box>
						))}
					</Box>

					<Box sx={{ flexGrow: 1 }}>
						<IconButton
							onClick={handleToggle}
							color="inherit"
							sx={{
								display: { xs: "flex", md: "none" },
								fontSize: "25px",
							}}
						>
							{isOpen ? <FaTimes /> : <FaBars />}
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			{/* Mobile Menu Drawer */}
			<Drawer
				anchor="left"
				open={isOpen}
				onClose={handleToggle}
				sx={{
					"& .MuiDrawer-paper": {
						width: "250px",
						background: "#000",
						color: "#fff",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						padding: "20px",
						gap: "20px",
					}}
				>
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={(e) => goTo(e, link.href)}
							sx={{
								color: "#fff",
								textDecoration: "none",
								fontSize: "20px",
								textAlign: "center",
							}}
						>
							{link.name}
						</Link>
					))}
				</Box>
			</Drawer>

			{/* Widget component with scroll behavior */}
			<Box
				sx={{
					width: "100%",
					position: "fixed",
					zIndex: "999",
					top: "68px",
					// Hide the Widget when scrolling down on desktop
					transform:
						hideWidget && window.innerWidth > 768
							? "translateY(-160%)"
							: "none",
					transition: "transform 0.3s ease",
				}}
			>
				<Widget />
			</Box>
			<Drawer
				anchor="left"
				open={isOpen}
				onClose={handleToggle}
				sx={{ zIndex: "9999" }}
				className="filter"
				PaperProps={{
					sx: {
						width: "250px",
						position: "relative",
						backgroundColor: "#252525",
						display: "flex",
						flexDirection: "column",
						gap: "50px",
					},
				}}
			>
				<Box sx={{ width: "150px", mx: "auto", mt: "30px" }}>
					<Box
						component="img"
						src={logo}
						sx={{ width: "100%", backgroundSize: "cover" }}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "30px",
						height: "100%",
						textAlign: "center",
					}}
				>
					{links.map((link) => (
						<a
							href={link.href}
							key={link.name}
							className="sidebar-link"
							to={link.href}
							onClick={(e) => {
								handleToggle(e);
								goTo(e, link.href);
							}}
							style={{
								color: "#fff",
								textAlign: "center",
								position: "relative",
								width: "80%",
								margin: "0 auto",
								transition: "400ms all",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "32px",
							}}
						>
							{link.name}
						</a>
					))}
				</Box>
			</Drawer>
		</Box>
	);
}

export default Navbar;
