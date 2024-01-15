"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [message, setMessage] = useState("");
  const [loding, setLoading] = useState("");

  useEffect(() => {
    const handleMessage = (event: MessageEvent<any>) => {
      const token = event.data;
      setMessage(token.uuid);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Next.js App</h1>
      <h1>ini tokenmu {message}</h1>
      <Link href={"mobile/home"}>
        <button
          style={{ background: "#1c1", cursor: "pointer", marginTop: 50 }}
          className="cursor-pointer"
        >
          <h1>GO to mobile home</h1>
        </button>
      </Link>

      <Link href={"login"}>
        <button
          style={{ background: "#dd1c33", cursor: "pointer", marginTop: 50 }}
          className="cursor-pointer"
        >
          <h1>GO to Login</h1>
        </button>
      </Link>
    </div>
  );
};

export default Home;
