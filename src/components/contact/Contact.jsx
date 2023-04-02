import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import emailjs from "@emailjs/browser";
import css from "./contact.module.scss";

export default function Contact() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setValues((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_ep70kbn", "template_z6tgicl", values, "58zRdzWLFCURz4PAk")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status == "SUCCESS")
      setTimeout(() => {
        setStatus("");
      }, 3000);
  }, [status]);

  return (
    <div>
      {status == "SUCCESS" && <p>Message Envoyé Avec succès</p>}
      <section className={`section ${css.sectionContact}`}>
        <span id="error" style={{ display: "none" }}>
          0
        </span>

        <div className={`${css.contactContainer}`}>
          <h1>Me contacter</h1>
          <form onSubmit={handleSubmit} className={`${css.contact}`}>
            <InputField
              name="fullName"
              handleChange={handleChange}
              value={values.fullName}
              type="text"
            />
            <InputField
              name="email"
              handleChange={handleChange}
              value={values.email}
              type="email"
            />
            <TextareaField
              name="message"
              handleChange={handleChange}
              value={values.message}
            />
            <input type="submit" value="Envoyé" />
          </form>
        </div>
      </section>
    </div>
  );
}
