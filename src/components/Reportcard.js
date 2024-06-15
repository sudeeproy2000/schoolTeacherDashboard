import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "antd";

function Reportcard() {
  const studentList = [
    {
      index: "1",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "608 Denesik Square, Port Rayfordbury, MN 48505",
        class: 10,
        section: "A",
        roll_no: 1,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
    {
      index: "2",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "Sudip Das",
        father_name: "P Das",
        dob: "19/01/1987",
        b_group: "AB+",
        contact_no: "7031234567",
        address: "43035 Johnsie Port, Port Elmira, CT 49298-6961",
        class: 10,
        section: "A",
        roll_no: 2,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
    {
      index: "3",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "S Roy",
        father_name: "D Roy",
        dob: "19/02/2000",
        b_group: "A+",
        contact_no: "7031123475",
        address: "70103 Ward Stravenue, New Benedictbury, MN 37616-6713",
        class: 10,
        section: "A",
        roll_no: 3,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
    {
      index: "4",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "Suite 960 8549 Langosh Neck, New Shara, VT 24824",
        class: 10,
        section: "A",
        roll_no: 4,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
    {
      index: "5",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address:
          "Suite 499 4514 Altenwerth Viaduct, Port Kristofer, NJ 48194-9062",
        class: 10,
        section: "A",
        roll_no: 5,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
    {
      index: "6",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "Samir Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "6500 Krystal Glen, South Ianmouth, ME 87157-8846",
        class: 10,
        section: "A",
        roll_no: 6,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
    {
      index: "7",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      " principal": { name: "S Roy" },
      type: "hoeizontal",
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "115 Hagenes Plain, New Dwayneberg, CA 52776-1425",
        class: 10,
        section: "A",
        roll_no: 7,
        marks_first: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_second: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_third: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
        marks_fourth: {
          bangla: null,
          english: null,
          hindi: null,
          mathematics: null,
          science: null,
          socialscience: null,
        },
      },
    },
  ];
  return (
    <div className="p-4 sm:ml-64 mt-14 text-5xl text-black">
      {/* Actual Code Starts from here */}

      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Bangla</th>
              <th>English</th>
              <th>Hindi</th>
              <th>Mathematics</th>
              <th>Science</th>
              <th>Social Science</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((d, i) => (
              <tr key={i}>
                <td>{d.student.name}</td>
                <td>{d.student.marks_first.bangla}</td>
                <td>{d.student.marks_first.english}</td>
                <td>{d.student.marks_first.hindi}</td>
                <td>{d.student.marks_first.mathematics}</td>
                <td>{d.student.marks_first.science}</td>
                <td>{d.student.marks_first.socialscience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reportcard;
