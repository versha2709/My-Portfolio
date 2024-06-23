/* eslint-disable react/prop-types */

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Education = ({ education }) => (
  <Box id="education" sx={{ bgcolor: "background.default", py: 8 }}>
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        EDUCATION
      </Typography>
      {education.map((edu) => (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }} key={edu.degree}>
          <Typography variant="h5">{edu.degree}</Typography>
          <Typography variant="h6">{edu.school}</Typography>
          <Typography variant="subtitle1" gutterBottom>
            <i>{edu.date}</i>
          </Typography>
          <Typography variant="body1">Grade: {edu.grade}</Typography>
        </Paper>
      ))}
    </Container>
  </Box>
);

export default Education;
