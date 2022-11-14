import React from "react";
import CarsContext from './CarsContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side
      }
    })
  };

  render() {
    const carsSet = {
      ...this.state,
      moveCar: this.moveCar
    }
    const { children } = this.props;
    return (
      <div>
        <CarsContext.Provider value={carsSet}>
          {children}
        </CarsContext.Provider>
      </div>
    )
  }
}

export default Provider;
