import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: "Mahindra",
            model: "SUV",
            color: "Red",
            year: "2022"

        };
    }
    changeColor = () => {
        this.setState({ color: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} color and {this.state.model} from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}
export default Car;