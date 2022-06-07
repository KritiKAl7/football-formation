import React from "react";
import { Droppable } from "react-beautiful-dnd";

function Trashbin(props) {
  return (
    <Droppable droppableId={"trash"} key={"trash"} index={100}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div className="playerpoolcandidate" ref={props.innerRef}>
            {"Trashbin"}
          </div>
          <div style={{ visibility: "hidden", height: 0 }}>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default Trashbin;
