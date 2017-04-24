import React from 'react';
import ReactDOM from 'react-dom';

class Draggable extends React.Component{
  constructor(props) {
	super(props);
    this.state = {relX: 0, relY: 0};
	this.onMouseDown=this.onMouseDown.bind(this);
	this.onMouseUp=this.onMouseUp.bind(this);
	this.onMouseMove=this.onMouseMove.bind(this);
  }
  
  onMouseDown(e) {
    if (e.button !== 0) return;
    const ref = ReactDOM.findDOMNode(this.refs.handle);
    const body = document.body;
    const box = ref.getBoundingClientRect();
    this.setState({
      relX: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
      relY: e.pageY - (box.top + body.scrollTop - body.clientTop)
    });
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    e.preventDefault();
  }
  
  onMouseUp(e) {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    e.preventDefault();
  }
  
  onMouseMove(e) {
	const body = document.body;
	var tempX = e.pageX - this.state.relX;
	var tempY = e.pageY - this.state.relY;
	if (tempX <= 0 && tempX + 4500 >= body.clientWidth) {
		this.props.onMove({x: tempX});
	} else {
		this.setState({relX:tempX});
	}
	if (tempY <= 0 && tempY + 2592 >= body.clientHeight) {
		this.props.onMove({y: tempY});
	} else {
		this.setState({relY:tempY});
	}
	e.preventDefault();
  }
  
  render() {
    return <div
      onMouseDown={this.onMouseDown}
      style={{
        position: 'absolute',
        left: this.props.x,
        top: this.props.y
      }}
      ref="handle"
    >{this.props.children}</div>;
  }
}

export default Draggable;