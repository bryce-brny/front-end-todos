import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav className="w-[400px] flex gap-3">
    <nav className="flex gap-3 ">
      {/* โหลดหน้าใหม่เลย ไใ่ผ่าน route */}
      {/* <a href="/login">Login</a>   */}
      {/* <a href="/register">Register</a> */}

      {/* แบบผ่าน route */}
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}

      {/* class active ตามมาด้วย เช็คใน inspect เขียน css .active ได้เลย  */}
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/login">
        Login
      </NavLink>
      <NavLink className="navlink" to="/register">
        Register
      </NavLink>
    </nav>
  );
}
