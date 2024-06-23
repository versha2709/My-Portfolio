/* eslint-disable react/prop-types */

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Skills = ({ skills }) => (
  <Box id="skills" sx={{ bgcolor: "background.default", py: 8 }}>
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        SKILLS
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3} key={skill.name}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6">{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Skills;
