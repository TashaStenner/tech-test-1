import React from "react";
import styles from "./PlayerCard.module.scss";
import player from "../../Images/player.png";
import Card from "react-bootstrap/Card";


const PlayerCard = (props) => {
const {name , position, dob, nationality} = props; 

  return (
    <>
      <Card style={{ width: "30vw", height: "40vh"  }} >
        <Card.Img variant="top" src={player} style={{ width: "100%", height: "50%" }}/>
          <Card.Body style={{ width: "80%", height: "100%"}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{`Position: ${position}`}</Card.Text>
            <Card.Text>{`Date of Birth: ${dob}`}</Card.Text>
            <Card.Text>{`Nationality: ${nationality}`}</Card.Text>
          </Card.Body>
      </Card>
    </>
  );
};

export default PlayerCard;
