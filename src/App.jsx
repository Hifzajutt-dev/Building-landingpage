import React from "react";
import Navbar from "./ui/common/Navbar/Navbar";
import Building from "./ui/section/building/building";
import FeatureSection from "./ui/section/Featured/Feature";
import Tools from "./ui/section/Tools/Tools";
import Matters from "./ui/section/matters/matters";
import Storie from "./ui/section/stories/stories";
import Questionnare from "./ui/section/Questionnare/questionnare";
import Services from "./ui/section/Services/services";
import Footer from "./ui/common/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Building />
      <FeatureSection />
      <Tools />
       <Matters /> 
       <Storie /> 
       <Questionnare /> 
      <Services />
      <Footer />
    </>
  );
}

export default App;
