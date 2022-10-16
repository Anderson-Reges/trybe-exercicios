import React from 'react';
import MyContext from '../context/myContext';
import '../styles/box.css';
class ColorBox extends React.Component {
  render() {
    const { nextColor, colors, colorIndex } = this.context;
    return (
      <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[colorIndex] } }
        onClick={ () => nextColor() }
      >
        Change my color!
      </button>
    );
  }
}
ColorBox.contextType = MyContext;
export default ColorBox;
