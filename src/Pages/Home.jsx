import { Typography, Box, Paper, Link } from "@mui/material";
import IMAGE from "../assets/myimage.png";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, sm: 4, md: 5, lg: 6 },
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        width: "100%",
        minHeight: "100vh",
        py: { xs: 3, sm: 4, md: 6, lg: 8 },
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
      }}
    >
      {/* CONTENT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 2.5, md: 3, lg: 4 },
          flex: 1,
          width: { xs: "100%", md: "auto" },
          maxWidth: { xs: "100%", md: 700, lg: 800 },
        }}
      >
        {/* HERO SECTION */}
        <Paper
          sx={{
            width: "100%",
            p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
            borderRadius: { xs: 1, md: 2 },
            boxShadow: { xs: 1, md: 3 },
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: { xs: 2, md: 4 },
              transform: "translateY(-2px)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "clamp(18px, 5vw, 48px)", md: 45 },
              color: "blueviolet",
              fontWeight: "bold",
              lineHeight: { xs: 1.3, md: 1.4 },
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Trust me, I’m a software engineer in the making.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "clamp(13px, 3vw, 18px)", md: 18 },
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            Meet Vineet Melavanki, a B.Tech Computer Science student and MERN
            stack developer focused on scalable applications.
          </Typography>
        </Paper>

        {/* EDUCATION SECTION */}
        <Paper
          sx={{
            width: "100%",
            p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
            borderRadius: { xs: 1, md: 2 },
            boxShadow: { xs: 1, md: 3 },
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: { xs: 2, md: 4 },
              transform: "translateY(-2px)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "clamp(15px, 4vw, 20px)", md: 20 },
              fontWeight: "bold",
              color: "blueviolet",
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Education
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "clamp(12px, 3vw, 16px)", md: 16 },
              lineHeight: 1.6,
            }}
          >
            🎓 B.Tech CSE — Pimpri Chinchwad University
          </Typography>
        </Paper>

        {/* CONTACT SECTION */}
        <Paper
          sx={{
            width: "100%",
            p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
            borderRadius: { xs: 1, md: 2 },
            boxShadow: { xs: 1, md: 3 },
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: { xs: 2, md: 4 },
              transform: "translateY(-2px)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "clamp(15px, 4vw, 20px)", md: 20 },
              fontWeight: "bold",
              color: "blueviolet",
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Contact
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "clamp(12px, 3vw, 16px)", md: 16 },
                lineHeight: 1.6,
              }}
            >
              📞 +91 7820905944
            </Typography>

            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vineetmelavanki06@gmail.com"
              target="_blank"
              sx={{
                fontSize: { xs: "clamp(12px, 3vw, 16px)", md: 16 },
                lineHeight: 1.6,
                color: "blueviolet",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.2s ease",
                "&:hover": {
                  textDecoration: "underline",
                  transform: "translateX(4px)",
                },
              }}
            >
              📧 Email Me
            </Link>
          </Box>
        </Paper>
      </Box>

      {/* IMAGE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "auto" },
          minWidth: { xs: 0, md: 250 },
          flex: { xs: 0, md: "0 1 auto" },
        }}
      >
        <Box
          component="img"
          src={IMAGE}
          alt="Profile"
          sx={{
            width: { xs: "clamp(120px, 40vw, 200px)", md: "clamp(200px, 25vw, 320px)" },
            height: "auto",
            borderRadius: "50%",
            boxShadow: { xs: 2, md: 4 },
            border: "3px solid blueviolet",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: { xs: 3, md: 6 },
            },
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
