---
sidebar_position: 1
---

# Quick Start

Quick to start up the website with the simple instructions.

## Install yarn

```bash
npm install --global yarn
```

## Create docusaurus

```bash
yarn create docusaurus
```

After doing the instruction, you can enter in the directory's name.

## Modify the website's config

Inorder to put the website to githubpage, we need to make a little change.

```js title=your_directory/docusaurus.config.js
const config = {
  ...
  url: 'https://github user name.github.io',
  baseUrl: '/github repo name/',
  organizationName: 'github user name', // Usually your GitHub org/user name.
  projectName: 'github repo name',
  ...
}
```

## Create github repo

- Create a new github remote empty repo.

```bash
cd your_directory
```

- Create a new local repo.

```bash
git init
git add .
git commit -m "Create docusaurus."
git push -u origin master
```

Then you have you website on the github, but still not on github page right now.

## Deploy on github page

Make sure your github has your ssh public key on the local machine currently used.

```bash
USE_SSH=true yarn deploy
```

After then, your website will be deploy on `https://github_user.github.io/github_repo/`

## Add CI/CD pipeline

```js title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

  on:
    push:
      branches:
        - master
      # Review gh actions docs if you want to further define triggers, paths, etc
      # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

  jobs:
    deploy:
      name: Deploy to GitHub Pages
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - uses: actions/setup-node@v3
          with:
            node-version: 16.x
            cache: yarn

        - name: Install dependencies
          run: yarn install --frozen-lockfile
        - name: Build website
          run: yarn build

        # Popular action to deploy to GitHub Pages:
        # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
        - name: Deploy to GitHub Pages
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            # Build output to publish to the `gh-pages` branch:
            publish_dir: ./build
            # The following lines assign commit authorship to the official
            # GH-Actions bot for deploys to `gh-pages` branch:
            # https://github.com/actions/checkout/issues/13#issuecomment-724415212
            # The GH actions bot is used by default if you didn't specify the two fields.
            # You can swap them out with your own user credentials.
            user_name: github-actions[bot]
            user_email: 41898282+github-actions[bot]@users.noreply.github.com

```

```js title=.github/workflows/test-deploy.yml
name: Test deployment

on:
  pull_request:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Test build website
        run: yarn build
```
