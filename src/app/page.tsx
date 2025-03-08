import Chatbot from "../app/components/Chatbot";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Navbar/>
      <Chatbot />
      <Footer/>
    </div>
  );
}
