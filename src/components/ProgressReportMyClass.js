import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input } from "antd";

function ProgressReportMyClass() {
  const [records, setRecords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editableData, setEditableData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/students").then((res) => {
      setRecords(res.data);
    });
  }, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditableData(records[index].student.marks_first);
  };

  const handleInputChange = (e, subject) => {
    const { value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [subject]: value,
    }));
  };

  const handleSaveClick = (index) => {
    const updatedRecords = [...records];
    updatedRecords[index].student.marks_first = editableData;
    setRecords(updatedRecords);
    setEditingIndex(null);

    // Update the database
    const updatedStudent = updatedRecords[index];
    axios
      .put(
        `http://localhost:3000/students/${updatedStudent.student.id}`,
        updatedStudent
      )
      .then((response) => {
        console.log("Data updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the data:", error);
      });
  };

  return (
    <div className="p-4 sm:ml-64 mt-14 text-5xl text-black">
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Bangla</th>
              <th>English</th>
              <th>Hindi</th>
              <th>Mathematics</th>
              <th>Science</th>
              <th>Social Science</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.student.roll_no}</td>
                <td>{d.student.name}</td>
                <td>
                  {editingIndex === i ? (
                    <Input
                      value={editableData.bangla}
                      onChange={(e) => handleInputChange(e, "bangla")}
                    />
                  ) : (
                    d.student.marks_first.bangla
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Input
                      value={editableData.english}
                      onChange={(e) => handleInputChange(e, "english")}
                    />
                  ) : (
                    d.student.marks_first.english
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Input
                      value={editableData.hindi}
                      onChange={(e) => handleInputChange(e, "hindi")}
                    />
                  ) : (
                    d.student.marks_first.hindi
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Input
                      value={editableData.mathematics}
                      onChange={(e) => handleInputChange(e, "mathematics")}
                    />
                  ) : (
                    d.student.marks_first.mathematics
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Input
                      value={editableData.science}
                      onChange={(e) => handleInputChange(e, "science")}
                    />
                  ) : (
                    d.student.marks_first.science
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Input
                      value={editableData.socialscience}
                      onChange={(e) => handleInputChange(e, "socialscience")}
                    />
                  ) : (
                    d.student.marks_first.socialscience
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Button onClick={() => handleSaveClick(i)}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEditClick(i)}>Edit</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProgressReportMyClass;
