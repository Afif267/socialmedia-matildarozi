"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Item from "./Item";
import { BoxData } from "../interface/boxdata";
import { data } from "./Item.data";
import { useEffect, useState } from "react";
// import RamadanKareem from "./RamadanKareem";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      // Refresh the page on scheme change
      window.location.reload();
    };

    // Initial check
    setIsDarkMode(matchMedia.matches);

    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return isDarkMode;
};

const Hero: React.FC = () => {
  const isDarkMode = useDarkMode();
  const imageSrc = isDarkMode
    ? "../imagesdark/Mainlogo.png"
    : "../images/logo.png";
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "80%",
          maxWidth: "300px",
          marginBottom: "20px",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.1)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
        src={imageSrc}
        alt="main logo"
      />
      <Typography
        variant="h4"
        color={isDarkMode ? "white" : "black"}
        sx={{ marginBottom: "10px" }}
      >
        <DarkModeIcon />
        Ramadan Kareem
        <DarkModeIcon />
      </Typography>
      <Typography
        variant="body1"
        color={isDarkMode ? "white" : "black"}
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        {`Visit us on social media`}
      </Typography>

      {data.map((item: BoxData) => (
        <Item key={item.id} data={item} />
      ))}

      {/* <RamadanKareem /> */}
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Typography
          variant="body2"
          color={isDarkMode ? "white" : "black"}
          sx={{ textAlign: "center" }}
        >
          Copyright © 2024 A.Isamil
        </Typography>
      </Box>
    </Container>
  );
};

export default Hero;
