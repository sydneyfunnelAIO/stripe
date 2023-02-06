import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./View/Home";
import Navigator from "./Components/Navigator";
import { Row } from "antd";
import { CCol } from "@coreui/react";

function App() {
  return (
    <div className="App">
      <Row>
        <CCol style={{ borderRight: "  #a3acb9 1px solid " }} md={2}>
          <Navigator />
        </CCol>
        <CCol>
          <Home />
        </CCol>
      </Row>
    </div>
  );
}

export default App;
