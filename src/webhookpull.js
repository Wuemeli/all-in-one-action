// If an New Pull Request is created then send an Message to the Webhook
const Axios = require('axios');
const github = require('@actions/github');
const core = require('@actions/core');

const webhook = core.getInput('WEBHOOK');

if (github.context.payload.pull_request) {
    console.log('Pull Request created');
    const pull = github.context.payload.pull_request;
    const title = pull.title;
    const body = pull.body;
    const number = pull.number;
    const url = pull.html_url;
    const user = pull.user.login;
    const avatar = pull.user.avatar_url;
    const labels = pull.labels;
    const assignees = pull.assignees;
    const milestone = pull.milestone;
    const state = pull.state;
    const created_at = pull.created_at;
    const updated_at = pull.updated_at;
    const closed_at = pull.closed_at;
    const repo = github.context.repo.repo;
    const owner = github.context.repo.owner;
    const message = `New Pull Request created on ${repo} by ${user}: ${title} ${url}`;
    const data = {
        username: 'GitHub',
        avatar_url: avatar,
        content: message,
    };
    Axios.post(webhook, data);
}
