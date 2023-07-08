import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ContactAdd from "../propertyDetails/ContactAdd";

function ContactCard({ owner }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ padding: "16px" }}>
        <Typography
          variant="h3"
          mb={1}
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <Box>Name: </Box>
          {owner.name}
        </Typography>
        <Box
          mb={0.5}
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <Box>Phone No:</Box>
          {owner.phone}
        </Box>
        <Box
          variant="h3"
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <Box>Email:</Box> {owner.email}
        </Box>
        <Stack>
          <ContactAdd owner={owner} />
        </Stack>
      </Paper>
    </Grid>
  );
}

export default ContactCard;
