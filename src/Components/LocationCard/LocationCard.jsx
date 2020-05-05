import React, { useState, useEffect } from "react";
import styles from "./LocationCard.module.scss";
import Card from "react-bootstrap/Card";

const LocationCard = (props) => {
  const { location, image } = props;
  const [name, setName] = useState();
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();

  useEffect(() => {
    getLocationDetails(location);
  });

  const getLocationDetails = (location) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${location}&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d`
    )
      .then((result) => result.json())
      .then((result) => {
        return (
          setName(result.name),
          setTemperature(result.main.temp),
          setHumidity(result.main.humidity),
          setMaxTemp(result.main.temp_max),
          setMinTemp(result.main.temp_min)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card border="info" style={{ width: "18rem" }} className="text-white">
        <Card.Img variant="top" src={image}/>
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{`Temp ${temperature}°C`}</Card.Text>
            <Card.Text>{`Humidity ${humidity}%`}</Card.Text>
            <Card.Text>{`Max temp ${maxTemp}°C`}</Card.Text>
            <Card.Text>{`Max temp ${minTemp}°C`}</Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default LocationCard;
