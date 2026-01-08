# A Website
> [!WARNING]
> For the purposes of the skill-a-thon, you don't need to know anything about how the code in this repo works except for what is in the `.github/workflows` folder. This information is here for those who are curious.

This is a website. It uses a [Fastify](https://fastify.dev/) backend, running on [Node.js](https://nodejs.org/en), on the backend to serve raw HTML.

> [!TIP]  
> The BYU Office of IT and Lucid Software use Fastify in one way or another, alongside other big names like Mercedes. Industry leaders like the Linux Foundation recommend Fastify for Node.js web servers.

## Setup
1. Install Node.js (We're using v22 in this repo)
2. Clone this repo
3. `cd /app`
4. Run `npm install`

## Devlopment
1. Run `npm run dev` to run the server locally and test your changes
    - Visit <http://127.0.0.1:3000> in your web browser to see your local website
2. Run `npm test` to test unit tests

# Contributing:

> [!WARNING]  
> All steps after this point assume you have already forked the repository into your own account. If you don't fork and try to push to my copy of the repo, the push will fail.

## Opening a Pull-Request
1. Make your changes on a new branch.
    - e.g. `git checkout -b <my branch name>`
2. Run `npm run lint:fix` in the `/app` directory, if you are smart.
3. Make a PR to the `main` branch.
    - e.g. `git push`, then go to `https://github.com/<YOUR USERNAME>/github-actions-demo/pull/new/<YOUR BRANCH NAME>`
4. Wait for CI checks to pass. If checks don't pass, fix your code until they pass.

## Publishing
1. After a contributed PR (see above) is merged, check that the docker hub deploy worked in the publish GitHub Action.
2. {insert instructions for whatever you are using that deploys the container (e.g. AWS Fargate, custom docker-container server) to show you how to validate that your deploy worked}
