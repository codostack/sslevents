import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import FloatingWhatsApp from "../Components/FloatingWhatsApp";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default MainLayout;