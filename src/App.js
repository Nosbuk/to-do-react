import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

export const MainContentContext = React.createContext();
export const CategoriesContentContext = React.createContext();

export default function App() {
  const initialCategories = [
    { name: "Work", icon: "Briefcase" },
    { name: "Private", icon: "Person" },
  ];
  const [mainContent, setMainContent] = useState("planned");
  const [categories, setCategories] = useState(initialCategories);

  useEffect(() => {
    window.history.replaceState(null, "", mainContent);
  });

  return (
    <div className="App">
      <MainContentContext.Provider value={[mainContent, setMainContent]}>
        <Header />
        <CategoriesContentContext.Provider value={[categories, setCategories]}>
          <Aside />
          <Main />
        </CategoriesContentContext.Provider>
      </MainContentContext.Provider>
    </div>
  );
}
