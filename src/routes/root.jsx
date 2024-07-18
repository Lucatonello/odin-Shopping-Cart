import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <nav>
          <Link to="/home" className="link mainConentTitle roboto-regular-italic" >Home</Link>
          <Link to="/shop" className="link mainConentTitle roboto-regular-italic">Shop</Link>
          <Link to="/cart" className="link mainConentTitle roboto-regular-italic">Cart</Link>      
        </nav>
        <div id="detail">
            <Outlet />
        </div>
        <footer>
          <p>Luca Tonello</p>
          <a className="social" target='_blank' href="https://github.com/Lucatonello">LinkedIn |</a>
          <a className="social" target='_blank' href="https://www.linkedin.com/in/luca-tonello-b70377285">| Github</a>
        </footer>
      </>
    );
  }