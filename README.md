# Project Title

Shrine Finder is a web application designed for tourists in Japan to discover lesser-known shrines that are off the beaten path. The app provides detailed information about each shrine, including unique features, associated deities, and available lucky charms (omamori) or shrine seals/calligraphy (goshuin).
>There are estimated to be around 80,000 shrines in Japan. - wiki

### Tech Stack

- React
- Express
- Client libraries: 
    - react
    - react-router
    - axios
    - toastify
    - mapbox-sdk-js (potentially)
- Server libraries:
    - express
    - json file for storing shrine data initially

## Features

- Shrines are sorted by prefecture
- View detailed information about each shrine
- Add and view user reviews for each shrine
- Responsive design for mobile and desktop
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
  npm run start
  # or
    yarn start
```

This will run the project in development mode. Open http://localhost:3000 to view it in the browser (or whichever local host/port your IDE refers you to)

## dependencies

* axios: ^1.7.2
* react: ^18.3.1
* react-dom: ^18.3.1
* react-router-dom: ^6.23.1
* react-scripts: 5.0.1
* react-toastify: ^10.0.5
* sass: ^1.77.2
## Authors

- [rellagant](https://www.github.com/rellagant)


## Appendix

Any additional information goes here


## Contributing

Contributions are always welcome! Please fork 🍴
Pull requests will be reviewed. For major changes or if you'd like to contribute content please contact me. 

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL`


## Lessons Learned

Challenges: 
* time and organizing information in a way where taking next steps to get everything down was clear
* realizing some sort of style guide / unity of visual design
* thinking about user experience


It might be more efficient to start client side, do mockups in terms of hardcoding copmonents and pages, and then deciding what API calls and endpoints need to be created.

## Next Steps

* refining styling
* adding features including deleting posts
* adding content/considering migrating to database
* refining the style guide for better visual cohesion
* creating a better UI/UX experience for the user
* gathering content for database
* adding additional API calls for more features (geolocation/directions/glossary)
* deployment

