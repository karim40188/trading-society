import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from "@/Components/Home/Navbar";
import NewFooter from "../Components/Home/NewFooter";

const MemberTermsAndConditions = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ padding: 4, mt: "10%", mx: "auto", maxWidth: '800px', backgroundColor: '#040404', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                Member Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>1. Ownership of Content:</strong><br />
                All materials, including but not limited to educational videos, documents, software, and any other intellectual property ("Content") provided by Trading Society are the exclusive property of Trading Society. These materials are protected under intellectual property laws worldwide, including copyright, trademark, and other applicable laws.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>2. Restricted Use:</strong><br />
                Members are granted access to the Content solely for personal, non-commercial use. Members may not share, distribute, reproduce, or sell the Content in any form or by any means without prior written consent from Trading Society. Any unauthorized sharing or selling of the Content is strictly prohibited.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>3. Legal Action for Violations:</strong><br />
                Any member found to be in violation of these terms, including unauthorized sharing or distribution of Content, will be subject to legal action. Trading Society reserves the right to pursue claims for damages, including legal fees, and to terminate membership immediately without a refund.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>4. Confidentiality:</strong><br />
                Members agree to treat all materials and information provided by Trading Society as confidential. Sharing of sensitive content or information outside the platform is prohibited and will result in termination of membership and legal consequences.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>5. International Compliance:</strong><br />
                Members acknowledge that these terms and conditions are governed by the laws of the jurisdiction in which Trading Society operates, as well as international intellectual property laws. Violations of these terms may result in legal action under both local and international law.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>6. Changes to Terms:</strong><br />
                Trading Society reserves the right to modify these terms and conditions at any time. Continued use of the Content constitutes acceptance of the updated terms.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
                <strong>7. Indemnity:</strong><br />
                Members agree to indemnify and hold harmless Trading Society from any claims, damages, or losses resulting from violations of these terms.
            </Typography>
        </Box>
        <NewFooter />
    </Box>
  );
};

export default MemberTermsAndConditions;
