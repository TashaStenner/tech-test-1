import React from "react";
import styles from "./PlayerCard.module.scss";
import player from "../../Images/player.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PlayerCard = (props) => {
  const { name, position, dob, nationality } = props;
  const convertedDob = dob.substring(0,10).replace("-", " ").split(" ").reverse().join(" ");

  return (
    <>
      <Card style={{ width: "20vw", height: "40vh", color: "white", margin: "8px"}}>
        <Card.Img
          variant="top"
          src={player}
          style={{ width: "100%", height: "100%" }}
        />
        <Card.ImgOverlay>
          <Card.Body style={{ width: "80%", height: "60%" , padding: "2px"}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{`Position: ${position}`}</Card.Text>
            <Card.Text>{`Date of Birth: ${convertedDob}`}</Card.Text>
            <Card.Text>{`Nationality: ${nationality}`}</Card.Text>
            <Button style={{color: "black", backgroundColor:"Yellow", border:"2px solid black", marginTop: "4px"}} >Select Player</Button>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default PlayerCard;
