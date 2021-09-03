# Octans NFT Marketplace
APIs Repository for the Octans NFT Marketplace

### Installation

```
$ npm install
```

### Running the app

First copy the `.env.example` to the `.env` file:

```
$ cp .env.example .env
```

```
$ npm start

# watch mode
$ npm run start:dev

```

### Git Workflow

In the git workflow we use, the `main` is the primary branch. The code that is production-ready goes there. There will be a `dev` branch which will feature the latest code (the features under development).

For your own branch (or a feature branch), branch off from `dev`. When you are done with developement and testing your code, create pull request against the `dev` branch. Once it's approved, your branch will be merged into `dev`.

For releases, `dev` is merged into `main`. The release is created from the code on the `main` branch.

#### Commits

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as the format for our commit messages, there is a linter, so be sure you title your commits appropriately!