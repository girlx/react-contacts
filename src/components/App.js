import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { ContactProvider } from "../contexts/ContactContext";

const App = () => {
  return (
    <div>
      <ContactProvider>
        <LoginPage />
        <RegisterPage />
        <ContactsPage />
        <ContactDetailsPage index={0} />
        <ContactCreatePage />
      </ContactProvider>
    </div>
  );
};

export default App;