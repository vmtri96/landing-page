import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
