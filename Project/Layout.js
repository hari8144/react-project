import { Link,Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <body className="layout_body">
                <nav className="nav">
                    <div><Link to="/" >HOME </Link>  </div>
                    <div><Link to="/product" >Product </Link>  </div>
                    <div><Link to="/addproduct" >AddProduct </Link>  </div>
                    <div><Link to="/login" >Login </Link>  </div>
                    <div><Link to="/register" >Register </Link>  </div>
                </nav>
            </body>
            <Outlet/>
    </>
  );
}

export default Layout;