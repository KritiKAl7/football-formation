import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Position(props) {
  const player = props.player;
  const id = props.id;
  return (
    <Droppable droppableId={id.toString()} key={id.toString()} index={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {player ? player.name : null}
          {player ? (
            <Draggable
              draggableId={id.toString() + "f"}
              key={id.toString() + "f"}
              index={id}
              isDragDisabled={player === null || player === undefined}
            >
              {(provided) => (
                <div
                  className="playerpoolcandidate"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {player ? <img src={player.image} alt="profile" /> : null}
                </div>
              )}
            </Draggable>
          ) : (
            <div className="playerpoolcandidate" />
          )}

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
