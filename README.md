# GitHub Actions Demo

> [!NOTE]
> See ./app/README.md for a more specific readme telling you how the code in this repo works

For an interactive experience, this repo is set up so that you can fork it to your personal GitHub accounts and practice pushing, opening pull-requests, and otherwise using the GitHub Action Workflows. I'll demonstrate how things work while I present. Maybe I'll also add in-depth explanations to the repo itself, if I have time.

## Pre-requisites

### Have a GitHub Account
You probably already have a GitHub account for your school assignments or personal projects. If you don't, **you'll want to make one now if you want to try running actions yourself**.

However, if you don't want to try running GitHub Actions yourself, you do *not* need an account to clone the repo on your personal machine.

### Adding a Billing Method (don't panic, it's free!)
Officially, GitHub Actions are completely free for public repositories, and to [a limited extent](https://docs.github.com/en/billing/concepts/product-billing/github-actions#free-use-of-github-actions) (2000 minutes) in private repositories:
> GitHub Actions usage is free for self-hosted runners and for public repositories that use standard GitHub-hosted runners. See Choosing the runner for a job.
>
> For private repositories, each GitHub account receives a quota of free minutes, artifact storage, and cache storage for use with GitHub-hosted runners, depending on the account's plan. Any usage beyond the included amounts is billed to your account.
([source](https://docs.github.com/en/billing/concepts/product-billing/github-actions))

In practice, **GitHub [sometimes has issues](https://github.com/orgs/community/discussions/176249) running GitHub Actions on accounts that don't have a billing method set up**, even if you only plan on using the public-repo free tier.

You might not run into this issue, so if you want to take the chance, you'll likely be fine not taking any action here. However, if you want the *best* chance at ensuring you don't run into issues (like I did [here](https://github.com/lucidsoftware/bf-client/actions/runs/19900679268)), I'd recommend you add a billing method (consider using a free [Privacy.com](https://www.privacy.com/virtual-card) virtual card like I did if you're worried about unexpected charges) 24 hours before you attempt to use GitHub Actions. You can add a payment method in [your GitHub Account Settings](https://github.com/settings/billing/payment_information).

## Intro
GitHub is the most popular Git hosting solution and development platform, and one of its features is "GitHub Actions", a built-in job-running solution.

GitHub Actions operates at the repository-level.

To view a repo's existing GitHub Actions, simply:
1. Navigate to the repository (like [this one](https://github.com/chill389cc/github-actions-demo))
