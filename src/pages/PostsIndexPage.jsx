// UTILITY
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


// ENV IMPORTS
const apiUrlRoot = import.meta.env.VITE_APIURL;
const apiSubPath = import.meta.env.VITE_SUBPATH;


// COMPONENT EXPORT

export default function PostsIndexPage() {

    const navigate = useNavigate();

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
                    <Link to={'/' + apiSubPath + post.id}><p>{'Index: ' + index + ' / ' + post.title}</p></Link>
                    <button type="button" onClick={() => (navigate('/' + apiSubPath + post.id))}>Show details</button>
                </li>
            ))}
        </ul>
    </>
}