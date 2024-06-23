/* eslint-disable react/prop-types */

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Experience = ({ experiences }) => (
  <Box id="experience" sx={{ bgcolor: "background.paper", py: 8 }}>
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        EXPERIENCE
      </Typography>
      {experiences.map((exp) => (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }} key={exp.title}>
          <Typography variant="h5">
            {exp.title} at {exp.company_name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <i>{exp.date}</i>
          </Typography>
          {exp.points.map((point, index) => (
            <Typography variant="body1" paragraph key={index}>
              {point}
            </Typography>
          ))}
        </Paper>
      ))}
    </Container>
  </Box>
);

export default Experience;
