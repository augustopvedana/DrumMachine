import React from "react";
import { DrumPad } from "./DrumPad";
import samples from "../samplesData";


export class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = samples;
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        // will click the button when the corresponding key pressed
        window.addEventListener('keypress', this.handleKeyPress);
    }
    // handler for the click button on the DrumPad Component
    handleButtonClick(key, song) {
        return () => {
            document.getElementById(key).play();
            this.setState({
                currentSongText: song,
            });
        };
    }
    render() {
        return (
            <div id="drum-machine">
                <div className="app_title">
                    <h1>Drum Machine App</h1>
                </div>
                <div className="display-container">
                    <div id="display-pads">
                        {this.state.drumPads.map(item => (
                            <DrumPad
                                song={item.song}
                                key={item.key}
                                drumKey={item.key}
                                handleClick={this.handleButtonClick}
                                url={item.url}
                            />
                        ))}
                    </div>
                    <p id="display" className="current-text">{this.state.currentSongText}</p>
                </div>
            </div>
        );
    }
    // eslint-disable-next-line react/no-typos
    componentWillUnMount() {
        window.removeEventListener('keypress', this.handleKeyPress);
    }

    handleKeyPress(e) {
        const pad = this.state.drumPads.find(
            item => item.key === e.key.toUpperCase(),
        );
        // click the button
        if (pad) document.getElementById(pad.song).click();
    }
}


