import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <Card style={{ width: "100%" , height:"50px"}} className='my-5'>
      <div className="d-flex justify-content-center align-items-center">
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
        <img src="/image.png" alt="TMDB Logo" width={70} />
      </div>
    </Card>
  );
}
