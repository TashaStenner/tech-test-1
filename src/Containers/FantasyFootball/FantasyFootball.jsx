import React from "react";
import styles from "./FantasyFootball.module.scss";
import PlayerCard from "../../Components/PlayerCard";
import Data from "../../Data/football-team.data.json";

const FantasyFootball = () => {
  let selectedPlayers = [];
  let playerId = [];

  return (
    <>
      <div className={styles.pitch}>
        <section className={styles.selctionTable}>
          {Data.map((player) => (
            <PlayerCard
              name={player.name}
              position={player.position}
              dob={player.dateOfBirth}
              nationality={player.nationality}
            />
          // (playerId = [...playerId += player.id])
          ))}
        </section>
        <section className={styles.mySelectedTeam}>
          <h2>Select Your Team</h2>
          <h3> Rules:</h3>
          <ol>
            <li>You can only have 1 Goal Keeper</li>
            <li>You can only have 3 Defenders</li>
            <li>You can only have 4 Midfielders</li>
            <li>You can only have 3 Attackers</li>
            <li>You can only select each player once</li>
          </ol>
        </section>
      
      </div>
    </>
  );
};

export default FantasyFootball;
