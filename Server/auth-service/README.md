# auth microservice

**auth-service** is a backend microservice whoses main job is to issue or revoke firebase authentication tokens. These tokens are used by other microservices to authorize actions by the

## Installation standalone

Ensure you pass in the enviromental variables for the following, either via .env or through docker.

##### Commands

#

#

```sh
cd auth-service
npm i
npm run start
```

## Libraries

1. axios
2. cors
3. express
4. firebase-admin

## API usage

## Purpose

Handles Firebase authentication (verifying ID tokens, creating new Firebase users).
Creates or retrieves a basic user document in the database using the firebaseUid.
Uses the auth/schema.js to define the structure of the basic user document (e.g., firebaseUid, email).
