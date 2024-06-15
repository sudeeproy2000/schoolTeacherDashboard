import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { Card } from "antd";
const { Meta } = Card;

function Students() {
  const [recordes, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  }, []);

  function po() {
    console.log(recordes);
  }
  return (
    <div className="p-4 sm:ml-64 mt-14 text-5xl text-black flex flex-wrap gap-8">
      {recordes.map((d, i) => (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          key={i}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta
            title={d.student.name}
            description={"Roll No : " + d.student.roll_no}
          />
        </Card>
      ))}
    </div>
  );
}

export default Students;
