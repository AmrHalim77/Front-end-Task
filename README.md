You can run this project using this command : npm start and you can access front-end from this url: http://localhost:3000/

or you can use docker : 

1- build the project using this command:  npm run build
2- Generate Image using this command: docker build -t react-phone . // ps: Dockerfile exist in react project.
3- docker run --name front-end -d -it -p 8080:80   react-phone

you can access front-end using this url: http://localhost:8080
