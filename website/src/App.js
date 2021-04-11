import React, { useEffect, useState } from 'react';
import {getHomeList, getMovieInfo} from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

import './App.css';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);


  useEffect(() =>{
    const loadAllData = async () =>{

      let list = await getHomeList();
      setMovieList(list);
    

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    


    loadAllData();
  }, []);


  return (
    <div className="page">

      {featureData && 
      <FeaturedMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;