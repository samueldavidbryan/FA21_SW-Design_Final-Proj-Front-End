import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Corporate">Corporate</Link>
          </li>
          <li>
            <Link to="/Manager">Manager</Link>
          </li>
          <li>
            <Link to="/Customer">Customer</Link>
          </li>
        </ul>
      </nav>


      <Outlet />
    </>
  )
};

export default Layout;
