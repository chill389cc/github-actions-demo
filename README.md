# GitHub Actions Demo

> [!NOTE]
> See [`./app/README.md`](./app/README.md) for a more specific readme telling you how the app in this repo works, if you're curious. This document itself is more of an instruction manual for the skill-a-thon. For the purposes of the skill-a-thon, you don't need to know anything about how the code in this repo works except for what is in the `.github/workflows` folder.

For an interactive experience, this repo is set up so that you can copy it to your personal GitHub accounts and practice pushing, opening pull-requests, and otherwise using the GitHub Action Workflows. I'll demonstrate how things work while I present. Maybe I'll also add in-depth explanations to the repo itself, if I have time. Check out the content we'll be looking at during the skill-a-thon [here](https://lucid.app/lucidspark/e5373e21-3f84-4481-836f-121e90e20afd/edit?viewport_loc=-5843%2C-3242%2C12367%2C6140%2C0_0&invitationId=inv_0d6f6129-618d-4398-b732-67560c6b8744).

# Pre-requisites
This section contains information and preparation steps for you to complete before the Jan 22 skill-a-thon.

## Have a GitHub Account
You probably already have a GitHub account for your school assignments or personal projects. If you don't, **you'll want to make one now if you want to try running actions yourself**.

However, if you don't want to try running GitHub Actions yourself, you do *not* need an account to clone the repo on your personal machine.

## [Optional] Adding a Billing Method (don't panic, it's free!)

> [!NOTE]
> If you *just* made a GitHub account, you're probably safe to skip this section. I've only seen this issues on older GitHub accounts.

Officially, GitHub Actions are completely free for public repositories, and to [a limited extent](https://docs.github.com/en/billing/concepts/product-billing/github-actions#free-use-of-github-actions) (2000 minutes) in private repositories ([source](https://docs.github.com/en/billing/concepts/product-billing/github-actions)). In practice though, **GitHub [sometimes has issues](https://github.com/orgs/community/discussions/176249) running GitHub Actions on accounts that don't have a billing method set up**, even if you only plan on using the public-repo free tier.

You might not run into this issue, so if you want to take the chance, you'll likely be fine not taking any action here. However, if you want the *best* chance at ensuring you don't run into issues (like I did [here](https://github.com/lucidsoftware/bf-client/actions/runs/19900679268)), I'd recommend you add a billing method (consider using a free [Privacy.com](https://www.privacy.com/virtual-card) virtual card like I did if you're worried about unexpected charges) 24 hours before you attempt to use GitHub Actions. You can add a payment method in [your GitHub Account Settings](https://github.com/settings/billing/payment_information).

## [Optional] Make a Docker Hub Account & Repo

In this repo's ['Publish' GitHub Action](./.github/workflows/app-cd.yml), you'll see a block at the bottom commented out. Uncommenting this block will add a new job to the workflow that attempts to build the app and publish it to a Docker Hub repository.

If you think that would be interesting to try out, follow this tutorial to make a Docker Hub Repository. You'll first have to make a free Docker Hub account as well.

<https://docs.docker.com/docker-hub/repos/create/>

Then, during the skillathon, after creating a copy of this repo, do the following (feel free to do it early if you like, but everything after this line is no longer 'prep work'):
1. Add your docker username and password as repository-secrets to your repository as `DOCKER_USERNAME` and `DOCKER_PASSWORD`, respectively
    1. Click the 'Settings' tab on your repo
    2. Click 'Secrets and variables', then 'Actions', and then 'New repository secret'
2. Uncomment lines 59-86 in [.github/workflows/app-cd.yml](./.github/workflows/app-cd.yml)
3. Edit line 79 to replace `YOUR_ACCOUNT_HERE/YOUR_IMAGE_ID_HERE` with the address of your newly-created Docker Hub repository.
4. Open and merge a pull-request with your changes.
5. Check the logs of the newly-triggered 'Publish' action to see if it worked.
6. Check the Docker repo to look at the new version of your container.

> [!TIP]
> Deploying your web app to a container registry is a convenient way to package your app for easy deployment on an external server or hosting provider. Docker Hub is just one example, but it is similar to products like AWS Elastic Container Registry. Once a new version of your web app is published to a container registry, you can easily re-deploy your web app using a custom server elsewhere by pulling the latest version of your app from your container registry.

## [Optional] Make Discord Server & Webhook URL

> [!NOTE]
> I chose Discord for this exercise because 1) many people likely are already familiar with Discord, and 2) Its incredibly easy to get webhook URLs in discord. I have never personally used Discord for work projects, but I'm sure some people do.

In this repo's ['Uptime-Check' GitHub Action](./.github/workflows/uptime-check.yml), you'll see a block at the button commented out. Uncommenting this block will add a new step to the 'Check Website Status' job that actually notifies you in the event of your website going down (although, as-is, its configured to actually ping if the website is *up*, for easier  testing, and it checks wikipedia.org which is unlikely to be your own website).

If you think that would be interesting to try out, follow this tutorial to make a Discord Server. You'll first have to make a free Discord account as well. Unless, of course, you already have a Discord account and/or a Discord Server.

<https://discord.com/blog/starting-your-first-discord-server#3>

Then, follow this link and scroll to the "Making a Webhook" section to learn how to copy a webhook url for you to use to send messages to a channel.

<https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks>

Then, during the skillathon, after creating a copy of this repo, do the following (feel free to do it early if you like, but everything after this line is no longer 'prep work'):
1. Add the webhook URL to your GitHub repository as a secret (named `DISCORD_WEBHOOK_URL`),
    1. Click the 'Settings' tab on your repo
    2. Click 'Secrets and variables', then 'Actions', and then 'New repository secret'
2. Uncomment lines 29-36 in [.github/workflows/uptime-check.yml](./.github/workflows/uptime-check.yml),
3. Open and merge a pull-request with your changes, and then
4. Manually trigger the 'Uptime Check' workflow and check the logs to see if it worked.
5. Check your discord server to see the message that was sent.

# Learning More
Below is a public link to the slides for the Jan 22 presentation. I've added links to learn more on the slides where it makes sense. You do not need a Lucid account to access the LucidSpark board using this link:

<https://lucid.app/lucidspark/e5373e21-3f84-4481-836f-121e90e20afd/edit?viewport_loc=-5843%2C-3242%2C12367%2C6140%2C0_0&invitationId=inv_0d6f6129-618d-4398-b732-67560c6b8744>

Feel free to contact me on LinkedIn or Slack (in the BYU Developers Club workspace) if you
have questions!
