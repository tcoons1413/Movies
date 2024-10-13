import { useState } from "react";
import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Paginations from "./Paginations";
// import Paginations from "./Paginations";

export default function MovieAPI({isAdult}) {
    const [movieData,setData] = useState({results:[]})
    const cardStyles = {display: "flex",flexDirection: "row",flexWrap:"wrap",gap:"20px",justifyContent:"center"}
    

    useEffect(()=>{
        async function getData(){
            const options = {
                method: 'GET', 
                headers: {
                    accept: 'application/json',Authorization:"Bearer "+import.meta.env.VITE_KEY}};
                    
                    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=2015&include_adult=${isAdult}&page=5`, options, options)
                    const data = await response.json()
                    setData(data)
                    // console.log(isAdult)
                    console.log(data)
                }
        getData()
    },[isAdult])

  return (
        <div style={cardStyles}>
            {console.log(movieData)}
            {movieData.results.map(url => (
            <Card key={crypto.randomUUID()} style={{ width: '18rem' }}>
            <div>
                <Card.Img className="hover-card" variant="top" src={"https://image.tmdb.org/t/p/w500"+url.poster_path} />
            </div>
            <Card.Body>
                <div className="d-flex flex-column justify-content-between">
                    <div className="cardTitle">
                        <Card.Title>{url.original_title}</Card.Title>
                    </div>
                    <div className="cardText">
                        {url.overview}
                    </div>
                    <Button variant="primary">Go somewhere</Button>
                </div>
            </Card.Body>
            </Card>
            
            ))}
        <Paginations numOfPages={movieData.total_pages}/>
        </div>
  )
}