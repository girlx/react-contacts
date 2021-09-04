import React, { useState } from "react";
import { useContacts } from "../../contexts/ContactContext";

const ContactCreateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const { addContact } = useContacts();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addContact({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      profilePic,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <img src={profilePic} alt="Profile preview." />
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profile Picture Url"
            name="profilePic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Contact</button>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;