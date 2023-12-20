import React, {useState, useEffect} from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App () {
  const [loading, setLoading] = useState (true);
  const [tours, setTours] = useState ([]);

  const removeTour = id => {
    const newTours = tours.filter (tour => tour.id != id);
    setTours (newTours);
  };

  const fetchTours = async () => {
    // will use later
    setLoading (true);
    try {
      const response = await fetch (url);
      const tours = await response.json ();
      setLoading (false);
      setTours (tours);
    } catch (error) {
      setLoading (false);
      console.log (error);
    }
  };
  useEffect (() => {
    fetchTours ();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours Left</h2>
          <button
            type="button"
            style={{marginTop: '2rem'}}
            className="btn"
            onClick={() => fetchTours ()}
          >
            Refetch Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
