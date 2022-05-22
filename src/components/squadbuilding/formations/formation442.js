import React from "react";
import Position from "../components/position";
import "./442style.css";
function Formation442(props) {
  const players = props.players;

  return (
    <div className="formation442">
      <div className="attackLane442">
        <Position player={players[0]} id={0} />
        <Position player={players[1]} id={1} />
      </div>
      <div className="midLane442">
        <Position player={players[2]} id={2} />
        <Position player={players[3]} id={3} />
        <Position player={players[4]} id={4} />
        <Position player={players[5]} id={5} />
      </div>
      <div className="backLane442">
        <Position player={players[6]} id={6} />
        <Position player={players[7]} id={7} />
        <Position player={players[8]} id={8} />
        <Position player={players[9]} id={9} />
      </div>
      <div className="gkLane442">
        <Position player={players[10]} id={10} />
      </div>
    </div>
  );
}

export default Formation442;
