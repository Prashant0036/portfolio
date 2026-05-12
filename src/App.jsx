import React from "react";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certification from "./components/Certifications/Certifications";
import Research from "./components/Research/Research";
import Gallery from "./components/Gallery/Gallery";
import ChatBot from "./components/ChatBot/chatBot"

const App = () => {
  return (
    <div>

     
    <ChatBot></ChatBot>
      <Home></Home>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Certification></Certification>
      <Research></Research>
      <Gallery></Gallery>

    </div>
  );
}

export default App;
