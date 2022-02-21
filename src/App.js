import React, { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function App() {
  const [mainContent, setMainContent] = useState("editor");
  return (
    <div className="App">
      <Header setMainContent={setMainContent} />
      <Aside setMainContent={setMainContent} mainContent={mainContent} />
      <Main setMainContent={setMainContent} mainContent={mainContent} />
    </div>
  );
}
