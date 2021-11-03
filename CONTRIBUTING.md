# Contributing

First off, thank you for considering contributing to KCD Australia! It's people like you who make the community great.

* **Create an issue**: If you have noticed a bug, want to contribute features, or simply ask a question that for whatever reason you do not want to ask in the [CNCF Slack workspace](https://cloud-native.slack.com/), please [search the issue tracker](https://github.com/kcd-australia/kcd-website/issues)

* **Add yourself**: Add yourself to the [list of contributors](CONTRIBUTORS.md) along with your first pull request.

This document lays out how to get you started in contributing to KCD Australia, so please read on.

### Fork Repositories and work in a branch

* Branch away from the `main` branch and use the following schema for naming your branches:
```
<github-issue-number>/<descriptive-name-with-dashes>

Example:
1/add-logo
```

### Commiting code ###

```
git add .
git commit -m "add x" -s
git push
```

### Make a Pull Request

At this point, you should switch back to the `main` branch in your repository, and make sure it is up to date with `main` branch of kcd-website:

```bash
git remote add upstream git@github.com:kcd-australia/kcd-website.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of `main` and push it:

```bash
git checkout 1/add-logo
git rebase master
git push --set-upstream origin 1/add-logo
```

Finally, go to GitHub and create a Pull Request.
