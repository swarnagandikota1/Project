import React, { useEffect, useState } from 'react';
import { fetchItems } from './Store/action';
import store from './Store/store';
import '../src/App.css';
import mapicon from '../src/Icons/map.png';

function App() {
  const [state, setState] = useState(store.getState());
  const [regionId, setRegionId] = useState('');

  useEffect(() => {
    // Subscribe to store updates
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  }, []);


  const handleFetchData = () => {
    store.dispatch(fetchItems(regionId));
  };

  // Fetch data from the state
  const { loading, items, error } = state;

  useEffect(() => {
    if (state.items && state.items.data) {
      const points = state.items.data.map((result) => [
        51.505, -0.09,
        result?.intensity?.forecast,
      ]);
      if (window.updateMapData) {
        window.updateMapData(points);
      }
    }
  }, [state.items]);

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='loading'>Error: {error}</p>;

  return (
    <div className='div'>
      <div className='display'>
        <img className='mapicon' src={mapicon} width="50" height="50" alt="mapicon"></img>
        <header className='header'>Intensity of Carbon</header>
      </div>
      <p className='para'>Enter your Region ID:</p>
      <input
        type="text"
        value={regionId}
        onChange={(e) => setRegionId(e.target.value)}
        placeholder="Enter region ID here"
        className='input'
      />
      <button onClick={handleFetchData} className='button'>submit</button>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <p className="text">
          Entered Region Name:
          <span className="para"> {state.items?.shortname}</span>
        </p>
      </div>
      {items?.data?.map((result) => (
        <p className="text" key={result.regionid || Math.random()} >
          Intensity:
          <span className="para" style={{ color: 'red' }}> {result?.intensity?.forecast}</span>
        </p>
      ))}
      <p>Note:Enter the Region name in search bar you can the location with heat maps</p>
    </div>
  );
}

export default App;
