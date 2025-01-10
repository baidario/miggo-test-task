# Start frontend
1. `cd ui`
2. `npm install`
3. `npm run build`
4. `npm start`
5. Open [http://127.0.0.1:80](http://127.0.0.1:80) in browser

# Start backend
1. `cd backend`
2. `npm install`
3. `npm start`

## Backend API

#### Fetching IIS location information

<details>
 <summary><code>GET</code> <code><b>/station</b></code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{ "longitude": "-1.4367", "latitude": "35.2829" }`                 |
> | `500`         | `application/json`                | `{ "error": "fetch failed" }`                                       |
