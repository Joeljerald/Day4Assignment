import { Link } from "react-router-dom";

const Navbar24 = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-center gap-10 py-4 text-lg font-semibold">
        <Link className="hover:text-yellow-300" to="/home24">
          Home
        </Link>

        <Link className="hover:text-yellow-300" to="/products24">
          Products
        </Link>

        <Link className="hover:text-yellow-300" to="/about24">
          About
        </Link>

        <Link className="hover:text-yellow-300" to="/">
          DashBoard
        </Link>


        

      </div>
    </nav>
  );
};

export default Navbar24;