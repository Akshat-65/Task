import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HomePage = (props) => {

    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getData = () => {
            setIsLoaded(false);
            fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data);
                const fetchedData = [];

                for (let elem of data) {
                    fetchedData.push({
                        id: elem.id,
                        name: elem.name,
                        username: elem.username,
                        email: elem.email,
                        phone: elem.phone
                    })
                }
                console.log(fetchedData);
                const sortedData = fetchedData.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                setUsers(sortedData);
                // setUsers(fetchedData);
                console.log(sortedData);
            })
        }
        getData();
        setIsLoaded(true);
    }, [])

    return (
        <div>
            {isLoaded && users.map((elem) => {
                return <Link to={`/detail?id=${elem.id}`}>
                    <div className="flex flex-col border border-border-gray-500 rounded p-4 mb-4 shadow-md hover:shadow-lg transition duration-300 bg-blue-900 hover:bg-blue-950 " key={elem.id}>
                        <span className="text-lg font-bold text-white">{elem.name}</span>
                        <small className="text-slate-100 italic">{elem.email}</small>
                        <small className="text-slate-100">{elem.phone}</small>
                        <small className="text-slate-100">{elem.username}</small>
                    </div>
                </Link>
            })}
            {!isLoaded && <div className="text-3xl text-red-600 flex items-center justify-center h-screen">Loading...</div>}
        </div>
    );
}

export default HomePage;



