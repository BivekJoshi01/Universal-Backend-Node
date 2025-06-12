import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import CompanyLogo from "../assets/company-logo.png";
import { useNavigate } from "react-router";

const Unauthorized401Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f8f9fa"
      textAlign="center"
      px={2}
    >
      <Box mb={4}>
        <img
          // src={CompanyLogo}
          alt="Company Logo"
          style={{ maxWidth: "180px", height: "auto" }}
        />
      </Box>

      <Typography variant="h3" fontWeight="bold" gutterBottom color="error">
        401 - Unauthorized
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" mb={4}>
        You do not have permission to access this page.
      </Typography>

      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go to Homepage
      </Button>
    </Box>
  );
};

export default Unauthorized401Page;
