import { Typography, Box, Paper, Link } from "@mui/material";
import IMAGE from "../assets/myimage.png";

export default function Home() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
        gridTemplateAreas: {
          xs: `"content" "image"`,
          md: `"content image"`,
        },
        gap: { xs: 3, sm: 4, md: 6, lg: 8 },
        alignItems: "start",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        py: { xs: 3, sm: 4, md: 6, lg: 8 },
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
      }}
    >
      {/* CONTENT GRID SECTION */}
      <Box
        sx={{
          gridArea: "content",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
          maxWidth: { xs: "100%", md: 700, lg: 800 },
          width: "100%",
        }}
      >
        {/* HERO SECTION */}
        <Paper
          sx={{
            width: "100%",
            maxWidth: 1000,
            minWidth: 0,
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: "12px", md: "16px" },
            backgroundColor: "background.paper",
            boxShadow: "0 4px 20px rgba(138, 43, 226, 0.1)",
            border: "1px solid rgba(138, 43, 226, 0.2)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              boxShadow: "0 12px 32px rgba(138, 43, 226, 0.2)",
              border: "1px solid rgba(138, 43, 226, 0.4)",
              transform: "translateY(-3px)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "clamp(20px, 5vw, 48px)", sm: "clamp(24px, 5.5vw, 48px)" },
              color: "blueviolet",
              fontWeight: "bold",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Trust me, I'm a software engineer in the making.
          </Typography>

          <Typography 
            sx={{ 
              fontSize: { xs: "clamp(12px, 3vw, 18px)" }, 
              mt: { xs: 1.5, md: 2 },
              color: "text.secondary",
              lineHeight: 1.6,
              letterSpacing: "0.3px",
            }}
          >
            Meet Vineet Melavanki, a B.Tech Computer Science student and MERN
            stack developer focused on scalable applications.
          </Typography>
        </Paper>

        {/* EDUCATION & CONTACT GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
            width: "100%",
          }}
        >
          {/* EDUCATION CARD */}
          <Paper
            sx={{
              width: "100%",
              minWidth: 0,
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: "12px", md: "16px" },
              backgroundColor: "background.paper",
              boxShadow: "0 4px 20px rgba(138, 43, 226, 0.1)",
              border: "1px solid rgba(138, 43, 226, 0.2)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                boxShadow: "0 12px 32px rgba(138, 43, 226, 0.2)",
                border: "1px solid rgba(138, 43, 226, 0.4)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <Typography 
              sx={{ 
                fontSize: { xs: "clamp(14px, 4vw, 20px)" }, 
                fontWeight: "bold", 
                color: "blueviolet",
                lineHeight: 1.4,
                letterSpacing: "0.3px",
              }}
            >
              Education
            </Typography>

            <Typography 
              sx={{ 
                fontSize: { xs: "clamp(12px, 3vw, 16px)" },
                mt: { xs: 1, md: 1.5 },
                color: "text.secondary",
                lineHeight: 1.6,
                letterSpacing: "0.3px",
              }}
            >
              🎓 B.Tech CSE — Pimpri Chinchwad University
            </Typography>
          </Paper>

          {/* CONTACT CARD */}
          <Paper
            sx={{
              width: "100%",
              minWidth: 0,
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: "12px", md: "16px" },
              backgroundColor: "background.paper",
              boxShadow: "0 4px 20px rgba(138, 43, 226, 0.1)",
              border: "1px solid rgba(138, 43, 226, 0.2)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                boxShadow: "0 12px 32px rgba(138, 43, 226, 0.2)",
                border: "1px solid rgba(138, 43, 226, 0.4)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <Typography 
              sx={{ 
                fontSize: { xs: "clamp(14px, 4vw, 20px)" }, 
                fontWeight: "bold", 
                color: "blueviolet",
                lineHeight: 1.4,
                letterSpacing: "0.3px",
              }}
            >
              Contact
            </Typography>

            <Typography 
              sx={{ 
                fontSize: { xs: "clamp(12px, 3vw, 16px)" },
                mt: { xs: 1, md: 1.5 },
                color: "text.secondary",
                lineHeight: 1.6,
                letterSpacing: "0.3px",
              }}
            >
              📞 +91 7820905944
            </Typography>

            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vineetmelavanki06@gmail.com"
              target="_blank"
              sx={{ 
                fontSize: { xs: "clamp(12px, 3vw, 16px)" },
                mt: { xs: 0.5, md: 1 },
                display: "block",
                color: "blueviolet",
                textDecoration: "none",
                lineHeight: 1.6,
                letterSpacing: "0.3px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  textDecoration: "underline",
                  color: "rgb(138, 43, 226)",
                },
              }}
            >
              📧 Email Me
            </Link>
          </Paper>
        </Box>
      </Box>

      {/* IMAGE SECTION */}
      <Box
        sx={{
          gridArea: "image",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: { xs: "100%", md: "none" },
        }}
      >
        <Box
          component="img"
          src={IMAGE}
          alt="Profile"
          sx={{
            width: { xs: "clamp(140px, 45vw, 220px)", md: "clamp(220px, 20vw, 340px)" },
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0 20px 60px rgba(138, 43, 226, 0.25)",
            border: "4px solid rgba(138, 43, 226, 0.8)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            objectFit: "cover",
            aspectRatio: "1/1",
            "&:hover": {
              transform: "scale(1.08) translateY(-8px)",
              boxShadow: "0 30px 80px rgba(138, 43, 226, 0.35)",
              border: "4px solid blueviolet",
            },
          }}
        />
      </Box>
    </Box>
  );
}
