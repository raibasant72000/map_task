import * as React from 'react';
import ReactMapGL, { NavigationControl, GeolocateControl, Source, Layer } from 'react-map-gl';
import { BASIC_STYLE } from './Style';
import { usIncome } from './../../data/incomeData';
import { stateCapitals } from './../../data/stateCapitals';

import User from './User'

const initialState = {
  viewport: {
    height: 400,
    latitude: 37.776021,
    longitude: -122.4171949,
    width: 400,
    zoom: 3.5,
    mapStyle: BASIC_STYLE
  },
  userData: null,
  isLoading: false,
  error: null,
};


export default class Map extends React.Component {
  state = initialState;

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  _loadData = () => {
    this.setState({ isLoading: true });

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(userData => this.setState({ userData, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));

    this.setState({
      fillJson: fillJson, circleJson: circleJson
    });
  };
  updateViewport = (viewport) => {
    this.setState(prevState => ({
      viewport: { ...prevState.viewport, ...viewport },
    }));
  };

  resize = () => {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        height: window.innerHeight,
        width: window.innerWidth,
      },
    }));
  };

  render() {
    const { viewport, isLoading, error, userData } = this.state;
    console.log('userData', userData);

    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <div>
          <User userData={userData || {}} loadUser={this._loadData} />
        </div>
        <div className="view-map">
          <ReactMapGL
            {...viewport}
            onViewportChange={v => this.updateViewport(v)}
          >
            <Source id="my-data" type="geojson" data={stateCapitals}>
              <Layer
                id="point"
                type="circle"
                paint={{
                  'circle-radius': 5,
                  'circle-color': 'red'
                }} />
            </Source>
            <Source id="my-data" type="geojson" data={usIncome}>
              <Layer
                id="maine"
                type="fill"
                paint={{
                  'fill-color': '#e5e6df',
                  'fill-opacity': 0.8,
                }}

              />
            </Source>
            <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
              <NavigationControl onViewportChange={this.updateViewport} />
            </div>
          </ReactMapGL>
        </div>
      </div>

    );
  }
}


/*
  Build your React Map Component here.
  Feel free to use class or functional component
*/