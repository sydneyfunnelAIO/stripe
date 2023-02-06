import { CCol, CRow } from "@coreui/react";
import { Col, Row, Space } from "antd";
import React, { useEffect, useRef } from "react";
import CodeSnippet from "../Components/CodeSnippet";
import data from "../data.json";

export default function Home() {
  const titleRef = useRef<HTMLSpanElement>(null);
  let oldHref = window.location.href;

  useEffect(() => {
    //change url when see the title in the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState({}, "", `${id}`);
            document.getElementById(id + "navigator")?.classList.add("active");
          } else {
            const id = entry.target.id;
            document
              .getElementById(id + "navigator")
              ?.classList.remove("active");
          }
        });
      },
      { threshold: 1 }
    );
    data.forEach((item: any) => {
      observer.observe(document.getElementById(item.title) as Element);
    });
  }, []);
  //scroll to the title when write the url in the browser not working
  useEffect(() => {
    const id = window.location.pathname.slice(1);
    if (id) {
      const title = document.getElementById(id + "title");
      // and scroll to title
      title?.scrollIntoView();
    }
  }, []);

  return (
    <CCol>
      <CRow
        className="d-flex justify-content-end mx-5 my-2"
        md={{ cols: 4, gutter: 1 }}
      >
        <CCol md={1} className="blue d-flex flex-column align-items-end">
          API Reference
        </CCol>
        <CCol md={1} className="blue d-flex flex-column align-items-end">
          Docs
        </CCol>
        <CCol md={1} className="blue d-flex flex-column align-items-end">
          Support
        </CCol>
        <CCol md={1} className="blue d-flex flex-column align-items-end">
          Sign In
        </CCol>
      </CRow>
      <CRow>
        {data.map((item: any) => (
          <CRow className="my-5">
            <CCol className="mx-5 my-5">
              <CRow className="m-5">
                <span
                  id={item.title + "title"}
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </span>
              </CRow>
              <CRow className="m-5">
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  id={item.title}
                  style={{
                    color: "#c1c9d2",
                    fontSize: ".9rem",
                    whiteSpace: "pre-line",
                  }}
                ></div>
              </CRow>
            </CCol>
            <CCol className="my-5">
              <CRow>
                <CodeSnippet title={item.requestTitle} code={item.request} />
              </CRow>
              <CRow>
                {item.responseTitle && item.response && (
                  <CodeSnippet
                    title={item.responseTitle}
                    code={item.response}
                  />
                )}
              </CRow>
            </CCol>
          </CRow>
        ))}
      </CRow>
    </CCol>
  );
}
