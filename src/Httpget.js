import React, { useState } from "react";
const Httpget = () => {
  const [newdata, setdata] = useState([]);
  const getdatamethod = async () => {
    var requestgetmethod = {
      method: "GET",
    };

    const responsedata = await fetch(
      "https://reqres.in/api/users?page=2",
      requestgetmethod
    );
    const resdata = await responsedata.json();
    // console.log(resdata, "resdata");
    setdata(resdata.data);
  };
  console.log(newdata, "newdata");
  return (
    <>
      <h2>App</h2>
      <button onClick={getdatamethod}>Getdata</button>
      {newdata?.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.first_name}</h2>
            <h2>{item.last_name}</h2>
            <h2>{item.id}</h2>
            <h2>{item.email}</h2>
            <image
              src={item.avatar}
              alt="srcimage"
              width="100px"
              hight="100px"
            />
          </div>
        );
      })}
    </>
  );
};



export default Httpget