import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../styles/layoutStyled'

function About() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => setData(res.data));
    }, []);

    console.log(data);

  return (
    <Container>
        <h1>About</h1>
        <hr />
        <h3>My name is {data.name}</h3>
        <ul>
            <li>email : {data.email}</li>
            <li>lihone : {data.phone}</li>
            <li>website : {data.website}</li>
        </ul>
    </Container>
  )
}

export default About