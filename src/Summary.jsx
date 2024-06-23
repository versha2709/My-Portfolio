/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Summary = ({ summary }) => (
  <Box id="summary" sx={{ bgcolor: "background.paper", py: 8 }}>
    <Container maxWidth="sm" textAlign="center">
      <Typography variant="h2" gutterBottom>
        {summary.name}
      </Typography>
      <Typography variant="h5" paragraph>
        {summary.description}
      </Typography>
      <Box>
        {summary.roles.map((role) => (
          <Button variant="contained" color="secondary" sx={{ m: 1 }}>
            {role}
          </Button>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ m: 1 }}
        href={summary.resume}
      >
        Resume
      </Button>
      <Button variant="contained" sx={{ m: 1 }} href={summary.github}>
        GitHub
      </Button>
      <Button
        variant="contained"
        color="info"
        sx={{ m: 1 }}
        href={summary.linkedin}
      >
        LinkedIn
      </Button>
    </Container>
  </Box>
);

export default Summary;
