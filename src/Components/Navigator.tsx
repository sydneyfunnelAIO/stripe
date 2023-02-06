import { CCol, CRow } from "@coreui/react";
import { Link, useLocation } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import data from "../data.json";
export default function Navigator() {
  // console the url when change without uselocatio

  return (
    <CCol md={2} style={{ position: "fixed" }} className="navigator">
      <CRow className="d-flex flex-row logo">
        <img style={{ width: "120px" }} src={logo} />
        API
      </CRow>
      {data.map((item: any) => (
        <CRow className={`d-flex title section `}>
          <a
            id={item.title + "navigator"}
            style={{ color: "#a3acb9", textDecoration: "none" }}
            href={item.title}
          >
            <span>{item.title}</span>
          </a>
        </CRow>
      ))}
    </CCol>
  );
}
