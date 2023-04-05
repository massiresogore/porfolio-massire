import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import emailjs from "@emailjs/browser";
import css from "./contact.module.scss";
import { ToastContainer, toast } from "react-toastify";

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
          toast.success("Message envoyé avec succès");
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
      <section className={`section ${css.sectionContact}`}>
        <div className={` max__block max_padding ${css.container}`}>
          <h1>Me contacter</h1>

          <p>
            {`N'hésitez pas à m'envoyer un petit message
             😇.`}
          </p>
          <div style={{ position: "relative" }}>
            <ToastContainer position="top-center" className={css.toast} />
          </div>
          <form onSubmit={handleSubmit} className={`${css.form}`}>
            <InputField
              name="fullName"
              handleChange={handleChange}
              value={values.fullName}
              placeholder="Nom & prénom"
              type="text"
            />
            <InputField
              name="email"
              handleChange={handleChange}
              value={values.email}
              placeholder="Votre Email"
              type="email"
            />
            <TextareaField
              name="message"
              handleChange={handleChange}
              value={values.message}
              placeholder="Votre message"
            />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </section>
    </div>
  );
}
