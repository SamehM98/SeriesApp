import React, { useState, useEffect } from 'react';
import discover from '../api/discover';
import 'tachyons';
import Bar from './bar';
import Grid from './grid';
import SearchBox from './SearchBox';
import search from '../api/search';
function Searchbyname() {

    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);

  const searchApi = async term => {
    //console.log('Hi there!');
    try {
        const response = await search.get('',{
          params: {
            api_key: '4e9c97333891ad6c4387325587047af2',
            query: term
          }
        });
      
        setResult(response.data.results.filter((element) => element.poster_path != null));
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
    <div className="tc pv4"  style={{backgroundColor: 'black' }}>
        <SearchBox searchChange={onSearchChange} goahead={() => searchApi(term)}/>
        <Grid shows={result}/>
    </div>
  );
}

export default Searchbyname;