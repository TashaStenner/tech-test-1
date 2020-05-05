import React from "react";
import styles from "./Weather.module.scss";
import LocationCard from "../../Components/LocationCard";
import Bristol from "../../Images/Bristol.jpg";
import London from "../../Images/London.jpg";
import Rome from "../../Images/Rome.jpg";
import Cairns from "../../Images/Cairns.jpg";
import Shuzenji from "../../Images/Shuzenji.jpg";
import MountainView from "../../Images/mountain view.jpg";
import CardColumns from "react-bootstrap/CardColumns";

const Weather = () => {
  return (
    <>
      <CardColumns>
        <LocationCard location={4749005} image={Bristol} />
        <LocationCard location={2643744} image={London} />
        <LocationCard location={4219762} image={Rome} />
        <LocationCard location={2172797} image={Cairns} />
        <LocationCard location={1851632} image={Shuzenji} />
        <LocationCard location={420006353} image={MountainView} />
      </CardColumns>
    </>
  );
};

export default Weather;
