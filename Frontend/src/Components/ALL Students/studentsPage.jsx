// App.jsx
import React, { useState } from "react";
import Student from "./SingleStudent";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import { Alert, Dropdown } from "react-bootstrap";
import { LiaFilterSolid } from "react-icons/lia";
import { FaSort } from "react-icons/fa6";
const studentsData = [
  {
    name: "Anthony Malone",
    email: "malone@email.com",
    group: "Fullstack 11",
    homework: "9/12",
    attendance: "10/12",
    score: "74/100",
  },
  {
    name: "Lucia Ford",
    email: "luford@email.com",
    group: "Design 12",
    homework: "11/16",
    attendance: "11/16",
    score: "86/100",
  },
  {
    name: "Victor Rose",
    email: "victorose@email.com",
    group: "Front end 16",
    homework: "7/15",
    attendance: "10/15",
    score: "63/100",
  },
  {
    name: "Billy Harper",
    email: "harper@email.com",
    group: "IT Bootcamp 8",
    homework: "10/12",
    attendance: "12/12",
    score: "92/100",
  },
  {
    name: "Erika Santiago",
    email: "esantiago@email.com",
    group: "Design 11",
    homework: "9/16",
    attendance: "16/16",
    score: "75/100",
  },
  {
    name: "Kim Bowen",
    email: "bowenkim@email.com",
    group: "Design 12",
    homework: "15/16",
    attendance: "15/16",
    score: "96/100",
  },
  {
    name: "Jimmy Hardy",
    email: "hardyjim@email.com",
    group: "IT Bootcamp 8",
    homework: "9/12",
    attendance: "11/12",
    score: "94/100",
  },
  {
    name: "Harvey Gill",
    email: "gillharvey@email.com",
    group: "Design 12",
    homework: "9/16",
    attendance: "11/16",
    score: "77/100",
  },
  {
    name: "Earl Owen",
    email: "owen@email.com",
    group: "Fullstack 11",
    homework: "7/12",
    attendance: "7/12",
    score: "65/100",
  },
  {
    name: "Domingo Flores",
    email: "floresdo@email.com",
    group: "Front end 16",
    homework: "9/15",
    attendance: "13/15",
    score: "56/100",
  },
  {
    name: "Victor Rose",
    email: "victorose@email.com",
    group: "Front end 16",
    homework: "7/15",
    attendance: "10/15",
    score: "63/100",
  },
  {
    name: "Billy Harper",
    email: "harper@email.com",
    group: "IT Bootcamp 8",
    homework: "10/12",
    attendance: "12/12",
    score: "92/100",
  },
  {
    name: "Erika Santiago",
    email: "esantiago@email.com",
    group: "Design 11",
    homework: "9/16",
    attendance: "16/16",
    score: "75/100",
  },
  {
    name: "Kim Bowen",
    email: "bowenkim@email.com",
    group: "Design 12",
    homework: "15/16",
    attendance: "15/16",
    score: "96/100",
  },
  {
    name: "Jimmy Hardy",
    email: "hardyjim@email.com",
    group: "IT Bootcamp 8",
    homework: "9/12",
    attendance: "11/12",
    score: "94/100",
  },
  {
    name: "Harvey Gill",
    email: "gillharvey@email.com",
    group: "Design 12",
    homework: "9/16",
    attendance: "11/16",
    score: "77/100",
  },
  {
    name: "Earl Owen",
    email: "owen@email.com",
    group: "Fullstack 11",
    homework: "7/12",
    attendance: "7/12",
    score: "65/100",
  },
  {
    name: "Domingo Flores",
    email: "floresdo@email.com",
    group: "Front end 16",
    homework: "9/15",
    attendance: "13/15",
    score: "56/100",
  },
];

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const [show, setShow] = useState(true);
  

  
  return (
    <div className="container mx-auto p-4 w-full h-full">
      <h1 className="mb-4 text-5xl font-bold">All Students </h1>
      <div className="relative mb-4  flex w-full justify-between">
        <div className="w-[70%] flex">
    
          <input
            type="text"
            placeholder=" Search Student "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="d-flex align-items-center justify-content-center gap-1 "
            >
              <FaSort className="text-md  " />{" "}
              <p className="mb-0 p-1">Sort By</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item>Score Accending</Dropdown.Item>
              <Dropdown.Item>Score Decending</Dropdown.Item>
              <Dropdown.Item>Attendance (Low to high)</Dropdown.Item>
              <Dropdown.Item>Attendance (high to Low)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
  

        <Button
        
          variant="primary"
          className="d-flex justify-content-center  align-items-center"
        >
          <FaPlus className="me-2" />
          <p className="mb-0">Add Student</p>
        </Button>
      </div>
      <div className="h-[600px] overflow-y-scroll">
        <table className="min-w-full   bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 text-xl border-b border-gray-200 ">
                Name
              </th>
              <th className="py-2 px-4 text-xl border-b border-gray-200 ">
                Group
              </th>
              {/* <th className="py-2 px-4 border-b border-gray-200 text-left">
              Homework
            </th> */}
              <th className="py-2 px-4  text-xl border-b border-gray-200 ">
                Attendance
              </th>
              <th className="py-2 px-4 text-xl border-b border-gray-200 text-left">
                Score
              </th>
              <th className="py-2 px-4 text-xl border-b border-gray-200
               text-center ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <Student key={index} {...student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
