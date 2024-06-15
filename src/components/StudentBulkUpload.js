import React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";
// import { useNavigate } from "react-router-dom";

function StudentBulkUpload() {
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

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 100));
    }
  };
  return (
    <div className="p-4 sm:ml-64 mt-14 text-xl text-black">
      <div className="p-5">
        <div className="wrapper">
          <h6 className="text-2xl font-bold mb-8">
            Upload & View Student Excel Sheets
          </h6>

          {/* form */}
          <form
            className="form-group custom-form mb-4 flex justify-around"
            onSubmit={handleFileSubmit}
          >
            <input
              type="file"
              className="form-control"
              required
              onChange={handleFile}
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Show Excel Data
            </button>
            {typeError && (
              <div className="alert alert-danger" role="alert">
                {typeError}
              </div>
            )}
          </form>

          {/* view data */}
          <div className="viewer">
            {excelData ? (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      {Object.keys(excelData[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {excelData.map((individualExcelData, index) => (
                      <tr key={index}>
                        {Object.keys(individualExcelData).map((key) => (
                          <td key={key}>{individualExcelData[key]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>No File is uploaded yet!</div>
            )}
          </div>
        </div>

        <>
          <div
            id="school_id"
            className="flex space-x-6 mt-4 text-2xl font-bold py-2 px-12 rounded-full bg-slate-200 mb-4"
          >
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
                required
                autoComplete="number"
                className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              //   onClick={goToClassTeacherHome}
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-3 px-5 border-2 rounded-lg "
            >
              Submit
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default StudentBulkUpload;
