import { useContacts } from "../../contexts/ContactContext";
import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetailsPage = ({ index }) => {
    const { contacts } = useContacts();
    const contact = contacts[index];

    return (
        <div>
            <ContactDetailsCard contact={contact} />
        </div>
    );
};

export default ContactDetailsPage;