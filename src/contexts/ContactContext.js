import { createContext, useContext, useEffect, useState } from "react";
import * as contactUtils from "../utils/contacts";

const mockContacts = [
  {
    id: 1,
    firstName: "Culley",
    lastName: "Snelman",
    profilePic: "https://i.pravatar.cc/300?u=1",
    phoneNumber: "351-346-6140",
    email: "csnelman0@blog.com",
    address: "09 Eggendart Parkway",
  },
  {
    id: 2,
    firstName: "Tammara",
    lastName: "Allcorn",
    profilePic: "https://i.pravatar.cc/300?u=2",
    phoneNumber: "676-783-9239",
    email: "tallcorn1@senate.gov",
    address: "78145 Brentwood Court",
  },
  {
    id: 3,
    firstName: "Cassandry",
    lastName: "Roze",
    profilePic: "https://i.pravatar.cc/300?u=3",
    phoneNumber: "223-879-6692",
    email: "croze2@w3.org",
    address: "2079 Morrow Parkway",
  },
  {
    id: 4,
    firstName: "Koressa",
    lastName: "Galey",
    profilePic: "https://i.pravatar.cc/300?u=4",
    phoneNumber: "761-858-5580",
    email: "kgaley3@economist.com",
    address: "5 Hanover Alley",
  },
];

export const ContactContext = createContext();
ContactContext.displayName = "ContactContext";

export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = contactUtils.getContacts();
    setContacts(storedContacts.length ? storedContacts : mockContacts);
  }, []);

  const addContact = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    profilePic,
  }) => {
    const newContact = contactUtils.createContact({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      profilePic,
    });

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    contactUtils.deleteContact(id);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};