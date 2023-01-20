import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [getmessage, setGetMessage] = useState("");

   const makeCookies = async (e) => {
    e.preventDefault();
    console.log('${process.env.REACT_APP_API}:', process.env.REACT_APP_API)

    const response = await fetch(`${process.env.REACT_APP_API}message`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ message: "message" }), // body data type must match "Content-Type" header
    });
    // parses JSON response into native JavaScript objects
    console.log("response:", response);
    // console.log("cookieChecked:", cookieChecked);
  };

  const getCookies = async () => {
    try {
      const getMessageCookie = await axios.get(
        `${process.env.REACT_APP_API}message`
      );
      console.log("getMessageCookie:", getMessageCookie.data.cookieMessage);
    } catch (error) {
      console.log("error:", error);
    }
  };


  return (
    <div>
      <h1>center</h1>
      <form>
        <input
          value={message}
          placeholder="Enter Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={makeCookies}>
          Click
        </button>
      </form>

      <button type="button" onClick={getCookies}>
        Get Cookies
      </button>
    </div>
  );
}

export default App;
