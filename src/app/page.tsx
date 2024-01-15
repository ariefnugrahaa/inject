"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loding, setLoading] = useState("");

  const handleClick = () => {
    // Navigasi ke halaman lain
    router.push("/home");
  };

  const handleClickLogin = () => {
    const router = useRouter();

    // Navigasi ke halaman lain
    router.push("/login");
  };

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
      <button
        onClick={handleClick}
        style={{ background: "#1c1", cursor: "pointer", marginTop: 50 }}
        className="cursor-pointer"
      >
        <h1>GO to mobile home</h1>
      </button>

      <button
        onClick={handleClickLogin}
        style={{ background: "#dd1c33", cursor: "pointer", marginTop: 50 }}
        className="cursor-pointer"
      >
        <h1>GO to Login</h1>
      </button>
    </div>
  );
};

export default Home;
