// src/app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - 1XStreamers",
  description: "Get in touch with 1XStreamers team",
};

export default function ContactPage() {
  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg">
              Have a question? We'd love to hear from you.
            </p>
          </div>

          <ContactForm />

<div className="mt-16 text-center text-gray-400">
  <p>
    Or email us directly at:{" "}
    <a
      href="mailto:shairaterraza@payland.info "
      className="text-primary underline"
    >
      ShairaTerraza@payland.info 
    </a>
  </p>
</div>

        </div>
      </main>
    </section>
  );
}