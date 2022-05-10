import React from "react";
import Playerpoolcandidate from "./playerpoolcanditate.js";
import profile from "../../assets/Frame 1218small.png";
import { DragPreviewImage, useDrag } from "react-dnd";

function Playerpool(props) {
  const players = [
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1",
    "player1"
  ];
  var groupSize = 5;
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));
  var rows = players
    .map(function (content) {
      // map content to html elements
      return (
        <>
          <DragPreviewImage connect={dragPreview} src={profile} />
          <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div ref={drag}>
              <Playerpoolcandidate />
            </div>
          </div>
        </>
      );
    })
    .reduce(function (r, element, index) {
      index % groupSize === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map(function (rowContent) {
      // surround every group with 'row'
      return <div className="playerpoolrow">{rowContent}</div>;
    });
  return (
    <div className="playerpool">
      <div className="playerpoolcontent">{rows}</div>
    </div>
  );
}

export default Playerpool;
