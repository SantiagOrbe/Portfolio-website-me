"use server"

import ContactForm from "@/email/ContactForm";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {

    const message = formData.get('message')
    const senderEmail = formData.get('senderEmail')

    if (!validateString(senderEmail, 200)) {
        return {
          error: "Invalid sender email",
        };
      }
      if (!validateString(message, 5000)) {
        return {
          error: "Invalid message",
        };
      }
    
    let data
    try {
       data = await resend.emails.send({
            from: "Contact form😁 <onboarding@resend.dev>",
            to: "santiago.as.santiago@gmail.com",
            subject: "Message from contact form",
            react: React.createElement(ContactForm, {
              message: message as string,
              senderEmail: senderEmail as string
            })
        });
        } catch(error: unknown) {
        return {
          error: getErrorMessage(error),
        };
    }
    return {
      data,
    }
};