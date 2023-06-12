import { useState, useEffect } from "react";

const Favourites = () => {
    const [fav, setFav] = useState([]);

    useEffect(() => {
        let favArr = JSON.parse(localStorage.getItem('favouriteUser'));
        setFav(favArr);
    }, []);

    const handleDelete = (favUser) => {
        let updatedArr = fav.filter((user) => user !== favUser);
        localStorage.setItem('favouriteUser', JSON.stringify(updatedArr));
        setFav(updatedArr);
        console.log("deleting", favUser, updatedArr);
    }

    let favourites;

    if (fav.length>0) {
         favourites = fav.map((elem) => {
            return (
                <div key={elem} className="flex items-center justify-between shadow-sm hover:shadow-sky-600 transition duration-300 bg-blue-900 hover:bg-blue-950 rounded-md p-2 mb-2">
                    <span className="text-lg font-bold text-white">{elem}</span>
                    <button className="text-white cursor-pointer mt-4 border bg-blue-600 border-blue-500 rounded-md py-2 px-4 hover:bg-blue-950 " onClick={() => handleDelete(elem)}>Delete</button>
                </div>
            );
        });
    }

    return (
        <div>
            {favourites}
        </div>
    );
}

export default Favourites;
