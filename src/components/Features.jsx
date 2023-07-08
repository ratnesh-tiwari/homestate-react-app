import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "../utils/motion";
import Grid from "@mui/material/Grid";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container component="section" aria-label="features">
        <Box my={{ xs: 6, sm: 10, md: 14 }}>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <Typography
              textAlign="center"
              variant="h2"
              color="primary.light"
              fontWeight="500"
              mb={{ xs: 4, sm: 2 }}
            >
              {`Why We're the Best`}
            </Typography>
          </motion.div>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FeatureCard
                image={data.at(0).image}
                title={data.at(0).title}
                content={data.at(0).content}
                index={0}
                mt={{ sm: 0 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mt={{ sm: 9 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FeatureCard
                image={data.at(1).image}
                title={data.at(1).title}
                content={data.at(1).content}
                index={1}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mt={{ sm: -9, md: 18 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FeatureCard
                image={data.at(2).image}
                title={data.at(2).title}
                content={data.at(2).content}
                index={2}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mt={{ sm: 1, md: -18 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FeatureCard
                image={data.at(3).image}
                title={data.at(3).title}
                content={data.at(3).content}
                index={3}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mt={{ sm: -5, md: -7 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FeatureCard
                image={data.at(4).image}
                title={data.at(4).title}
                content={data.at(4).content}
                index={4}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mt={{ sm: 1, md: 0 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FeatureCard
                image={data.at(5).image}
                title={data.at(5).title}
                content={data.at(5).content}
                index={5}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Features;

const data = [
  {
    title: "Endless Choices to Suit Your Preferences",
    content:
      "Our extensive selection of properties ensures that you'll find the perfect home that matches your unique preferences, whether you're seeking a cozy apartment, a spacious family house, or a luxury villa.",
    image: "./features/wide_range.jpg"
  },
  {
    title: "Comprehensive Insights for Informed Decisions",
    content:
      "Get detailed information about each property, including floor plans, amenities, nearby facilities, and neighborhood insights, empowering you to make informed decisions and choose the right property that meets your requirements.",
    image: "./features/detailed.jpg"
  },
  {
    title: "Guidance Every Step of the Way",
    content:
      "Our experienced team of real estate experts is ready to assist you throughout the process, offering guidance, answering your queries, and providing valuable insights, ensuring a smooth and stress-free experience from start to finish.",
    image: "./features/expert.jpg"
  },
  {
    title: "Visualize Your Future Home",
    content:
      "Experience the essence of each property with stunning visuals, including high-resolution images, virtual tours, and 3D floor plans, allowing you to virtually walk through the property and envision your future home.",
    image: "./features/future.jpg"
  },
  {
    title: "Find Your Dream Home with Ease",
    content:
      "Our advanced search filters enable you to narrow down your options based on location, price range, property type, number of bedrooms, and more, making it effortless to find your dream home within your desired parameters.",
    image: "./features/search.jpg"
  },
  {
    title: "Seamless Viewing Experience",
    content:
      "Schedule property viewings with ease using our convenient appointment scheduling system, ensuring that you can explore the properties at your preferred date and time, providing a seamless and hassle-free experience.",
    image: "./features/appointment.jpg"
  }
];
