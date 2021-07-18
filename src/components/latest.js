import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Grid from './grid';
import tv from '../api/tv';
import discover from '../api/discover';

function Latest() {
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        //console.log('Hi there!');
        try {
          const response = await tv.get('/on_the_air', {
            params: {
              api_key: '4e9c97333891ad6c4387325587047af2',
            }
          });
    
         console.log(response.data);
         setResults(response.data.results.filter((element) => element.poster_path != null));
          
        } catch (err) {
          console.log('Something went wrong');
        }
        
        
      };


      useEffect( () => {
        searchApi()
      }, []);

      
      return (
        <div className="tc pv4"  style={{backgroundColor: 'black'}}>
          <Grid shows={results}/>
        </div>
      );

};

export default Latest;