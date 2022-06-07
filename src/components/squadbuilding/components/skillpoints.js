import React from "react";

function SkillPoints(props) {
  const players = props.players;
  var totalpoints = 0;
  for (const [_key, player] of Object.entries(players)) {
    if (player !== undefined && player.id !== undefined && player.id !== null) {
      const avgpoints = (player.atk + player.def + player.spd) / 3;
      totalpoints += avgpoints;
    }
  }
  return (
    <div className="skillpoints">
      <div>{"Total skills"}</div>
      <div>{totalpoints}</div>
    </div>
  );
}

export default SkillPoints;
