import React, { useState, useEffect } from 'react';
import findgenre from '../api/findgenre';
import './genre.css'
import Grid from './grid'
import discover from '../api/discover';

let mygenres = [];

const ByGenre = () => {
    const [result, setResult] = useState(null);

    const [results, setResults] = useState([]);

    const getResult = async () => {
        //console.log('Hi there!');
        try {
          const response = await findgenre.get('/list', {
            params: {
              api_key: '4e9c97333891ad6c4387325587047af2'
            }
          });
        
          setResult(response.data.genres);
         // console.log(response.data);

          
        } catch (err) {
          console.log('Something went wrong');
        }
        
        
      };

      const searchAPI = async () => {
        //console.log('Hi there!');
        try {
          const response = await discover.get('/tv', {
            params: {
              api_key: '4e9c97333891ad6c4387325587047af2',
              with_genres: mygenres.toString()
            }
          });
        
          setResults(response.data.results);
          //console.log(response.data);

          
        } catch (err) {
          console.log('Something went wrong');
        }
        
        
      };




      useEffect( () => {
        getResult();
      }, []);

      function handleChange(event) {
        console.log(event);

        if(event.target.checked == true)
        {
            mygenres.push(event.target.id);
            console.log(mygenres.toString());
        }
        else
        {
            mygenres = mygenres.filter(e => e !== event.target.id);
            console.log(mygenres.toString());
        }
        
      }

      const single = (array) => array.map((agenre,i) => {
        
       // console.log(agenre.name);
        
        
        return (
            <div style={{display: 'inline'}} className="mx-3 my-2">
  <input type="checkbox" onChange={handleChange} id={agenre.id}/>
  <label>{agenre.name}</label>
        </div>  
         );
    }) ;

    if(result)
      return (
      <div style={{backgroundColor: 'black' , minHeight: '100vh'}}>
      <div className="py-4">{single(result)}</div>
      <button class="btn btn-primary mx-4 btn-lg" onClick={searchAPI}>Search</button>
      <div className="tc pv4" >
      <Grid shows={results} />
      </div>
      </div>);
    else
    return(<div style={{backgroundColor: 'black' , minHeight: '100vh'}}>
    <h1 style={{color: 'white'}}>Loading..</h1>
    </div>);
}

export default ByGenre;