import React from "react";
import Header from "./components/layout/AppHeader";
import AppContent from "./components/layout/AppContent";
import "./App.css";
import AppSidebar from "./components/layout/AppSidebar";
import { TogglerProvider } from "./context/TogglerContext";

function App() {
  return (
    <main className="app">
      <TogglerProvider>
        <AppSidebar />
        <Header />
        <AppContent />
      </TogglerProvider>
    </main>
  );
}

export default App;
