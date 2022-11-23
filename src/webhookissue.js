// If an New Issue is created then send an Message to the Webhook
const Axios = require('axios');
const github = require('@actions/github');
const core = require('@actions/core');

const webhook = core.getInput('WEBHOOK');


if (github.context.payload.issue) {
    console.log('Issue created');
    const issue = github.context.payload.issue;
    const title = issue.title;
    const body = issue.body;
    const number = issue.number;
    const url = issue.html_url;
    const user = issue.user.login;
    const avatar = issue.user.avatar_url;
    const labels = issue.labels;
    const assignees = issue.assignees;
    const milestone = issue.milestone;
    const state = issue.state;
    const created_at = issue.created_at;
    const updated_at = issue.updated_at;
    const closed_at = issue.closed_at;
    const repo = github.context.repo.repo;
    const owner = github.context.repo.owner;
    const message = `New Issue created on ${repo} by ${user}: ${title} ${url}`;
    const data = {
        username: 'GitHub',
        avatar_url: avatar,
        content: message,
    };
    Axios.post(webhook, data);
}
