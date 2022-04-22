import Business from "../components/business";
import ChoosePlan from "../components/choosePlan";
import CompleteSetup from "../components/completeSetup";
import ContactInfo from "../components/contactInfo";
import LoyalitySchema from "../components/loyalitySchema";

export const tabComponents = [
  {
    component: <ContactInfo />,
  },
  {
    component: <ChoosePlan />,
  },
  {
    component: <Business />,
  },
  {
    component: <LoyalitySchema />,
  },
  {
    component: <CompleteSetup />,
  },
];
