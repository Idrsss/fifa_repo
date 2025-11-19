// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  const cardStyle = {
    width: "18rem",
    margin: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey #:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/300x400?text=No+Image",
};

export default Player;
