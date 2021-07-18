import React from 'react';

const Bar = ({current}) => {



return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark"
>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto w-100 justify-content-between">
    <li class="nav-item" id="Trending">
      <a class="nav-link" href="/">Trending</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/toprated">Top Rated</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/latest">Airing Now</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/bygenre">Browse by Genre</a>
    </li>
 </ul>   
</div>
</nav>

);


}

export default Bar;