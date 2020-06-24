import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "./components/layout/AppHeader";
import AppContent from "./components/layout/AppContent";
import "./App.css";
import AppSidebar from "./components/layout/AppSidebar";
import AppMobileSidebar from "./components/layout/AppMobileSidebar";
import { TogglerProvider } from "./context/TogglerContext";

function App() {
  return (
    <main className="app">
      <TogglerProvider>
        <AppMobileSidebar />
        <Row noGutters className="h-100">
          <Col md={2} className="d-none d-md-block">
            <AppSidebar />
          </Col>
          <Col md={10} sm={12}>
            <Header />
            <AppContent />
          </Col>
        </Row>
      </TogglerProvider>
    </main>
  );
}

export default App;
