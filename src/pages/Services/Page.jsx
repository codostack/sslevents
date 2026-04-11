import React from "react";
import { useLocation } from "react-router-dom";

import Serviceheader from "./Components/Serviceheader";
import Servicescontent from "./Components/Servicescontent";
import Servicecontent from "./Components/Servicecontent";
import Serviceanimation from "./Serviceanimation";

const Page = () => {
  const location = useLocation();
  const selectedService = location.state?.service;

  return (
    <div>
      <Serviceheader />
      <Servicecontent />
      <Serviceanimation />

      {/* ✅ pass selected service */}
      <Servicescontent selectedService={selectedService} />
    </div>
  );
};

export default Page;