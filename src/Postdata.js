import React, { useState } from "react";

const Postdata = () => {
  const [userId, setuserId] = useState(0);
  const [id, setid] = useState(0);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const psdata = async () => {
    let myheaders = new Headers();
    myheaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      userId,
      id,
      title,
      body,
    });
    var postrequest = {
      method: "POST",
      headers: myheaders,
      body: raw,
    };

    const responsedata = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      postrequest
    );
    const newdata = await responsedata.json();
    console.log(newdata, "newdata");
  };
  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <h2>Postdata</h2>

      <input
        style={{ width: "400px", padding: "20px", margin: "10px" }}
        type="number"
        placeholder="userid"
        onChange={(e) => setuserId(e.target.value)}
      />
      <input
        style={{ width: "400px", padding: "20px", margin: "10px " }}
        type="number"
        placeholder="id"
        onChange={(e) => setid(e.target.value)}
      />
      <input
        style={{ width: "400px", padding: "20px", margin: "10px " }}
        type="text"
        placeholder="title"
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        style={{ width: "400px", padding: "20px", margin: "10px" }}
        type="text"
        placeholder="body"
        onChange={(e) => setbody(e.target.value)}
      />
      <button
        style={{ width: "200px", padding: "20px", margin: "10px auto" }}
        onClick={psdata}
      >
        psdata
      </button>
    </div>
  );
};

export default Postdata;
