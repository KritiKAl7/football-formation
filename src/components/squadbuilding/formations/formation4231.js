import React from "react";
import Position from "../components/position";
import "./4231style.css";
function Formation4231(props) {
  const players = props.players;
  return (
    <div className="formation4231">
      <div className="attackLane4231">
        <Position player={players[0]} id={0} />
      </div>
      <div className="midLaneFront4231">
        <Position player={players[1]} id={1} />
        <Position player={players[2]} id={2} />
        <Position player={players[3]} id={3} />
      </div>
      <div className="midLaneBack4231">
        <Position player={players[4]} id={4} />
        <Position player={players[5]} id={5} />
      </div>
      <div className="backLane4231">
        <Position player={players[6]} id={6} />
        <Position player={players[7]} id={7} />
        <Position player={players[8]} id={8} />
        <Position player={players[9]} id={9} />
      </div>
      <div className="gkLane4231">
        <Position player={players[10]} id={10} />
      </div>
    </div>
  );
}

export default Formation4231;
