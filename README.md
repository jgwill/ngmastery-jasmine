# NgmasteryJasmine
* Test passing, releasing
* Test not passing, notify: failure

## Continous Integration Test
* A Docker image build and test the app

### CircleCI
* Created a .circleci folder with a docker image
* Signed up using GitHub
* Setted up a CI for this project

#### Firebase
```bash
firebase login:ci
 tou7e9u8oeg7ucoeucaoehuoeu/1
Example: firebase deploy --token "$FIREBASE_TOKEN"
```
https://ngmastery-jasmine.firebaseapp.com

#### .circleci/config.yml
* Notice the node:10-browsers image necessary for testing loading the app in browser
```yml
# Javascript Node CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#
version: 2
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:10-browsers

      # Specify service dependencies here if necessary
      # CircleCI maintains a library of pre-built images
      # documented at https://circleci.com/docs/2.0/circleci-images/
      # - image: circleci/mongo:3.4.4

    working_directory: ~/repo

    steps:
      - checkout

      # Download and cache dependencies
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            # fallback to using the latest cache if no exact match is found
            - v1-dependencies-

      - run: yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

      # run tests!
      - run: yarn test
```
