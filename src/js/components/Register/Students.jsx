import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { Table, Button, Grid } from "rsuite";
// import { Cell, Column, HeaderCell } from "rsuite-table";

const Students = () => {
  const [studentData, setStudentData] = useState([
    {
      //   FirstName: "",
      //   LastName: "",
      //   DateOfBirth: null,
      //   Gender: "",
      //   GuardiansName: "",
      //   LanguageKnown: "",
      //   Courses: [],
      //   Address: "",
    },
  ]);

  function getDataFromSheet() {
    console.log("Fetching Data from sheet");
    console.log(process.env.REACT_APP_SHEET_BEST_URL);
    axios
      .get(process.env.REACT_APP_SHEET_BEST_URL)
      .then((StudentData) => {
        console.log("Student Data after fetch");
        console.log(StudentData.data);
        // console.log(StudentData.data);
        var stdOne = StudentData.data[0];
        console.log(stdOne);
        setStudentData(StudentData.data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  }
  const keys = Object.keys(studentData[0]);

  useEffect(() => {
    getDataFromSheet();
  }, []);

  return (
    <>
      <h4
        style={{ margin: 20, marginBottom: 30, fontFamily: "Times New Roman" }}
      >
        Students
      </h4>
      <div>
        {/* <Table loading height={400} width={800} data={studentData}>
          {keys.map((data_key) => (
            <Column resizable>
              <HeaderCell style={{ backgroundColor: "black", color: "black" }}>
                {data_key}
              </HeaderCell>
              <Cell dataKey={data_key} />
            </Column>
          ))}
        </Table> */}
      </div>
    </>
  );
};

export default Students;
