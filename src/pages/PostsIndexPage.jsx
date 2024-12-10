// UTILITY
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


// ENV IMPORTS
const apiUrlRoot = import.meta.env.VITE_APIURL;
const apiSubPath = import.meta.env.VITE_SUBPATH;


// COMPONENT EXPORT

export default function PostsIndexPage() {

    // INIT USE-STATE SETTING
    const [Feed, setFeed] = useState([]);

    // # CRUD - INDEX
    const crudIndex = () => (
        fetch(apiUrlRoot + apiSubPath + '?term=', {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                setFeed(data.elements);
                console.log('CRUD executed: Index at ' + apiUrlRoot + apiSubPath);
            })
            .catch((error) => {
                console.log('Error while fetching content')
            })
    )

    // INIT USE-EFFECT
    useEffect(() => {
        crudIndex();
    }, []);

    return <>
        <h1 className="debug">Posts</h1>

        <ul>
            {Feed.map((post, index) => (
                <li key={post.id} className="debug">
                    <Link to={post.id}><p>{index + ' ' + post.title}</p></Link>
                </li>
            ))}
        </ul>
    </>
}