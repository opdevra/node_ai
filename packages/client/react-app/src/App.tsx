import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("0");

  useEffect(() => {
   fetch("/api/hello")
   .then(res => res.json())
   .then(data=> setMessage(data.message))
   .catch(err => console.error("Error fetching:", err))

  }, []);
  return(<>
    <h1>{message}</h1>
  </>);
}

export default App;
