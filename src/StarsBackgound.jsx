import { Box, useTheme } from "@mui/material";

export default function StarsBackground() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,

        "&::before, &::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
            radial-gradient(1.5px 1.5px at 40px 70px, #ffffff, transparent),
            radial-gradient(2px 2px at 130px 80px, #ffffff, transparent),
            radial-gradient(1.5px 1.5px at 160px 120px, #ffffff, transparent),
            radial-gradient(2px 2px at 200px 200px, #ffffff, transparent),
            radial-gradient(1.5px 1.5px at 250px 150px, #ffffff, transparent),
            radial-gradient(2px 2px at 300px 100px, #ffffff, transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          opacity: 0.8,
          animation: "starsMove 100s linear infinite",
        },

        "&::after": {
          opacity: 0.5,
          animationDuration: "160s",
          filter: "blur(0.5px)",
        },

        "@keyframes starsMove": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-400px)" },
        },
      }}
    />
  );
}
