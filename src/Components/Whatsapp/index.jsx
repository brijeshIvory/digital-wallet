import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./index.scss";
import WhatsappIcon from "../../assets/img/whatsappIcon.png";

function Whatsapp({ details }) {
  return (
    <article className="contact__option">
      <a
        href={`https://api.whatsapp.com/send?phone=${
          details !== undefined && details["Customer Care Number"]
        }`}
      >
        {/* <BsWhatsapp className="contact__option-icon" /> */}
        <img src={WhatsappIcon} alt="whatsapp" />
      </a>
    </article>
  );
}

export default Whatsapp;
