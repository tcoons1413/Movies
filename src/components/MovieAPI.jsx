import { useState } from "react";
import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function MovieAPI() {
    const [movieData,setData] = useState({results:[]})
    const cardStyles = {display: "flex",flexDirection: "row",flexWrap:"wrap",gap:"20px",justifyContent:"center"}
    // const [yearReleased,setYear] = useState(0)

    useEffect(()=>{
        async function getData(){
            const options = {
                method: 'GET', 
                headers: {
                    accept: 'application/json',Authorization:"Bearer "+import.meta.env.VITE_KEY}};

            const response = await fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&include_adult=false', options, options)
            const data = await response.json()
            setData(data)
        }
        getData()
    },[])

  return (
        <div style={cardStyles}>
            {console.log(movieData)}
            {movieData.results.map(url => (
            <Card key={crypto.randomUUID()} style={{ width: '18rem' }}>
            <div>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+url.poster_path} />
            </div>
            <Card.Body>
                <div className="d-flex flex-column justify-content-between">
                    <div className="cardTitle">
                        <Card.Title>{url.original_title}</Card.Title>
                    </div>
                    <Card.Text>
                        <div className="cardText">
                            {url.overview}
                        </div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </div>
            </Card.Body>
            </Card>

            ))}
        </div>
  )
}