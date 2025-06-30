"use client";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkingProcess from "@/components/WorkingProcess";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <WorkingProcess />

      <Services />

      <ContactForm />

      <Footer />
    </div>
  );
}
