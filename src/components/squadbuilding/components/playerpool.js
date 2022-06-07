import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Playerpool(props) {
  const availableplayers = props.players;
  const playerpool = Object.entries(availableplayers).map(function (
    [key, player],
    index
  ) {
    const droppableID = Number(key) + 30;

    if (player !== undefined && player.id !== undefined && player.id !== null) {
      return (
        <div key={key}>
          <Droppable
            droppableId={droppableID.toString()}
            isDropDisabled={true}
            key={player.id.toString()}
          >
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable
                  draggableId={key.toString()}
                  key={player.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="playerpoolcandidate"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img src={player.image} alt="profile" />
                    </div>
                  )}
                </Draggable>
                <div style={{ visibility: "hidden", height: 0 }}>
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      );
    } else {
      return <div className="playerpoolcandidate" key={key}></div>;
    }
  });

  return (
    <div className="playerpool">
      <div className="playerpoolcontent">{playerpool}</div>
    </div>
  );
}

export default Playerpool;
