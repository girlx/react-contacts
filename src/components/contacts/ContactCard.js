import styled from "styled-components";
import { useContacts } from "../../contexts/ContactContext";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 700px;
  padding-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);
  background-color: white;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ContactAvatarWrapper = styled.div`
  padding: 0 20px;
  border-right: 1px solid lightgray;
`;

const ContactAvatar = styled.img`
  display: inline-block;
  width: 125px;
  height: 125px;
  border-radius: 50%;
`;

const CardBody = styled.div`
  padding: 0 20px;
  flex-grow: 1;
`;

const ContactCard = ({
  id,
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  const { deleteContact } = useContacts();

  return (
    <CardWrapper>
      <ContactAvatarWrapper>
        <ContactAvatar
          src={profilePic}
          alt={`Profile of ${firstName} ${lastName}.`}
        />
      </ContactAvatarWrapper>
      <CardBody>
        <p>
          {firstName} {lastName}
        </p>
        <p>{phoneNumber}</p>
      </CardBody>
      <div>
        <button onClick={() => deleteContact(id)}>X</button>
      </div>
    </CardWrapper>
  );
};

export default ContactCard;