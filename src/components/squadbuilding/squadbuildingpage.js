import "../../styles.css";

import React, { useState } from "react";
import Select from "react-select";
import PitchComponent from "./components/pitch";
import Formation from "./components/formation";
import Playerpool from "./components/playerpool";
import { HTML5Backend } from "react-dnd-html5-backend";
import { players } from "../../data/players";
import { DragDropContext } from "react-beautiful-dnd";

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
  var formation = selectedOption.value;

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="formationSection">
          <div className="formationSelector">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={formations}
            />
          </div>
          <div>
            <div className="formationOverlay">
              <Formation formation={formation} />
            </div>
            <div className="pitchBackground">
              <PitchComponent />
            </div>
          </div>
        </div>
        <Playerpool />
      </div>
    </DragDropContext>
  );
}
export default SquadBuildingPage;
