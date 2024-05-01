import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./adviceApp.css";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("Please Click button to get advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const api = "https://api.adviceslip.com/advice";
    const res = await fetch(api);
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => {
      return c + 1;
    });
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-center font-medium">{advice}</h3>
      <Button variant="primary" className="mt-3" onClick={getAdvice}>
        Get Advice
      </Button>
      <Counter count={count} />
    </div>
  );
};

export default AdviceApp;

function Counter(props) {
  return (
    <p className="mt-3">
      You have read{" "}
      <span
        style={{
          color: "#2c3a57",
          backgroundColor: "#fff",
          borderRadius: "50%",
        }}
        className="widthAndHeight"
      >
        {props.count}
      </span>{" "}
      pieces of Advice.
    </p>
  );
}
