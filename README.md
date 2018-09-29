# ResumeOL

## Structures

```
╔══════════════════════╗           ╔═══════════╗ 
║      Components      ║-----------║   App.js  ║
╚══════════════════════╝           ╚═══════════╝       
           |                             |
           |                  ╔════════╗   ╔════════╗                             
           |                  ║ Navbar ║   ║ Router ║                             
           |                  ╚════════╝   ╚════════╝                             
           |                             |           
╔══════════════════════╗ ╔══════════════════════════╗ ╔═══════════════════════╗  
║    Resume Component  ║ ║ Authentication Component ║ ║     Post Component    ║  
╚══════════════════════╝ ╚══════════════════════════╝ ╚═══════════════════════╝
           |                          |                           |
╔══════════════════════╗ ╔══════════════════════════╗ ╔═══════════════════════╗  
║    Resume Actions    ║ ║  Authentication Actions  ║ ║      Post Actions     ║  
╚══════════════════════╝ ╚══════════════════════════╝ ╚═══════════════════════╝
           |\                         /\                         /|        
╔════════════════════════════════╗                          ╔═══════════╗ 
║   States Maintaned by Redux    ║                          ║   axios   ║
╚════════════════════════════════╝                          ╚═══════════╝     
                                                                  |
                                                                  |
-------------------------------------------------------------------------------
                                                                  |
                                                                  |
                ╔══════════════════════╗  ╔═══════════╗           |  
                ║  Resume/Auth/Info    ║__║   Router  ║           | 
                ╚══════════════════════╝  ║   Express ║   \  ╔═══════════╗
                            |             ╚═══════════╝      ║ Server.js ║
                            |                                ╚═══════════╝
                            |                                     |
                    ╔═══════════════════╗      ╔══════════╗       |
                    ║ Schema by Mongoose║  --- ║ MongoDB  ║ ------| 
                    ╚═══════════════════╝      ╚══════════╝
```



# Frontend

Frontend is based on React, mainly divided for three components:

|1| Resume 

|2| Authentication

|3| Information

All three are in client/src/component

The components routing is achieved by React-Router and the global states are maintained by React-Redux.

The asynchronous actions is mainly achived by client/src/actions and client/src/reducers

How a request is sent from frontend to backend:
 
- Components call actions (Resume/Authentication/Information).
- Actions send HTTP requests to the server.
- The server sends back the response.
- Actions process the responses and update states.
- Components update with updated states.


# Backend

Backend is implemted by Node.js/Express with Mongoose connecting MongoDB hosted on mLab as the DB.

How a request is handled by the backend

All three routers are in routers/API

Schema are defined in models

- Request handled by express.Router() (Resume/Authentication/Information).
- Fetch data with Mongoose from DB.
- Send reponsed back to the frontend.
