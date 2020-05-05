import React from "react";
import styles from "./Weather.module.scss";
import LocationCard from "../../Components/LocationCard";
import Bristol from "../../Images/Bristol.jpg";
import London from "../../Images/London.jpg";
import Rome from "../../Images/Rome.jpg";
import CardColumns from "react-bootstrap/CardGroup";

const Weather = () => {
  return (
    <>
      <CardColumns>
        <LocationCard location={4749005} image={Bristol} />
        <LocationCard location={2643744} image={London} />
        <LocationCard location={4219762} image={Rome} />
      </CardColumns>
    </>
  );
};

export default Weather;
