import React from "react";
import Position from "../components/position";
import "./451style.css";
function Formation451(props) {
  const players = props.players;
  return (
    <div className="formation451">
      <div className="attackLane451">
        <Position player={players[0]} id={0} />
      </div>
      <div className="midLane451">
        <Position player={players[1]} id={1} />
        <Position player={players[2]} id={2} />
        <Position player={players[3]} id={3} />
        <Position player={players[4]} id={4} />
        <Position player={players[5]} id={5} />
      </div>
      <div className="backLane451">
        <Position player={players[6]} id={6} />
        <Position player={players[7]} id={7} />
        <Position player={players[8]} id={8} />
        <Position player={players[9]} id={9} />
      </div>
      <div className="gkLane451">
        <Position player={players[10]} id={10} />
      </div>
    </div>
  );
}

export default Formation451;
