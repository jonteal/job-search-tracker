// import useFetch from "../../hooks/useFetch";
// import AppList from "../../components/AppList/AppList";

// const Home = () => {

//     const { data: apps, isPending, error } = useFetch('http://localhost:5000/apps');
//     return(
//         <div className="home">
//             { error && <div>{ error }</div>}
//             { isPending && <div>Loading...</div>}
//             { apps && <AppList apps={apps} title="All Apps!"/>}
//         </div>
//     )
// }

// export default Home;


import { useEffect, useState } from "react";
import AppList from "../../components/AppList/AppList";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
    const [applications, setApplications] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchApplications = async () => {
            const res = await axios.get("/applications" + search);
            setApplications(res.data);
    };
    fetchApplications();
    }, [search]);
    return (
        <>
                <div className="home">
                    <AppList applications={applications} />
                </div>
        </>
    );
}