Project uploaded in:

https://github.com/Aleix11/test_frontend

This project is an Ionic 4 project.

To run the app execute the following commands:

npm install
npm start

The npm start command executes this command:
ng serve --proxy-config proxy.conf.json

I had a CORS error when I tried to make the HTTP request to get all information.
For this reason, I created a proxy to fix this type of error.

Also, I've created a simple test that verifies the work that I've done.
To execute it, it's necessary to run the following commands in different terminals:

npm start
webdriver-manager start
protractor conf.js

As you will see, it shows a list with the first 100 Gnomes.
Then, it writes "Malbin" in the search bar.
And finally, it clicks into the first Gnome to go to the page that shows all his information.

The project is structured in the following way:

COMPONENTS:

- app.component: It's the main component and the one that is showed when we run the app.
It loads the app-routing file and reedirects to the home.component.

- home.component: It contains the list of Gnomes.
It makes the HTTP request to get all information of the Gnomes.
There's a type of pagination done. It only loads the first 100 Gnomes.
Then, if you scroll down until the end of the page, there's a loader that loads 100 Gnomes more.

- info-gnome.component: It shows all information of a Gnome that is clicked in the home.component.

MODELS:

- Gnome: It contains the model of a Gnome.

PROVIDERS:

- Gnome-service: It contains the HTTP request to get all Gnome information.

- Pass-gnome: It's a service to set and get a Gnome.

TEST:

- todo-spec.js:
It's a simple test that opens the following page: http://localhost:4200.
Then, it writes a name in the search bar.
And, finally it clicks in the first Gnome.
