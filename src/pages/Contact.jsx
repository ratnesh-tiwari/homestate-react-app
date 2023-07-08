import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "../components/Error";
import Container from "@mui/material/Container";
import { useContacts } from "../features/contact/contactsSlice";
import ContactCard from "../features/contact/ContactCard";
import { Grid } from "@mui/material";

function Contact() {
  const contactList = useContacts();

  return (
    <>
      <Navbar />
      <Container sx={{ marginY: "42px" }}>
        <Grid container>
          {contactList.length === 0 ? (
            <Error content="Unable to find any saved contacts." />
          ) : (
            contactList.map(el => <ContactCard key={el.id} owner={el} />)
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
