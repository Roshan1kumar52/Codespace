import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("https://obscure-zebra-9r467qqj6gg39rvj-8000.app.github.dev/api/hello/")
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>React + Django</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;

