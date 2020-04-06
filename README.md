TASK:  Create a mapping application using react-map-gl.  The webpack config, package json, and bable presets have been set up for you along with boilerplate index.html and index.js.  Render your app in the container div of the index.html file.  Use index.js as the webpack entry file.

Please note:  this challenge is not meant to take a lot of time.  Qualified candidates should be able to work through this in a few hours.  If for some reason you can not complete a task move on and do what you can.  We will review partial submissions.

To submit: Add the finished app to a personal github / gitlab repo that we can access.

A Screen Shot of what the finished application should look like is provided in src/

1. Obtain a free key from https://cloud.maptiler.com/account/keys and add it to the BASIC_STYLE found in Style.js
  2. Import the BASIC_STYLE from Style.js and set to state as mapStyle
  2. Create a viewport object with the following keys: width, height, latitude, longitude, zoom and set to state as viewport
3. Create a Map component that renders <MapGL /> or <ReactMapGl /> imported from react-map-gl.  
  * See the documentation at https://uber.github.io/react-map-gl/ 
  * The map should be interactive so a user can pan and zoom around the map 
  * You do not need a mapbox account key, instead use the key from maptiler (step 1) and apply it to the BASIC_STYLE
  * place the <MapGl /> component in a container div and include height and position as inline styles
4.  After the Map loads add a new geojson layer (type fill) and geojson source for U.S. Income data
  * Use the usIncome geojson data found in src/data/incomeData.js
5.  Add an additional layer (type circle) for the state capitals
  * Use the stateCapitals data found in src/data/stateCapitals.js
6. Use scss or css to style the map container div to something similar in the provided screen shot
  * leave the inline style as is, we want to see this, but add additional styling with your style sheet
8. Add the react-map-gl navigation controls
9. Add a child component that does the following:
  * fetch fake data from https://jsonplaceholder.typicode.com/
  * render the data above the map as shown in provided screen shot
  * create a button that will render your name and date when clicked

BONUSE POINTS

* Add a mapbox expression to style the us state capital layer points so that the circle-radius value of the point increases as a user zooms in (this results in the points rendering larger as the user zooms in)

Reference:
Mapbox web gl style spec: https://docs.mapbox.com/mapbox-gl-js/style-spec/
React Map Gl: https://uber.github.io/react-map-gl/
