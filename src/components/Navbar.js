import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white py-4 px-8 mb-1 flex justify-between">
            <div className="text-xl font-bold">
                <Link to="/">Home</Link>
            </div>
            <div className="text-xl font-bold">
                <Link to="/favourites">Favourites</Link>
            </div>
        </div>
    );
}

export default Navbar;
