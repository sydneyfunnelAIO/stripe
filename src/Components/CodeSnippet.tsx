import { CCol, CRow } from "@coreui/react";
import React from "react";

export default function CodeSnippet(props: { code: string; title: string }) {
  let { code, title } = props;
  let codeArray = code.split("\n");
  return (
    <CCol className="my-5" md={10}>
      <CRow className="d-flex ">
        <span
          style={{
            backgroundColor: "#4f566b",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: "#a3acb9",
            fontSize: ".8rem",
          }}
          className="p-2 d-flex justify-content-between"
        >
          {title}
          <span
            style={{
              color: "white",
              backgroundColor: "#a3acb9",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            className="px-3"
          >
            Copy
          </span>
        </span>
      </CRow>
      <CRow>
        <span
          className="p-2"
          style={{
            color: "#a3acb9",
            backgroundColor: "#3c4257",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          {codeArray.map((item: string, index: number) => (
            <div>
              {codeArray.length - 1 === 0 ? (
                <span> {item} </span>
              ) : (
                <>
                  <span className="p-3" style={{ color: "#697386" }}>
                    {index}
                  </span>
                  {item}
                </>
              )}
            </div>
          ))}
        </span>
      </CRow>
    </CCol>
  );
}
