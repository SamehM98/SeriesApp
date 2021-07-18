import React from 'react';
import Detail from './Detail';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import TopRated from './TopRated';

const Grid = ({shows}) => {

    

    

    const single = shows.map((show,i) => {
        
        var imgsrc='https://www.themoviedb.org/t/p/w300/' + (show.poster_path);
        var title = (show.name);
        var id= show.id;

        function showspan () {console.log(id)};
        const gotodetail = () => {return <Link to={`/show/${id}`} />}
        
        
        return (<Link to={`/show/${id}`}>
        <img src={imgsrc} className="pa3 grow" title={title}/>
        </Link>);
    });

    return (
        <div className="ph3">
            {single}
        </div>

    )

}

export default Grid;