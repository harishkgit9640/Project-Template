import React, { useEffect, useState } from 'react'
import axios from 'axios';



const Home = () => {
    const [data, setData] = useState("");
    const [BabyNames, setBabyNames] = useState([]);

    useEffect(() => {
        SearchName();

    }, [data])

    const SearchName = async () => {
        const res = await axios.get('https://api.api-ninjas.com/v1/babynames?gender=boy', {
            headers: {
                'X-Api-Key': 'BQXVUPTyn9i1gmbiHbC/TQ==QkLxjq3GyEwt2OWX'
            },
        })
        // console.log(res.data);
        setBabyNames(res.data);
    }

    return (
        <>
            <div className="container">
                <div className="col-lg-6 mx-auto mt-5">
                    <form className="d-flex" role="search" onSubmit={SearchName}>
                        <input className="form-control me-2" type="search" name='search' value={data} onChange={((e) => setData(e.target.value))} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>

                <ul>
                    {BabyNames.map((name) => {
                        return <li key={name} >{name}</li>;
                    })}
                </ul>

            </div>

        </>
    )
}

export default Home
