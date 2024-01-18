import React from "react";
import { Grid, Box, Container } from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCommentSms,
} from "@fortawesome/free-solid-svg-icons";
import * as Form from "@radix-ui/react-form";
import ServicesMenu from "./ServicesMenu";
import ReviewsCarousel from "./ReviewsCarousel";

import emailjs from "emailjs-com";
import { useState } from "react";
import { ServiceContext } from "../utils/ServiceContext";
import DialogSheet from "./DialogSheet";

const ContactPage = () => {
  emailjs.init("vQQH70qDYKpC1O0tc");
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cqh32ue",
        "template_mdoont9",
        e.target,
        "vQQH70qDYKpC1O0tc"
      )
      .then(
        () => {
          setLoading(false);
          setDialogTitle("Your information has been sent");
          setDialogDescription("We will be getting back to you soon.");
          setDialogOpen(true);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setDialogTitle("There was a problem sending your information");
          setDialogDescription("We apologize for the inconvenience.");
          setDialogOpen(true);
        }
      );
  }
  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-9 mt-8">
        <div className="cols-1"></div>
        <Box
          className="col-span-2 pt-5 justify-center justify-self-center"
          style={{
            flex: "2",
            padding: "20px",
            width: "85%",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            className="flex justify-center"
            style={{ fontSize: "2rem", marginBottom: "10px" }}
          >
            Let's get that dream job started today!
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
            LGC LLC is ready to tackle any challenge promptly and with utmost
            professionalism. Our team of experts is dedicated to maintaining
            high professional standards, providing personalized service, and
            ensuring exceptional customer satisfaction. We are committed to
            delivering projects that will leave a lasting impression for years
            to come. When you reach out to us, you can expect nothing less than
            outstanding results.
          </p>

          <div className="flex-col mb-3 mt-6">
            <div className="flex items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:360-356-6008">(360) 356-6008</a>
            </div>

            <div className="flex items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:example@email.com">example@email.com</a>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon icon={faCommentSms} className="mr-2" />
              <a href="sms:555-555-5555">Text us</a>
            </div>
          </div>
        </Box>

        <Box
          className="col-span-2 pt-5 flex justify-center justify-self-center"
          style={{
            flex: "1",
            width: "85%",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form.Root onSubmit={sendEmail}>
            <h1 className="text-2xl mb-4 text-center text-gray-700">
              Let's Get Started!
            </h1>

            <div className="md:grid grid-cols-2">
              <Form.Field
                name="name"
                className="form-field flex justify-center"
              >
                <>
                  <Form.Control asChild>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>

              <Form.Field
                name="number"
                className="form-field flex justify-center"
              >
                <>
                  <Form.Control asChild>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>
            </div>

            <div className="md:grid grid-cols-2">
              <Form.Field
                name="email"
                className="form-field flex justify-center "
              >
                <Form.Message
                  className="FormMessage text-sm"
                  match="valueMissing"
                >
                  Please enter your email
                </Form.Message>
                <Form.Message
                  className="FormMessage text-sm text-red-500"
                  match="typeMismatch"
                >
                  Provide valid email
                </Form.Message>
                <>
                  <Form.Control asChild>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>

              <Form.Field
                name="address"
                className="form-field flex justify-center"
              >
                <>
                  <Form.Control asChild>
                    <input
                      type="text"
                      placeholder="Street Address"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>
            </div>

            <div className="md:grid grid-cols-2">
              <Form.Field
                name="city"
                className="form-field flex justify-center"
              >
                <>
                  <Form.Control asChild>
                    <input
                      type="text"
                      placeholder="City"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>

              <Form.Field
                name="state"
                className="form-field flex justify-center"
              >
                <>
                  <Form.Control asChild>
                    <input
                      type="text"
                      placeholder="State"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>
            </div>

            <div className="md:grid grid-cols-2">
              <Form.Field name="zip" className="form-field flex justify-center">
                <>
                  <Form.Control asChild>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      required
                      className="form-input"
                    />
                  </Form.Control>
                </>
              </Form.Field>

              <div className="rounded-md h-9 pl-3 w-85 flex justify-center">
                <ServicesMenu />
                <input type="hidden" name="service" value={selectedService} />
              </div>
            </div>

            <Form.Field
              name="message"
              className="form-field flex justify-center mt-6 md:mt-1"
            >
              <>
                <Form.Control asChild>
                  <textarea
                    placeholder="Message"
                    required
                    className="message-input"
                  />
                </Form.Control>
              </>
            </Form.Field>

            <Form.Submit asChild>
              <button className="bg-slate-500 text-white py-2 px-4 rounded-md cursor-pointer text-base hover:bg-slate-700">
                {loading ? "Sending..." : "GET IN TOUCH"}
              </button>
            </Form.Submit>
          </Form.Root>
        </Box>
      </div>

      <div className="bg-gray-300 grid grid-cols-1 md:grid-cols-8 gap-9 mt-8 pt-8 pb-10 items-center">
        <div className="col-span-1"></div>
        <Box className="col-span-2 mx-auto md:w-1/2 md:h-1/2 flex flex-col justify-center p-4 rounded-full">
          <h4 className="text-slate-600 text-sm items-start pb-3">
            TESTIMONIALS
          </h4>
          <h1 className="text-slate-700 text-3xl">
            Don't believe it? Take a look at our{" "}
            <span className="text-amber-500">5-Star</span> reviews
          </h1>
        </Box>
        <Box className="col-span-5 w-4/5 justify-center mx-auto">
          <ReviewsCarousel />
        </Box>
      </div>
      {dialogOpen && (
        <DialogSheet
          title={dialogTitle}
          description={dialogDescription}
          onClose={() => setDialogOpen(false)}
        />
      )}
    </ServiceContext.Provider>
  );
};

export default ContactPage;
