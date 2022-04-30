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
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
    };
    fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
                <div className="home">
                    <Posts posts={posts} />
                    <Sidebar />
                </div>
        </>
    );
}