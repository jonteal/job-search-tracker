import useFetch from "../../hooks/useFetch";
import AppList from "../../components/AppList/AppList";

const Home = () => {

    const { data: apps, isPending, error } = useFetch('http://localhost:8000/apps');
    return(
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { apps && <AppList apps={apps} title="All Apps!"/>}
        </div>
    )
}

export default Home;