import React, { useState, useEffect } from 'react';
import tv from '../api/tv';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './detail.css'

const Detail = ({id}) =>{

    const [result, setResult] = useState(null);

    const getResult = async id => {
        //console.log('Hi there!');
        try {
          const response = await tv.get(`/${id}`, {
            params: {
              api_key: '4e9c97333891ad6c4387325587047af2'
            }
          });
        
          setResult(response.data);
          console.log(response.data);

          
        } catch (err) {
          console.log('Something went wrong');
        }
        
        
      };

      useEffect( () => {
        getResult(id);
      }, [id]);


      function getgenres (array){

        var i = 0;
        var val = "";
        var len = array.length;

        array.forEach(element => {

          val += element.name;

          if(i != len-1)
          val+= ' -'

          i++;
        })
        
        return val;
      }

      if(!result)
      {
      return(<div style={{backgroundColor: 'black' , minHeight: '100vh'}}>
      <h1 style={{color: 'white'}}>Loading..</h1>
      </div>);
      }
      else
      {

        var imgsrc='https://www.themoviedb.org/t/p/w500/' + (result.poster_path);

        return(
          <div style={{backgroundColor: 'black' , minHeight: '100vh'}}>
          <div class="container py-5">
          <div class="row">
            <div class="col-3">
            <img src={imgsrc}/>
            </div>
            <div class="col-6 p-2">
              <h1>{result.name}</h1>
              <h6>{getgenres(result.genres)}</h6>
              <h6>{`${result.number_of_seasons} seasons - ${result.number_of_episodes} episodes`}</h6>
              <br/>
              <p>{result.overview}</p>
              <br></br>
              <Link to={{ pathname: `${result.homepage}`}} target="_blank">
              <button class="mx-2" href="https://www.imdb.com/title/tt0440963/">Homepage</button>
              </Link>
              <Link to={`/recommend/${result.id}`}>
              <button class="mx-2">More like this</button>
              </Link>
            </div>
          <div class="col-3 rating">
            <img src="http://pngimg.com/uploads/star/star_PNG41474.png" class="star"></img>
            <span class="rating">{result.vote_average}</span>
          </div>

          </div>
          
          </div>
          </div>)
      }
      

}

export default Detail;