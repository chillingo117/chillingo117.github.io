#Chillingo117's DeveloperFolio
This project is my EPortfolio, welcome!

## How to use
  - Requires:
    - node@v10.16.0 or higher
    - npm@6.9.0 or higher
    - git@2.17.1 or higher

  - Run `npm i` in root of this repo
  - Copy `env.example` into an env file: `.env` 

  - Generate a developer token and use it as the REACT_APP_GITHUB_TOKEN environment variable.
    - This token should be a generic classic token. No scope checks are required.
    - This token is only needed for local deployment/development of the site and can be ignored if relying on the github action for deployment.
  - Type in your github user name for the GITHUB_USERNAME
  - You should be able to now run `npm start`

## Deployment
Pushes to the `master` branch will trigger the `Build and Deploy` pipeline (alternatively this can be manually triggered).

Deployment will update the branch `gh-pages`, which will in turn trigger GitHub Pages' automatic `pages-build-deployment`.

Completion will update the GitHub page at https://chillingo117.github.io/