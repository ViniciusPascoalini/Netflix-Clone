import React, { useEffect, useState } from 'react';
import getHomeList from './Tmdb';

const App = () => {

  const [movieList, setMovieList] = useState([]);


  useEffect(() =>{
    const loadAll = async () =>{

      let list = await getHomeList();
      setMovieList(list);
    }
    
    loadAll();
  }, []);


  return (
    <div>
      Olá Mundo!
    </div>
  );
}

export default App;