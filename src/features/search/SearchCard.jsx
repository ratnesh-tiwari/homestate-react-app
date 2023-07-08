import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";
import IconButtonEl from "../../components/IconButtonEl";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(1)
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: "#777777"
}));

function SearchCard({ title, price, location, description, image_url, id }) {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
      <IconButtonEl
        data={{ title, price, location, description, image_url, id }}
      />
      <StyledCard>
        <CardMedia component="img" height="224" src={`${image_url}`} />
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={1}
          >
            <Box color="text.secondary" display="flex" alignItems="center">
              <LocationOnOutlinedIcon fontSize="small" />
              <Typography variant="body" color="text.secondary">
                {location}
              </Typography>
            </Box>
            <Typography variant="h3" color="primary">
              {price}
            </Typography>
          </Box>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Button
            onClick={() => navigate(`/details/${id}`)}
            variant="contained"
            color="accent"
            sx={{ marginTop: "16px" }}
          >
            View Details
          </Button>
        </CardContent>
      </StyledCard>
    </Grid>
  );
}

export default SearchCard;
