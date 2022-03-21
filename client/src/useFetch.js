import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        
        // Creating a constant that we can then associate to the fetch function in order to stop it when we do the cleanup
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

            // useEffect Cleanup function aborts with whatever fetch it is associated with
            return() => abortCont.abort();
    }, [url])


    return { data, isPending, error };
}

export default useFetch;