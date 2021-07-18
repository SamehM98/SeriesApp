# SeriesApp

All data used is fetched from TMDP API.

The user is welcomed with a screen of trending TV shows displayed in a grid, the user can navigate to the Top Rated or Trending shows from the bar Above.

![image](https://user-images.githubusercontent.com/66166781/126064034-79a81561-9302-4eef-ab1e-3177db3dbb0a.png)

In addition, the user can search both by title and by genre

![image](https://user-images.githubusercontent.com/66166781/126064079-f50e0206-3702-42c4-9bd0-3c91152b0df2.png)
![image](https://user-images.githubusercontent.com/66166781/126064097-b2ad35b5-9584-405b-ada0-518dbd86c7f7.png)

Upon clicking on a show, the user is navigated to a screen with details about the show; rating, description, etc.
![image](https://user-images.githubusercontent.com/66166781/126064111-0ba26137-b2d7-42b6-8240-e1f36a2e4f5d.png)

The user can also click on the "More like this" for similar recommendations; displayed in a grid view in a similar manner; or navigate to that series homepage

To facilitate navigation; the react-router library is used with Switch and link, switching between components; with the Route passing paramaters as a wildcard in terms of show ID.

![image](https://user-images.githubusercontent.com/66166781/126064172-154866c8-d32f-4c55-9141-12c73fa152e4.png)
