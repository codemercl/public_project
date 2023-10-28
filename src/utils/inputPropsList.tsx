import CardIconSvg from "assets/icons/system-icons/card";
import { LabelComponent } from "common";
import DiscoveryIconSvg from "assets/icons/partner-icons/discovery";
import ExpressIconSvg from "assets/icons/partner-icons/express";
import MasterCardIconSvg from "assets/icons/partner-icons/mastercard";
import VisaIconSvg from "assets/icons/partner-icons/visa";

const inputPropsList = [
  {
    label: <LabelComponent title="Email" name="email" />,
    icon: <CardIconSvg />,
    placeholder: "mailaddress@mail.com",
    name: "email",
    type: "text",
    id: "email"
  },
  {
    label: <LabelComponent title="Card information" name="card" />,
    pic: [
      <DiscoveryIconSvg />,
      <ExpressIconSvg />,
      <MasterCardIconSvg />,
      <VisaIconSvg />,
    ],
    icon: <CardIconSvg />,
    placeholder: "0000 0000 0000 0000",
    name: "card",
    type: "text",
    id: "card"
  },
  {
    icon: <CardIconSvg />,
    placeholder: "MM/YYYY",
    name: "card",
    type: "text",
    id: "date"
  },
  {
    icon: <CardIconSvg />,
    placeholder: "CVV",
    name: "card",
    type: "text",
    id: "cvv"
  },
  {
    label: <LabelComponent title="Name on card" name="card" />,
    icon: <CardIconSvg />,
    placeholder: "Enter cardholder name",
    name: "card",
    type: "text",
    id: "holder"
  },
];

export default inputPropsList;
