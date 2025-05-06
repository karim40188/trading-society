import { useState, useEffect, useContext } from "react";
import { Box, Divider, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import userInfoBg from "../../../assets/images/home/userInfoBG.png";
import downloadApp from "../../../assets/images/home/DownloadApp.png";
import useApi from "@/api";
import { TokenContext } from "@/context";

// assets
import appstore from "@/home_profile_assets/appstore.png";
import googlePlay from "@/home_profile_assets/googleplay.png";

// component
const UserInfo = () => {
  // config
  const api = useApi();
  let navigate = useNavigate();

  // data
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

  // methods
  const getUserInfo = async () => {
    try {
      const res = await api.get("/user");
      const data = res.data.user;
      setUser(data);
      updateUserInfo(data);
    } catch (err) {
      navigate("/login");
    }
  };
  const updateUserInfo = (user) => {
    setUserInfo([
      {
        label: "Name",
        value: `${user.user_first_name} ${user.user_last_name}`,
      },
      { label: "E-mail", value: user.user_email },
      { label: "Subscription", value: "---" },
      // { label: "Phone Number", value: user.phone },
      {
        label: "Start Date",
        value: "---",
      },
      { label: "Expiratiion Date", value: "---" },
    ]);
  };

  // on render
  useEffect(() => {
    getUserInfo();
  }, []);

  // render
  return (
		<Box
			sx={{
				display: "flex",
				flexDirection: {
					lg: "row",
					xs: "column",
				},
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
				gap: 2,
				width: "100%",
				alignItems: "stretch",
				justifyContent: "center",
				color: "#fff",
				pt: 3,
			}}
		>
			{/* First Box */}

			<Box
				sx={{
					height: "100%",
					flex: 1,
					width: "100%",
					display: "flex",
					p: { md: 5, sm: 3, xs: 2 },
					FontSize: { md: 5, sm: 3, xs: 1 },
					flexDirection: "column",
					alignItems: "left",
					justifyContent: "center",
					borderRadius: "15px",
					backgroundImage: `url(${userInfoBg})`, // Set background image
					backgroundSize: "cover", // Make sure the background covers the entire area
					backgroundPosition: "center", // Center the background image
				}}
			>
				{/* User Info */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 4,
						width: "fit-content",
						height: "auto",
					}}
				>
					<Avatar
						src={user?.profile_image}
						alt={user?.user_first_name}
						sx={{
							width: { md: "100px", sm: "70px", xs: "60px" },
							height: { md: "100px", sm: "70px", xs: "60px" },
							borderRadius: "50%",
							backgroundColor: "#fff",
							fontSize: { md: "50px", sm: "40px", xs: "30px" },
							position: "relative",
							overflow: "hidden",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{/* If the user doesn't have an image, show initials */}
						{!user?.profile_image &&
							`${user?.user_first_name?.[0]}${user?.user_last_name?.[0]}`}
					</Avatar>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 0,
						}}
					>
						<Typography
							sx={{
								color: "#fff",
								fontSize: {
									md: "35px",
									sm: "27px",
									xs: "20px",
								},
								mb: ".5em",
								fontWeight: "bold",
								textTransform: "capitalize",
							}}
						>
							{user?.user_first_name}
						</Typography>
						<Typography sx={{ color: "gray", mt: "-20px" }}>
							{/* ID: {user?.user_id} */}
						</Typography>
					</Box>
				</Box>

				{userInfo.map((item, n) => (
					<Box
						key={n}
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: 2,
							alignItems: "center",
							ml: 1,
						}}
					>
						<Typography
							sx={{
								color: "#efedf980",
								fontSize: "25px",
								fontWeight: "bold",
							}}
						>
							{item.label}:
						</Typography>
						<Typography
							sx={{
								color: "gray",
								fontSize: "25px",
								fontWeight: "bold",
							}}
						>
							{item.value}
						</Typography>
					</Box>
				))}
			</Box>
			{/* Second Box Downloading App */}
			<Box
				sx={{
					flex: 1,
					width: "100%",
					p: { md: 5, sm: 3, xs: 1 },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					borderRadius: "15px",
					backgroundImage: `url(${downloadApp})`, // Set background image
					backgroundSize: "cover", // Make sure the background covers the entire area
					backgroundPosition: "center", // Center the background image
				}}
			>
				<Typography
					sx={{
						mt: "20px",
						color: "#fff",
						textAlign: "left",
						fontFamily: "TanseekModernProArabic-ExBold",
						fontSize: "30px",
						fontWeight: "900",
						lineHeight: "30px",
						ml: "15px",
					}}
				>
					Download Our App
				</Typography>

				<Box
					sx={{
						maxWidth: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							display: "flex",
							py: 4,

							flexDirection: { md: "row", xs: "column" },
							gap: 2,
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<a
							href="https://play.google.com/store/apps/details?id=com.trading_society.app&pcampaignid=web_share"
							target="_blank"
							style={{ maxWidth: "320px" }}
						>
							<Box
								component="img"
								src={googlePlay}
								sx={{
									width: {
										sm: "90%",
										md: "100%",
									},
									cursor: "pointer",
									height: "auto",
									display: "block",
									objectFit: "contain",

									transition:
										"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", 
									"&:hover": {
										transform: "scale(1.01)",
									},
								}}
							/>
						</a>

						<Divider
							sx={{
								backgroundColor: "#ECBC56",
								width: { md: "1px", xs: "80px" },
								height: { md: "80px", xs: "1px" },
							}}
						/>
						<a
							href=""
							target="_blank"
							style={{  maxWidth: "320px" }}
						>
							<Box
								component="img"
								src={appstore}
								sx={{
									width: {
										sm: "90%",
										md: "100%",
									},
									cursor: "pointer",
									height: "auto",
									display: "block",
									objectFit: "contain",

									transition:
										"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Animation on hover
									"&:hover": {
										transform: "scale(1.01)",
									},
								}}
							/>
						</a>
					</Box>

					<Typography
						sx={{
							color: "#fff",
							textAlign: "center",
							width: "100%",
							textWrap: "balance",
							fontSize: "18px",
						}}
					>
						Take the power of Trading Society with you wherever you
						go. Download our mobile app to access tools that help
						you make smarter trading decisions and track your
						progress in real time, all from the convenience of your
						phone.
					</Typography>
				</Box>
			</Box>
		</Box>
  );
};

export default UserInfo;
