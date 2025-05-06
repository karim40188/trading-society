import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

// assets
import logo from "../../assets/logo.png";

const footerLinks = [
    // { text: "IBO Terms", url: "/ibo-terms" },
    { text: "Policies & Procedures", url: "/PoliciesAndProcedures" },
    // { text: "Japan Information", url: "/japan-information" },
    // { text: "Refund Policy", url: "/refund-policy" },
    // { text: "Income Disclosure", url: "/income-disclosure" },
    { text: "Member Terms", url: "/MemberTermsAndConditions" },
    // { text: "Contact", url: "/contact" }
];

const NewFooter = () => {
  return (
    <Box sx={{
         backgroundColor: "#0f0f0f", 
         color: "#fff", 
         py: 3, 
         display: "flex", 
         flexDirection: "column", 
         alignItems: "center"
         }}>
        {/* Logo and Branding */}
        <Box 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                mb: 2
            }}
        >   
            <img src={logo} alt="Logo" style={{ height: "100px", width: "100px" }} />
            <Typography 
                sx={{ 
                    fontSize: "50px", 
                    fontWeight: "900", 
                    background: "linear-gradient(90deg, #826831, #2f2613)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent"
                }}
            >
                Trading Society
            </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "20px",
                mb: 2
            }}
        >
            <IconButton 
                component="a" 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: "#fff" }}
            >
                <Facebook fontSize="large" />
            </IconButton>

            <IconButton 
                component="a" 
                href="https://www.instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: "#fff" }}
            >
                <Instagram fontSize="large" />
            </IconButton>
        </Box>

        {/* Links Section with Hover Animation */}
        <Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
                fontSize: "14px"
            }}
        >
            {footerLinks.map((item, index, array) => (
                <React.Fragment key={item.text}>
                    <Link 
                        href={item.url} 
                        sx={{ 
                            color: "#fff",
                            textDecoration: "none", 
                            fontFamily:"poppins",
                            transition: "color 0.3s ease-in-out",
                            "&:hover": { color: "#d4af37" } // Gold color on hover
                        }}
                    >
                        {item.text}
                    </Link>
                    {index < array.length - 1 && <span style={{ color: "#fff" }}>|</span>}
                </React.Fragment>
            ))}
        </Box>
        {/* Disclaimer */}
        <Box 
            sx={{ 
                textAlign: "center", 
                mt: 2,
                fontSize: "12px",
                fontFamily: "Poppins",
                width: "80%",
            }}
            >
            <Typography 
                component="span" 
                sx={{ 
                    color: "red", 
                    fontSize: "20px",

                    fontWeight: "900" 
                }}
                >
                Disclaimer:
            </Typography>
            {" "}
            All content and information provided on this website are for educational and informational purposes only, specifically relating to trading in financial markets. They should not be construed as specific investment recommendations, endorsements, or solicitations to buy or sell securities or any other investment instruments. It’s emphasized that trading in financial markets carries inherent risks, and potential traders are advised not to invest more than they can afford to lose.
            <br /><br />
            Trading society does not provide direct broker services, trading services, or hold custody of any investor funds. The Company is also not a licensed investment service provider and does not offer any services that would fall under such categorization. Any references to “trading” or “trader” on our platform should be understood as notional or fictitious trading on demo accounts. This website is operated under the jurisdiction of IFZA. Trading society assumes no responsibility or liability for any misinterpretation, misuse, or reliance on the information provided on this website.
            <br /><br />
            Trading FOREX involves substantial risk of loss and is not suitable for all investors. Opinions, market data, and recommendations are subject to change without notice. Past performance is not indicative of future results.
        </Box>
         {/* Company Information Section */}
         <Box sx={{
        mt: 4,
        py: 2,
        textAlign: "center",
        width: "80%",
        backgroundColor: "#111",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8%",
        justifyContent: "center",
        flexWrap: "wrap"
    }}>
        {/* Location */}
        <Link 
            href="https://www.google.com/maps/search/?api=1&query=Silicon+Oasis+Dubai+UAE"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: "15px", mb: 1, color: "#fff", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
        >
            📍 Silicon Oasis Dubai - UAE
        </Link>

        {/* Email */}
        <Link 
            href="mailto:info@tradingsociety.net"
            sx={{ fontSize: "15px", mb: 1, color: "#fff", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
        >
            ✉️ info@tradingsociety.net
        </Link>
        {/* Phone Number */}
        <Link 
            href="tel:+971582323368"
            sx={{ fontSize: "15px", mb: 1, color: "#fff", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
        >
            📞 +971-582-323-368
        </Link>
        {/* Copyright */}
        <Typography sx={{ fontSize: "20px", mb: 1, color: "#fff" }}>
            © Copyright 2024 HFS Society E-Commerce. All rights reserved.
        </Typography>

    </Box>
    </Box>
  );
};

export default NewFooter;
