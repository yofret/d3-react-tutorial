# D3 React Example

## The Project
This is a simple d3 app using React, Webpack 2 and Docker.

## How to get it to work
Download and install [Docker](https://www.docker.com/). Now once you do that get docker setup which is very simple to do.
You can than go to the location on your machine where you want to clone the repo.

run `git clone https://github.com/caesarbell/d3-react-tutorial.git`
and then in the root of the project run `docker-compose up --build`. This will allow docker to run the project and install
all of the dependencies *Yes Docker is that simple* and then you can view the app in the browser with http://localhost:3000/

## Files

The two main files to focus on for this project is `Home.js` and `SingleBarGraph.js` which are located in the `react-components/` directory.
 1. [Home.js](https://github.com/caesarbell/d3-react-tutorial/blob/master/react-components/Home.js)
 2. [SingleBarGraph.js](https://github.com/caesarbell/d3-react-tutorial/blob/master/react-components/graphs/SingleBarGraph.js)


## Fun fact
If you make changes to the bundle.js by adding or removing anything from the `js` components you might not see the updated files in the bundle.js thats found in the public directory. Thats because the source code in the containers, don't place the code back into the local files on your local  machine. So what you need to do is run the `compiler.sh` script thats inside the *scripts* directory. You can do this by running the following

`sh scripts/compiler.sh` in the terminal.
