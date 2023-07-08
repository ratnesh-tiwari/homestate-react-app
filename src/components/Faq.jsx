import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Faq() {
  const [expanded, setExpanded] = useState("");
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
  };

  return (
    <Container
      sx={{ marginBottom: "4.2rem" }}
      maxWidth="md"
      component="section"
    >
      <Typography variant="h2" mb={3} color="primary">
        Frequently Asked Questions
      </Typography>
      <Box display="flex" flexDirection="column" gap={1}>
        {data.map(item => (
          <AccordianItem
            isExpanded={expanded}
            onChange={handleChange}
            name={item.question}
            content={item.answer}
            key={item.question}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Faq;

const AccordianItem = ({ isExpanded, onChange, name, content }) => {
  return (
    <Accordion expanded={isExpanded === name} onChange={onChange(name)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const data = [
  {
    question: "How can I search for properties on your platform?",
    answer:
      "To search for properties, simply use the search bar on the homepage and enter your desired location, property type, or any other relevant criteria. You can also utilize advanced search filters to refine your search further."
  },
  {
    question: "How frequently are the property listings updated?",
    answer:
      "Our property listings are regularly updated to ensure you have access to the most current information. We strive to provide accurate and up-to-date listings, removing properties that are no longer available and adding new listings as they become available."
  },
  {
    question: "Can I save my favorite properties for future reference?",
    answer:
      "Absolutely! You can create an account on our platform and save properties to your favorites list. This way, you can easily access and compare your preferred properties at any time, helping you make informed decisions."
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "Once you've identified a property you're interested in, simply click on the property listing to view more details. There, you'll find an option to schedule a viewing. Fill out the provided form with your preferred date and time, and our team will get in touch with you to confirm the appointment."
  },
  {
    question:
      "Are there any fees involved in using your platform to find properties?",
    answer:
      "No, our platform is free for users searching for properties. You can browse listings, access property details, and contact the property owners or agents without any fees. However, please note that there may be fees associated with specific services provided by property owners or agents, such as application fees or rental deposits."
  },
  {
    question: "How can I get more information about a property?",
    answer:
      " Each property listing includes comprehensive information such as property features, amenities, photos, and contact details. If you have additional questions or need more information, you can directly reach out to the property owner or agent by using the provided contact information. They will be happy to assist you further."
  }
];
