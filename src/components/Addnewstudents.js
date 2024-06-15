import React, { useState } from "react";
// import BulkUpload from "./StudentBulkUpload";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/inputArrow.css";

import { Button } from "antd";
import { Link } from "react-router-dom";

function Addnewstudents() {
  {
    /* const navigate = useNavigate();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  function goToClassTeacherHome() {
    navigate("/classteacher");
  }

  function goToAddNewStudent() {
    navigate1("/addstudent");
  }

  function goToAttendance() {
    navigate2("/student-attendance");
  } */
  }

  const data = {
    firstname: "",
    lastname: "",
    fname: "",
    dob: "",
    email: "",
    phone: "",
    schoolid: "",
    studentid: "",
    roll: "",
    address: "",
  };

  const [inputData, setInputData] = useState(data);

  const handelData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData) //PASTE THE POST LINK HERE
      .then((response) => {
        console.log(response);
      });
  };

  const handleKeyDown = (e) => {
    // Prevent entering negative sign
    if (e.key === "-") {
      e.preventDefault();
    }
  };
  return (
    <div className="p-4 sm:ml-64 mt-14 text-5xl text-black">
      <Button>
        {" "}
        <Link to="/myclass/addnewstudents/bulkupload">Student Bulk Upload</Link>
      </Button>

      <form className="p-10">
        <div className="border-2 border-black p-5">
          <h2 className="text-5xl font-semibold leading-7 text-white p-5 bg-indigo-500">
            Add Student Manually
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  autoComplete="given-name"
                  className="h-14 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 p-3"
                  value={inputData.firstname}
                  onChange={handelData}
                  style={{}}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  autoComplete="family-name"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.lastname}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Father's Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="first-name"
                  autoComplete="given-name"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.fname}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Student DOB (Date of Birth)
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  autoComplete="dob"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.dob}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="email"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.email}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="phone"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="number"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.phone}
                  onChange={handelData}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="schoolid"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                School ID
              </label>
              <div className="mt-2">
                <input
                  id="schoolid"
                  name="schoolid"
                  type=""
                  autoComplete="number"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.schoolid}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1 mt-5">
              <label
                htmlFor="employee"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Student Id UID
              </label>
              <div className="mt-2">
                <input
                  type=""
                  name="studentid"
                  id="studentid"
                  autoComplete="address-level2"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.studentid}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="class-teacher"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Class
              </label>
              <div className="mt-2">
                <select
                  id="class"
                  name="class"
                  autoComplete="class"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                  value={inputData.class}
                  onChange={handelData}
                >
                  <option value="">1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="class-teacher"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Section
              </label>
              <div className="mt-2">
                <select
                  id="section"
                  name="section"
                  autoComplete="section"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                  value={inputData.section}
                  onChange={handelData}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="address"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type=""
                  autoComplete="address"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.address}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="roll"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Roll No
              </label>
              <div className="mt-2">
                <input
                  id="roll"
                  min="0"
                  max="99"
                  name="roll"
                  type="number"
                  autoComplete="roll"
                  className="h-14 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.roll}
                  onChange={handelData}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="button" className="flex justify-end space-x-6 mt-6 gap-8 ">
          <button className="border-2 text-4xl bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-24 rounded-full">
            Cancel
          </button>

          <button
            className="border-2 text-4xl bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-24 rounded-full"
            onClick={handelSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addnewstudents;
