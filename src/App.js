import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Draggable from './components/WorldMap.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {open:false, x: 0, y: 0};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
  move = (e) => this.setState(e);

  render() {
    const x = this.state.x;
    const y = this.state.y;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar
            onLeftIconButtonTouchTap={this.handleToggle}
            title="World Map" />
          <Drawer
            docked={true}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
			<h1>WW1 Information</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada metus euismod lectus consequat suscipit. Suspendisse in nibh odio. Suspendisse mollis odio at ante tincidunt sodales. Fusce molestie ut diam a consequat. Pellentesque pulvinar tempus sem, ac vestibulum ante varius et. Maecenas ut arcu vitae augue fringilla sagittis nec et tellus. Nulla eu massa pretium, ultrices neque ac, sollicitudin metus.</p>
          </Drawer>
          <Draggable x={x} y={y} onMove={this.move}>
            <img src={"map.PNG"} alt={"World Map"} className={"world-map"}/>
          </Draggable>
        </div>
      </MuiThemeProvider>

    );
  }
}
export default App;
