# Book-Finder
Mean stack application - Book Search in Google API and Search results in Mongo DB

Since Node.js is asynchronous by nature, All API and DB calls are performed asynchronously. I have added the application to Docker container and configured a Docker-Compose yaml file to be able to build and run the application. 

Steps to install and build:
----------------------------
Pre requisites- Node , MongoDB , Docker needs to be installed before build.
----------------------------------------------------------------------------------------------
1. Download and extract git repository into your machine.
2. Start Docker application and Make sure mongod process is not already running on the machine.
3. Open Terminal or CMD and navigate to the extracted folder. 
4. Build the container: docker-compose build
5. Run the container: docker-compose up
6. Find the ip used by the docker machine: docker-machine ip
7. Open the app in your browser : http://THE-IP:3000/ or http://localhost:3000/


You can Search for a Book in Google API by clicking on Search Book in Google API. Every time a Book is searched through the Google API, It is saved in the local database. 

You can also Lookup Books in the DB under a particular Author or Publisher.

Cheers!
