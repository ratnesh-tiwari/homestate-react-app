import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import data from "../../data/data.json";
import { useNavigate, useParams } from "react-router-dom";

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Error from "../../components/Error";
import { findProperty } from "../../utils/helper";
import IconButtonEl from "../../components/IconButtonEl";
import ContactAdd from "./ContactAdd";

function Property() {
  const { id } = useParams();
  const navigate = useNavigate();

  const details = findProperty(data, id);

  const savePropery = {
    title: details?.title,
    price: details?.price,
    location: details?.location,
    description: details?.description,
    image_url: details?.image_url,
    id: details?.property_id
  };

  return (
    <Container
      sx={{ marginY: "3.2rem" }}
      component="section"
      role="property details"
    >
      {details ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
            <IconButtonEl data={savePropery} />
            <Box
              component="img"
              src={`${details.image_url}`}
              alt="logo"
              maxWidth="100%"
              borderRadius={2}
            />
            <Stack
              flexDirection="row"
              alignItems="center"
              mt={2}
              justifyContent="space-between"
            >
              <Button onClick={() => navigate(-1)} variant="outlined">
                Go Back
              </Button>

              <Stack
                flexDirection="row"
                gap={0.5}
                color="text.secondary"
                alignItems="center"
              >
                <span>4.1</span> <StarOutlinedIcon color="accent" />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" mb={1}>
              {details.title}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box color="text.secondary" display="flex" alignItems="center">
                <LocationOnOutlinedIcon fontSize="small" />
                <Typography variant="body" color="text.secondary">
                  {details.location}
                </Typography>
              </Box>
              <Typography variant="h3" color="primary">
                {details.price}
              </Typography>
            </Box>
            <Typography variant="body">{details.description}</Typography>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              mt={1}
              fontSize="16px"
            >
              <Typography variant="body" color="primary">
                <Box component="span" color="text.secondary">
                  Bothrooms:
                </Box>{" "}
                {details.bathrooms}
              </Typography>
              <Typography variant="body" color="primary">
                <Box component="span" color="text.secondary">
                  Bedrooms:
                </Box>{" "}
                {details.bedrooms}
              </Typography>
            </Stack>
            <Typography variant="h3" fontSize="20px" mt={2} mb={1.5}>
              Owner information
            </Typography>
            <Stack gap={1}>
              <Box component="p">
                <Box component="span">Name:</Box> {details.owner.name}
              </Box>
              <Box
                sx={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href={`tel:${details.owner.phone}`}
              >
                <Box component="span">Phone No:</Box> {details.owner.phone}
              </Box>
              <Box
                sx={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href={`mailto:${details.owner.email}`}
              >
                <Box component="span">Email:</Box> {details.owner.email}
              </Box>
            </Stack>
            <ContactAdd owner={{ ...details.owner, id: details.property_id }} />
          </Grid>
        </Grid>
      ) : (
        <Error />
      )}
    </Container>
  );
}

export default Property;
