import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/apps');
    return(
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { apps && <AppList apps={apps} title="All Apps!"/>}
        </div>
    )
}

export default Home;