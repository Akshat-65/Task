import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {

    const [detail, setDetail] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const param = searchParams.get("id");

    let favArr = JSON.parse(localStorage.getItem('favouriteUser'));
    if (favArr === null) {
        favArr = [];
        localStorage.setItem('favouriteUser', JSON.stringify(favArr));
    }

    useEffect(() => {
        const getDetails = () => {
            console.log(param);
            fetch(`https://jsonplaceholder.typicode.com/users/${param}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const fetchedDetails = {
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        street: data.address?.street,
                        suite: data.address?.suite,
                        city: data.address?.city,
                        zipcode: data.address?.zipcode
                    }
                    console.log(fetchedDetails);
                    setDetail(fetchedDetails);
                })
                .catch((error) => {
                    console.log("Error fetching details:", error);
                });
        }
        getDetails();
    }, []);

    const handleClick = (favUser) => {
        if (favArr.includes(favUser)) {
            // If already added, remove from favorites
            const updatedArr = favArr.filter((user) => user !== favUser);
            localStorage.setItem('favouriteUser', JSON.stringify(updatedArr));
            console.log("deleting", favUser, updatedArr);
            window.alert('Removed from Favorites');
        } else {
            // Add to favorites
            favArr.push(favUser);
            localStorage.setItem('favouriteUser', JSON.stringify(favArr));
            console.log("adding", favUser, favArr);
            window.alert('Added to Favorites');
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col bg-blue-950 rounded-lg p-8 shadow-sm hover:shadow-sky-950 transition duration-300">
                <h3 className="text-xl text-white font-bold mb-4">{detail.name}</h3>
                <span className="text-slate-100">{detail.username}</span>
                <span className="text-slate-100 italic">{detail.email}</span>
                <span className="text-slate-100">{detail.phone}</span>
                <span className="text-slate-100">{detail.street}{detail.suite}{detail.city}{detail.zipcode}</span>
                <div className = "text-blue-500 cursor-pointer mt-4 border bg-blue-950 border-blue-500 rounded-md py-2 px-4 hover:bg-blue-500 hover:text-white" 
                onClick={() => handleClick(detail.name)}>Add to Favorites</div>
            </div>
        </div>
    );
}

export default DetailsPage;
