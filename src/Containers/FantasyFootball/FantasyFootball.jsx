import React from "react";
import styles from "./FantasyFootball.module.scss";
import PlayerCard from "../../Components/PlayerCard";
import Data from "../../Data/football-team.data.json";

const FantasyFootball = () => {
  return (
    <>
      {Data.map((player) => {
        <PlayerCard
          name={player.name}
          position={player.position}
          dob={player.dateOfBirth}
          nationality={player.nationality}
        />;
      })}
    </>
  );
};

export default FantasyFootball;
