# JNCVBP-MS-BE

================

A high-performance backend project built with NestJS, MongoDB, and GraphQL.

## Overview

---

This project provides a robust and scalable backend infrastructure for modern web applications. It leverages the power of NestJS, a progressive Node.js framework, MongoDB, a NoSQL database, and GraphQL, a query language for APIs.

This Repository is the Back End of the JNCVBP-MS project, a project done by a team of two people, in search of obtaining the Degree in Software Engineering, for that reason, it's very overbuilt, the real use case for this project would not need so much and complex architecture, but it was done primarily to show our skills.

Please note that this application is for demonstration purposes only and should not be used as a reference for security configurations. The code and configurations provided are intended to illustrate functionality and may not follow best practices for security.

## Features

---

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing and managing large amounts of data.
- **GraphQL**: A query language for APIs created by Facebook that allows for flexible and efficient data retrieval. This Application follows a code-first approach for GraphQL, and the GraphQL schema is generated when the application starts.
- **Typescript**: A superset of JavaScript created by Microsoft that adds static typing and other features.

## Project Structure

---

- `src`: Source code for the application.

- Each folder is a module of the project, for example: `users`, containing `module`, `service`, and `resolver` files, and also a folder with necessary DTOs and Entities.

  - `entities`: MongoDB Entity, Schema, and ObjectType for the module. It can be found in the entities folder
  - `modules`: NestJS modules for the application. It can be found in the xxxx.module.ts file.
  - `services`: Services for interacting with the database and performing business logic. It can be found in the xxxx.service.ts file.
  - `resolvers`: GraphQL resolvers for the application. It can be found in the xxxx.resolver.ts file.

- `utils`: Folder that contains utility functions and helpers for the application, including decorators and other reusable code.
- `custom_types`: Folder that contains enums and other custom types for the application.
- `seed.ts`: File that runs the seeders inside the folder `seeders`.
- `app.module.ts`, `app.controller.ts`, `app/service.ts`, `app.resolver.ts`: Files that define the application's modules, controllers, services, and resolvers.
- `main.ts`: Main entry point of the application.

## Configuration

---

The application's configuration is stored in the `config.js` file, and the environment variables are defined in the `.env` file.

## Getting Started

---

### Prerequisites

- Node.js (18.x or higher)
- MongoDB (4.x or higher)
- NestJS CLI (installed globally)

### Installation

1. Clone the repository: `git clone https://github.com/FreeSF/JNCVBP-MS-be.git`
2. Install dependencies: `npm install` or `yarn install`
3. Configure the database by creating a `.env` with the needed variables (See `.env_example`)
4. Run the seeder to populate the database: `npm run seed` or `yarn seed`, this will seed a user with the username `root` and password `root`
5. Start the application: `npm run start` or `yarn start`

## License

---

This project is licensed under the MIT License. See the `LICENSE` file for details.
