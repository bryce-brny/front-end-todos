import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { login, getMe } from "../api/todoApi";

export default function Login() {
  //เอา use+auth ประกบกัน
  // const { user, setUser } = useContext(AuthContext);
  const { user, setUser } = useAuth(); // เป็น function

  // console.log(user);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const hdlSubmit = (e) => {
  //   e.preventDefault();
  //   // validation
  //   axios
  //     .post("http://localhost:8080/auth/login", input)
  //     .then((rs) => {
  //       console.log(rs);
  //     })
  //     .catch((err) => console.log(err));
  // };

  //token
  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation
    // axios.post("http://localhost:8080/auth/login", input) // input อยู่ใน body
    login(input)
      .then((rs) => {
        // console.log(rs.data.token);
        localStorage.setItem("token", rs.data.token); // เก็บข้อมูลใน token (ชื่อstorage , value)
        //return เพื่อให้ .then (บรรทัด49) ไปใช้ต่อ
        // axios.get คือ การยิ่ง token ไป
        return getMe();

        // axios.get("http://localhost:8080/auth/getMe", {
        //   // ยิง get ไปอีก path นะ
        //   headers: {
        //     //ต้องส่งผ่าน header เท่านั้นทำมัวๆไม่ได้
        //     Authorization: `Bearer ${rs.data.token}`, // ต้องมี Bearer
        //   },
        // });
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
      })
      .catch((err) => alert(err.response.data.error || err.message));
  };

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Login Form</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="text"
            placeholder="Username"
            name="username"
            onChange={hdlChangeInput}
            value={input.username}
          />
        </div>

        <div className="flex w-full mb-4">
          <i className="fa fa-key text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="password"
            placeholder="Password"
            name="password"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>

        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
