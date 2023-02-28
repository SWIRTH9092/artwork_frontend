### Project 4 - Grandma's Artwork Collection

##### Description

The purpose of this project is to display artwork that Grandma collected or made through the years.  



##### Front End
- Live Site Link: https://sw-artworks-frend.onrender.com
- Github Link:  https://github.com/SWIRTH9092/artwork_frontend

##### Back End
- Live Site Link: https://sw-artworks-bkend.onrender.com
- Github Link: https://github.com/SWIRTH9092/artwork_backend

##### Features
- This application features a full crud app to be able to:
    1. Show all Artworks
    2. To be able to add an Artwork
    3. To be able to show the information for one artwork
    4. To be able to update the information for one artwork
    5. To be able to delete the information for one artwork
- Responsive Design
- Calls an Python API backend for the data to display

##### Trello Board 
- Link:  https://trello.com/b/0dm5uokQ/grandmas-artwirj-collection

##### Wireframes
<img src="https://i.imgur.com/AmOKKvx.jpg" alt="Wireframes for activity tracker" title="activity Tracker" width="100%"/>

##### Grandma's Artwork Collection

- website
<img src="https://i.imgur.com/YakObTM.jpg" alt="website" title="website" width="100%"/>

- responsive
<img src="https://i.imgur.com/iSIbWqk.jpg" alt="website" title="website" width="100%"/>

##### Dependencies Used
- Node
- Express
- React Router
- React Router Dom
- Styled Components
- rest API backend for artwork data


#### Routes

Activity Routes
- index - "" 
- show - id    
- create - create/
- update - update/:id
- delete - delete/:id


##### Component Tree
<img src="https://i.imgur.com/Rthjvri.jpg" alt="Front-end Component Tree" title="Component Tree" width="90%"/>

##### Component List
- App.js
- actions.js
    - actionsCreate
    - actionsUpdate
    - actionsDelete
- components
    - Header.js
    - Footer.js
- loaders.js
    - indexLoader
    - showLoader
- router.js

##### Stretch Goals
- add authorization to application
