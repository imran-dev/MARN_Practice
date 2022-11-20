import React, {useEffect, useState} from 'react';
import axios from "axios";

const HomeBanner = () => {

    let [todo, setTodo] = useState([]);

    useEffect(() => {
        // API Call
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            setTodo(res.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <div>
            {JSON.stringify(todo)}
            <a className="btn btn-primary">Test btn</a>
        </div>
    );
};

export default HomeBanner;