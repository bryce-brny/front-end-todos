// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const hdlLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     //   // <nav className="w-[400px] flex gap-3">
//     //   <nav className="flex gap-3 ">
//     //     {/* โหลดหน้าใหม่เลย ไใ่ผ่าน route */}
//     //     {/* <a href="/login">Login</a>   */}
//     //     {/* <a href="/register">Register</a> */}

//     //     {/* แบบผ่าน route */}
//     //     {/* <Link to="/login">Login</Link>
//     //     <Link to="/register">Register</Link> */}

//     //     {/* class active ตามมาด้วย เช็คใน inspect เขียน css .active ได้เลย  */}
//     //     <NavLink className="navlink" to="/">
//     //       Home
//     //     </NavLink>
//     //     {/* ทำแบบนี้ได้เพราะ import react-router-dom */}
//     //     <NavLink className="navlink" to="/login">
//     //       {/* การต่อ path คือ to = "" */}
//     //       Login
//     //     </NavLink>
//     //     <NavLink className="navlink" to="/register">
//     //       Register
//     //     </NavLink>
//     //     <div className="navlink cursor-pointer" onClick={hdlLogout}>
//     //       Logout
//     //     </div>
//     //   </nav>

//     <nav className="flex gap-3 ">
//       {user ? (
//         <>
//           <NavLink className="navlink" to="/">
//             Home
//           </NavLink>
//           <div className="navlink cursor-pointer" onClick={hdlLogout}>
//             Logout
//           </div>
//         </>
//       ) : (
//         <>
//           <NavLink className="navlink" to="/">
//             Home
//           </NavLink>
//           <NavLink className="navlink" to="/login">
//             Login
//           </NavLink>
//           <NavLink className="navlink" to="/register">
//             Register
//           </NavLink>
//         </>
//       )}
//     </nav>
//   );

// }

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="flex gap-3 ">
      {user ? (
        <>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <div className="navlink cursor-pointer" onClick={hdlLogout}>
            Logout
          </div>
        </>
      ) : (
        <>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/login">
            Login
          </NavLink>
          <NavLink className="navlink" to="/register">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
}
