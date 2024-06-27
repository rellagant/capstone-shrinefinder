# Project Title

Shrine Finder
<img src="./src/assets/images/icons/shrinefinderlogolrg.svg" width="175">

Shrine Finder is a web application designed for tourists in Japan to discover lesser-known shrines that are off the beaten path. The app provides detailed information about each shrine, including unique features, associated deities, and available lucky charms (omamori) or shrine seals/calligraphy (goshuin).
>There are estimated to be around 80,000 shrines in Japan. - wiki

Shrinefinder Server/API can be found [here](https://github.com/rellagant/shrinefinder-server)

Find the deployed site [here](https://shrinefinder.netlify.app/)

## Features

- Shrines are sorted by Prefecture with listed Cities
- View detailed information about each shrine when you click on it,
  including photo, city, extended description, enshrined deities, 
  features, and souvenirs
- Add and view user reviews for each shrine
- Responsive design for mobile, tablet, and desktop
- Get Lucky button navigates to a shrine page via randomization

## Screenshots 

### Mobile View
![app](./src/assets/mockups/ShrineFinderMobile.gif)

## Tech Stack

- React
- Express

- Client libraries: 
    - react
    - react-router-dom
    - axios

- Server libraries:
    - express
    - json data

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL`

## Run Locally

Clone the project

```bash
  git clone https://github.com/rellagant/capstone-shrinefinder.git
```

Go to the project directory

```bash
  cd capstone-shrinefinder
```

Install dependencies

```bash
  npm install
  (or`yarn install`)
```

Start the server

```bash
  npm start
  # or
    yarn start
```

This will run the project in development mode. Open http://localhost:3000 to view it in the browser (or whichever local host/port your IDE refers you to)

## API Reference

#### GET Shrine by ID
```http
  GET ${server_url}/shrine/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serverUrl` | `string` | **Required**. Server Url        |
| `shrine_id` | `integer` | **Required**. Id of Shrine     |


#### GET random Shrine
```http
  GET ${server_url}/random
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serverUrl` | `string` | **Required**. Server Url        |
| `input`      | `string` | **Required**.`random`    |


#### GET list of Prefectures
```http
  GET ${server_url}/prefectures
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serverUrl` | `string` | **Required**. Server Url        |
| `input`     | `string` | **Required**.`prefectures`    |

#### GET list of Shrines by Prefecture
``` http
  GET ${server_url}/shrines/${prefecture}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serverUrl` | `string` | **Required**. Server Url        |
| `prefecture` | `string` | **Required**.Prefecture name to filter shrines |

#### GET reviews only
```http
GET ${server_url}/reviews/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serverUrl` | `string` | **Required**. Server Url        |
| `shrine_id` | `integer` | **Required**. Id of Shrine     |

#### POST reviews
```http
POST ${server_url}/${id}/reviews
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `serverUrl` | `string` | **Required**. Server Url        |
| `shrine_id` | `string` | **Required**. Id of Shrine to review     |
| `rating` | `integer` | **Required**. Numeric value between 1-5 representing the rating given for the Shrine |
|`comment` | `string` |  **Required**. Textual comment or review for the Shrine |

Request Body Example: 
```
{
  "rating": "integer",
  "comment": "string"
}
```

## Dependencies

* axios: ^1.7.2
* react: ^18.3.1
* react-dom: ^18.3.1
* react-router-dom: ^6.23.1
* react-scripts: 5.0.1
* sass: ^1.77.2

## Authors

- [rellagant](https://www.github.com/rellagant)

## Contributing

Contributions are always welcome! 
Please fork 🍴
Pull requests will be reviewed. 
For major changes or if you'd like to contribute content please contact me. 


## Lessons Learned

Challenges: 
* organizing information in a way where taking next steps to get everything down was clear
* realizing some sort of style guide / unity of visual design
* user experience/user flow

It might be more efficient to start client side, do mockups in terms of hardcoding copmonents and pages, and then deciding what API calls and endpoints need to be created.

## Next Steps

* Migrating to SQL/Database 
* Adding maps/geolocation/direction functionality
* Adding more content
* User Authenticaton/Login
* Refining the style guide for better visual cohesion
* Creating a better UI/UX experience for the user
* Glossary for Japanese terms to make the app more educational


