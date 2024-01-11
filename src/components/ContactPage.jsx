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

const ContactPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-8">
        <Box
          className="col-span-2 pt-5 justify-center justify-self-center"
          style={{
            flex: "2",
            padding: "20px",
            width: "80%",
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

          <div className="flex-col mb-3 justify-items-center">
            <div className="flex items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:555-555-5555">555-555-5555</a>
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
          className="col-span-1 pt-5 flex justify-center justify-self-center"
          style={{
            flex: "1",
            width: "80%",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form.Root>
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "20px",
                textAlign: "center",
                color: "#333",
              }}
            >
              Let's Get Started!
            </h1>

            <Form.Field name="name" className="form-field">
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

            <Form.Field name="number" className="form-field">
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

            <Form.Field name="email" className="form-field">
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

            <Form.Field name="address" className="form-field">
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

            <Form.Field name="city" className="form-field">
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

            <Form.Field name="zip" className="form-field">
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

            <div className="pb-5">
              <ServicesMenu />
            </div>

            <Form.Field name="message" className="form-field">
              <>
                <Form.Control asChild>
                  <textarea
                    placeholder="Message"
                    required
                    className="form-input"
                  />
                </Form.Control>
              </>
            </Form.Field>

            <Form.Submit asChild>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                GET IN TOUCH
              </button>
            </Form.Submit>
          </Form.Root>
        </Box>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-9 mt-8 pt-8 pb-10">
        <Box className="col-span-2 flex flex-col items-center border border-solid border-gray-300 p-4">
          <h4>TESTIMONIALS</h4>
          <h1>Hear what our customers have to say</h1>
        </Box>
        <Box className="col-span-3">
          <ReviewsCarousel />
        </Box>
      </div>
    </>
  );
};

export default ContactPage;
