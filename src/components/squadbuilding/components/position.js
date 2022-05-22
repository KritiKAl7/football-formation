import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import img from "../../../../assets/Frame 1218small.png";

function Position(props) {
  const player = props.player;
  return (
    <Droppable droppableId="list">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {"player.name"}
          <div className="playerpoolcandidate">
            <img src={"img"} alt="profile" />
          </div>
          {props.positionName}
          <div style={{ visibility: "hidden", height: 0 }}>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default Position;
