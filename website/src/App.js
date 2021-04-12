import React, { useEffect, useState } from 'react';
import {getHomeList, getMovieInfo} from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() =>{
    const loadAllData = async () =>{

      let list = await getHomeList();
      console.log(list)
      setMovieList(list);
    

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    


    loadAllData();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll',scrollListener);
    }
  }, []);



  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featureData && 
      <FeaturedMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <Footer className="footer"/>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://ik.imagekit.io/pascoalini/Netflix_LoadTime_F24n2o95y.gif" alt="loading"></img>
        </div>
      }

    </div>


  );
}

export default App;