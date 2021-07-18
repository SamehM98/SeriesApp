import React, { useState, useEffect } from 'react';
import discover from '../api/discover';
import 'tachyons';
import Bar from './bar';
import tv from '../api/tv';
import Grid from './grid';
import SearchBox from './SearchBox';
import search from '../api/search'

function TopRated() {

  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('');

  const searchApi = async () => {
    //console.log('Hi there!');
    try {
        const response = await tv.get('/top_rated', {
          params: {
            api_key: '4e9c97333891ad6c4387325587047af2',
            original_language: 'en'
          }
        });

      console.log(response.data.results.slice(0,5));
      setResults(response.data.results.slice(0,15));
      
    } catch (err) {
      console.log('Something went wrong');
    }
    
    
  };

  useEffect( () => {
    searchApi()
  }, []);

  const searchname = async term => {
    //console.log('Hi there!');
    try {
        const response = await search.get('',{
          params: {
            api_key: '4e9c97333891ad6c4387325587047af2',
            query: term
          }
        });
      
        setResults(response.data.results.filter((element) => element.poster_path != null));
        console.log(response.data);

        
      } catch (err) {
        console.log('Something went wrong');
      }
    
    
  };


  const onSearchChange = (event) => {
      console.log(event.target.value);
    setTerm(event.target.value)
  }


  return (
    <div className="tc pv4"  style={{backgroundColor: 'black'}}>
      <SearchBox searchChange={onSearchChange} goahead={() => searchname(term)}/>
      <Grid shows={results}/>
    </div>
  );
}

export default TopRated;