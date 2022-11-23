// If an New Commit is created then send an Message to the Webhook
const Axios = require('axios');
const github = require('@actions/github');
const core = require('@actions/core');

const webhook = core.getInput('WEBHOOK');

if (github.context.payload.commits) {
    console.log('Commit created');
    const commit = github.context.payload.commits[0];
    const url = commit.url;
    const user = commit.author.username;
    const avatar = commit.author.avatar_url;
    const repo = github.context.repo.repo;
    const owner = github.context.repo.owner;
    const message = `New Commit created on ${repo} by ${user}: ${message} ${url}`;
    const data = {
        username: 'GitHub',
        avatar_url: avatar,
        content: message,
    };
    Axios.post(webhook, data);
}


