import React from 'react';
import Particles from "react-particles-js"; 
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = "/api/jobs";

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCb(json); 
}

function App() {

  const [jobList, updateJobs] = React.useState([]); 

React.useEffect(() => {
  fetchJobs(updateJobs);
}, [])

  return (
    <div className="App">
      <Particles 
      className='particles' 
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
