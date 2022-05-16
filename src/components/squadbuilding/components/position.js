import React from "react";

function Position(props) {
  return (
    <div className="position">
      {props.playerName}
      <div className="positionSpace" />
      {props.positionName}
    </div>
  );
}

export default Position;
