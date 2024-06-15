import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import DatePicker from "react-datepicker"; // Import datepicker
import "../css/attendance.css";
// import { useNavigate } from "react-router-dom";

const Attendance = () => {
  // Sample data for demonstration

  const data = [
    {
      index: "1",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
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
      img: "./Assets/2.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
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
      img: "./Assets/3.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
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
      img: "./Assets/4.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
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
      img: "./Assets/5.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
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
      principal: { name: "S Roy" },
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
      img: "./Assets/7.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
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

  //side panel navigation

  // const navigate = useNavigate();
  // const navigate1 = useNavigate();
  // const navigate2 = useNavigate();

  // function goToClassTeacherHome() {
  //   navigate("/classteacher");
  // }

  // function goToAddNewStudent() {
  //   navigate1("/addstudent");
  // }

  // function goToAttendance() {
  //   navigate2("/student-attendance");
  // }

  // State to store attendance data and selected date
  const [attendanceData, setAttendanceData] = useState({
    date: new Date(),
    attendance: {},
  });

  // Function to handle radio button change
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData((prevState) => ({
      ...prevState,
      attendance: {
        ...prevState.attendance,
        [name]: value,
      },
    }));
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setAttendanceData((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    console.log("Attendance Data:", attendanceData);
    alert("Attendance submitted successfully!");
  };

  return (
    <div className="p-4 sm:ml-64 mt-14 text-5xl text-black">
      <div className="bg-white p-5 w-full h-full lg:w-5/6 xl:w-5/6 flex flex-col justify-center items-center">
        <div className="flex justify-around items-center">
          <h2>Select Date</h2>
          <DatePicker
            className="w-full h-full bg-slate-200 border-1 p-2"
            selected={attendanceData.date}
            onChange={handleDateChange}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Dynamic table */}
        <table className="mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.index}>
                <td>{item.student.name}</td>
                <td>
                  <input
                    type="radio"
                    name={`attendance_${item.index}`}
                    value="present"
                    onChange={handleRadioChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={`attendance_${item.index}`}
                    value="absent"
                    onChange={handleRadioChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="button" className="flex justify-end space-x-6 mt-6 gap-8 ">
          <button className="border-2 text-4xl bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-24 rounded-full">
            Cancel
          </button>

          <button
            className="border-2 text-4xl bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-24 rounded-full"
            onClick={handleSubmit}
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
