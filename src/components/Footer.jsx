import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#1c1c1c",
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      className="mt-5"
    >
      <div className="d-flex justify-content-center align-items-center gap-3">
        <p className="mb-0 fw-bold" style={{ fontSize: "14px" }}>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
        <img
          src="/image.png"
          alt="TMDB Logo"
          width={60}
          style={{ filter: "grayscale(100%)", opacity: "0.8" }}
        />
      </div>
    </Card>
  );
}
