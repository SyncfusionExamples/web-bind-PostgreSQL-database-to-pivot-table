# How to bind PostgreSQL database to a Pivot Table

A quick start project for connecting a PostgreSQL database to a Syncfusion Pivot Table. This repository includes a Web API Controller ([MyWebService](../MyWebService/)) for retrieving data from a PostgreSQL database, as well as a quick start sample in the TypeScript platform that displays the retrieved data in a Syncfusion Pivot Table.

## Project prerequisites

Before beginning work on the server and client projects, ensure the following software to be installed in the machine.

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/ ) and [.NET Core SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) or later installed on your machine

## How to run this application?

* To run this application, clone the [how-to-bind-PostgreSQL-database-to-pivot-table](https://github.com/SyncfusionExamples/how-to-bind-PostgreSQL-database-to-pivot-table) repository and then open **MyWebService** in Visual Studio 2022. Simply build and run your project in IIS Express, and it will host and display the URL `https://localhost:44378`.

*  Now open TypeScript sample in Visual Studio Code and and install the necessary npm packages using the following command.

```sh
npm install
```

* Initialize the Pivot Table, map the hosted URL, create a pivot report, and finally run your project using the following command to achieve the desired result.

```sh
npm run start
```