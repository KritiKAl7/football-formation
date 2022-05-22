import "../../styles.css";

import React, { useState } from "react";
import Select from "react-select";
import PitchComponent from "./components/pitch";
import Formation from "./components/formation";
import Playerpool from "./components/playerpool";
import { DragDropContext } from "react-beautiful-dnd";
import { players } from "../../data/players.js";
import { Button } from "antd";

const formations = [
  { value: "4-4-2", label: "4-4-2" },
  { value: "4-3-3", label: "4-3-3" },
  { value: "4-5-1", label: "4-5-1" },
  { value: "3-5-2", label: "3-5-2" },
  { value: "4-2-3-1", label: "4-2-3-1" }
];

function SquadBuildingPage() {
  const [selectedOption, setSelectedOption] = useState({
    value: "4-4-2",
    label: "4-4-2"
  });

  const [poolplayer, setPoolPlayer] = useState(players);

  const [formationplayer, setFormationPlayer] = useState({});
  function resetFormation() {
    setPoolPlayer(players);
    setFormationPlayer({});
  }
  function onChangeFormation(option) {
    setSelectedOption(option);
    return option;
  }

  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (Number(source.droppableId) > 25) {
      // This means the interaction is between pool and pitch
      const sourcePlayer = poolplayer[source.index];

      setFormationPlayer((prevformationplayer) => ({
        ...prevformationplayer,
        [destination.droppableId]: sourcePlayer
      }));

      const destPlayer = formationplayer[Number(destination.droppableId)];

      setPoolPlayer((prevPoolPlayer) => ({
        ...prevPoolPlayer,
        [source.index]: destPlayer
      }));
    } else {
      // Between formation grid swapping
      const sourcePlayer = formationplayer[source.index];
      const destinationPlayer =
        formationplayer[Number(destination.droppableId)];
      setFormationPlayer((prevformationplayer) => ({
        ...prevformationplayer,
        [destination.droppableId]: sourcePlayer
      }));
      setFormationPlayer((prevformationplayer) => ({
        ...prevformationplayer,
        [source.droppableId]: destinationPlayer
      }));
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="formationSection">
          <div className="formationSelector">
            <Select
              defaultValue={selectedOption}
              onChange={onChangeFormation}
              options={formations}
            />
            <Button type="primary" onClick={resetFormation}>
              Reset
            </Button>
          </div>
          <div>
            <div className="formationOverlay">
              <Formation
                formation={selectedOption.value}
                players={formationplayer}
              />
            </div>
            <div className="pitchBackground">
              <PitchComponent />
            </div>
          </div>
        </div>
        <Playerpool players={poolplayer} />
      </div>
    </DragDropContext>
  );
}
export default SquadBuildingPage;
