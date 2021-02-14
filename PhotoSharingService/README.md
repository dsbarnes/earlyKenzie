## Introduction

In this assessment, you will write your own OpenAPI specification file for a photo sharing service and then use Swagger-UI to create and serve a documentation page for your service.

The starter code provides you an express server (in `./index.js`) and already includes the setup code required to serve the Swagger-UI documentation page (the npm package for this is called `swagger-ui-express`).

You can startup the server by running `npm start`.

For examples to help you get started understanding OpenAPI syntax, there are a couple things you can do. Refer to the OpenAPI documentation pages [https://swagger.io/docs/specification/about/](https://swagger.io/docs/specification/about/). You can also refer to the kwitter-api specification file and the related Swagger-UI documentation page generated from this file [https://github.com/KenzieAcademy/kwitter-api/blob/master/specification.yaml](https://github.com/KenzieAcademy/kwitter-api/blob/master/specification.yaml) and [https://kwitter-api.herokuapp.com/docs/](https://kwitter-api.herokuapp.com/docs/). In the kwitter-api, the endpoint `PUT /users/{username}/picture` will be very similar to the `POST /api/images` endpoint that you will need to design.

To help you actually write your OpenAPI specification file, it is recommended to use the Swagger Editor online tool
[https://editor.swagger.io/](https://editor.swagger.io/). This tool has a text editor on the left and a live-reloading version of your Swagger UI documentation page on the right, so you can see exactly what your documentation will look like as you write the OpenAPI file. This tool also automatically validates your OpenAPI file on every change and gives you feedback about syntax errors.

There may also be vs-code extensions that can do similar things to the Swagger Editor--you are welcome to explore those options on your own.

## User Story

As a user of the service, I am able to upload an image and see a list of image uris which have been previously uploaded.

## Technical Details

Will need to write an OpenAPI specification file in yaml format that defines two endpoints:

- `GET /api/images` which allows the client to view a list of image uris from previously uploaded images
- `POST /api/images` which allows the client to send an image to be uploaded

There is starter code repo which you should fork and clone down to get started: [https://gitlab.com/kenzie-academy/se/fe/intro-to-backend-from-the-perspective-of-the-frontend/assessment---design-a-photo-sharing-service](https://gitlab.com/kenzie-academy/se/fe/intro-to-backend-from-the-perspective-of-the-frontend/assessment---design-a-photo-sharing-service)

## Acceptance Criteria

5pt - The `GET /api/images` endpoint should be visible on the Swagger-UI documentation page at `localhost:3000/api`. This endpoint does not accept a request body (because `GET` requests cannot have bodies). It should send back a response that is encoded as `application/json`. The response body should be an object which contains two properties: `imageURIs`, which should be an array of items that are strings, and `statusCode`, which should be an integer.

5pt - The `POST /api/images` endpoint should be visible on the Swagger-UI documentation page at `localhost:3000/api`. It should be designed to accept a request body that is encoded as `multipart/form-data` which should contain a property called `image`that is a string with a format of binary (should also show `* required` in Swagger-UI documentation). This endpoint should have a response that is encoded as `application/json`. The response body should be an object which contains two properties: the `imageURI`, which should be a string, and a `statusCode`, which should be an integer.
