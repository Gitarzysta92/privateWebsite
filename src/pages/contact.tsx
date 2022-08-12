import * as React from "react";
import { PageProps } from "gatsby";
import { contactData } from "../data/data";
import DefaultTemplate from "../templates/default-template";
import "./contact.scss";

// markup
const ContactPage = (props: PageProps) => {
  return (
    <DefaultTemplate>
      <section className="container contact-section">
        <div className="row">
          <div className="col-12">
            <span>{contactData.title}</span>
            <i className="fa-solid fa-envelope-open-text"></i>
            <h1>{contactData.email}</h1>
          </div>
        </div>
      </section>
    </DefaultTemplate>
  )
}

export default ContactPage