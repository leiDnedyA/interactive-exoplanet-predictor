import './WorldModel.css';
import React from "react";
import WorldEngine from "../world_model/WorldEngine";

class WorldModel extends React.Component {
    constructor(props, state) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.world = new WorldEngine(this.canvasRef);
        this.world.start();
    }

    componentWillUnmount() {
        this.world.end();
    }

    render() {
        return <canvas id="model-canvas" ref={this.canvasRef}></canvas>
    }
}

export default WorldModel;
