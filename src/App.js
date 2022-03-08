import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
export const MainContentContext = React.createContext();

export default function App() {
  const [mainContent, setMainContent] = useState("planned");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.history.replaceState(null, "", mainContent);
  });

  return (
    <div className="App">
      <MainContentContext.Provider value={[mainContent, setMainContent]}>
        <Header />
        <Aside setCategories={setCategories} categories={categories} />
        <Main setCategories={setCategories} categories={categories} />
      </MainContentContext.Provider>
    </div>
  );
}
