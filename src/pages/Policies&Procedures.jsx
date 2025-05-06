import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from "@/Components/Home/Navbar";
import NewFooter from "../Components/Home/NewFooter";

const PoliciesAndProcedures = () => {
  return (
    <Box>
        <Navbar/>
        <Box sx={{ padding: 2, mt: "15%" }}>
            <Typography variant="h5" gutterBottom>
                Policies & Procedures
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>1. Compliance with Laws and Regulations:</strong><br />
                We comply with all local, national, and international laws and regulations that apply to our operations. Members are expected to adhere to these laws when using Trading Society’s services and content. Any violations of the laws may result in immediate termination of membership and legal actions.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>2. Code of Conduct:</strong><br />
                Members are expected to behave professionally and ethically at all times. We have a zero-tolerance policy for any form of harassment, discrimination, or disruptive behavior. All members must respect the rights of others and ensure their actions contribute to a positive learning environment.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>3. Confidentiality and Data Protection:</strong><br />
                We take privacy and data protection seriously. All member information, including personal data and account details, will be treated with the utmost confidentiality. We comply with data protection laws to ensure your information is secure and protected.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>4. Content Usage and Distribution:</strong><br />
                The content provided by Trading Society is the exclusive property of the organization and is protected under intellectual property laws. Members are granted access to this content for personal, non-commercial use only. Unauthorized sharing, reproduction, or selling of the content is strictly prohibited and will result in legal action.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>5. Account Security:</strong><br />
                Members are responsible for maintaining the security of their accounts, including safeguarding login details, passwords, and any other personal information associated with their accounts. Sharing login credentials with third parties is prohibited, and members must notify Trading Society immediately if they suspect any unauthorized access.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>6. Dispute Resolution:</strong><br />
                In the event of any dispute or disagreement between members and Trading Society regarding these policies and procedures, the Economic Courts in **[country or city]** shall have exclusive jurisdiction to resolve the dispute. Members agree that no other court shall have jurisdiction, and the dispute will be resolved in accordance with the applicable laws of **[country or city]**.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>7. Modifications to Policies and Procedures:</strong><br />
                Trading Society reserves the right to modify, update, or review these policies and procedures at any time. Any changes will take effect immediately upon publication. Members are encouraged to review these policies regularly to stay informed about any updates.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>8. Member Responsibilities:</strong><br />
                Members are expected to actively participate in courses, follow the guidelines provided, and adhere to the terms and conditions outlined in this document. By joining Trading Society, members agree to comply with all policies and procedures, ensuring a productive and respectful environment for all members.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>9. No Fund Handling for Employment Purposes:</strong><br />
                Trading Society does not, under any circumstances, request or accept money from any individual for the purpose of employment or investment. Anyone who claims or promotes such practices is considered fraudulent. All financial transactions made outside of Trading Society’s official channels are the sole responsibility of the member, and Trading Society assumes no legal or financial liability for involvement in such activities.
            </Typography>
        </Box>
        <NewFooter/>
    </Box>
  );
};

export default PoliciesAndProcedures;
