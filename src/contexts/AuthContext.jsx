import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { getMe } from "../api/todoApi";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null); //useState ที่อยู่ใน useContext

  //เอา useEffect ทำไห้ token เก็ย ข้อมูล user
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getMe(token).then((rs) => {
      // axios
      //   .get("http://localhost:8080/auth/getme", {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   })
      //   .then((rs) => {
      setUser(rs.data);
    });
  }, []); //render ครั้งแรกครั้งเดียว แต่มันอยู่ใน useContext ที่คอบทั้ง app

  // useEffect(() => {
  //   console.log(!!user);
  // }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext); // ในไฟล์นี้ตัว useContext เคยเป็น useState มาก่อนปะ????????
};
