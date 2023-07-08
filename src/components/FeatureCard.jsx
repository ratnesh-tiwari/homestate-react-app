import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

function FeatureCard({ image, title, content, index }) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 198, opacity: "0.75" }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography variant="h3" fontWeight="500" mt={1}>
            {title}
          </Typography>
          <Typography variant="body1" mt={1}>
            {content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;
