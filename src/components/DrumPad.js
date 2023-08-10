import React from "react";

export const DrumPad = ({ drumKey, song,handleClick,url }) => {
    return (
        <button className="drum-pad" id={song} onClick={handleClick(drumKey,song)}>
            {drumKey}
            <audio className="clip" src={url} id={drumKey}/>
        </button>
    );
};