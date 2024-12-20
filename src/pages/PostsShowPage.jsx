// UTILITY
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router";


// ENV IMPORTS
const domainUrl = import.meta.env.VITE_DOMAINURL;
const apiUrlRoot = import.meta.env.VITE_APIURL;
const apiSubPath = import.meta.env.VITE_SUBPATH;


// COMPONENT EXPORT

export default function PostsShowPage() {

    // RICEZIONE PARAMS
    const params = useParams();

    // INIT USE-STATE SETTING
    const [Feed, setFeed] = useState([]);

    // # CRUD - SHOW
    const crudShow = () => (
        fetch(apiUrlRoot + apiSubPath + params.id, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                setFeed(data);
                console.log('CRUD executed: Show at ' + apiUrlRoot + apiSubPath + params.id);
            })
            .catch((error) => {
                console.log('Error while fetching content')
            })
    )

    // INIT USE-EFFECT
    useEffect(() => {
        crudShow();
    }, []);

    return <>
        <h1 className="debug">{'Post Detail: ' + Feed.title}</h1>
        <p className="debug">{Feed.title}</p>
        <NavLink to={domainUrl + apiSubPath}>
            <button>Back to List</button>
        </NavLink>
    </>
}