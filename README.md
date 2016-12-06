# Udacity Dashboard

This is my fourth of five projects in the Udacity [Senior Web Developer Nanodegree](https://www.udacity.com/course/senior-web-developer-nanodegree--nd802) program. This is a work in progress.

## Demo

Checkout the demo at: [https://adriancarriger.github.io/udacity-dashboard/](https://adriancarriger.github.io/udacity-dashboard/)

## Description

A corporate dashboard app for the fictional paper company [Dunder Mifflin](https://en.wikipedia.org/wiki/Dunder_Mifflin).

<img alt="Dunder Mifflin logo" src="https://adriancarriger.github.io/udacity-dashboard/assets/dunder-mifflin.jpg" width="100px">

## Tech Stack

* Front end: [Angular 2](https://github.com/angular/angular) version 2.2.1
* Back end: [Firebase](https://firebase.google.com/) + [Node.js](https://nodejs.org/en/) via [AWS Lambda](https://aws.amazon.com/lambda/) with a [dedicated repository](https://github.com/adriancarriger/udacity-dashboard-backend)
* Scaffolding: [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21

## Api

If a client is connnected, then an AWS lambda will push updates to Firebase which will relay the data to the browser. See the [api comments](https://github.com/adriancarriger/udacity-dashboard/blob/master/src/app/shared/api/api.service.ts#L27-L38) for details.

## Source data files

The source json and csv data files are located in the [back end repository](https://github.com/adriancarriger/udacity-dashboard-backend/tree/master/assets).

## Dashboard time

The "Today's date" section shown in the upper right side of the dashboard represents the time from the fictional tv show [The Office](https://en.wikipedia.org/wiki/The_Office_(U.S._TV_series)).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## License

This project is licensed under the MIT Open Source license. For more information, see the [LICENSE](LICENSE) file in this repository.