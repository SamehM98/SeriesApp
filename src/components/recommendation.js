import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Grid from './grid';
import tv from '../api/tv';

const Recommendation = ({id}) =>{

    const [result, setResult] = useState(null);

    const getResult = async id => {
        //console.log('Hi there!');
        try {
          const response = await tv.get(`/${id}/recommendations`, {
            params: {
              api_key: '4e9c97333891ad6c4387325587047af2'
            }
          });
        
          setResult(response.data.results);
          console.log(response.data);

          
        } catch (err) {
          console.log('Something went wrong');
        }
        
        
      };

      useEffect( () => {
        getResult(id);
      }, [id]);

      if(!result)
      {
      return(<div style={{backgroundColor: 'black' , minHeight: '100vh'}}>
      <h1 style={{color: 'white'}}>Loading..</h1>
      </div>);
      }
      else
      return<div className="tc pv4"  style={{backgroundColor: 'black'}}>
      <Grid shows={result}/>
    </div>



}

export default Recommendation;