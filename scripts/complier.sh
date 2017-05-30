docker build -t shaunpersad/d3-with-react-tutorial .
docker run --rm -v "$PWD":/usr/src/app shaunpersad/d3-with-react-tutorial ./node_modules/.bin/webpack
