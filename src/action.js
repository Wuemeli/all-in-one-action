require('dotenv').config();
const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

// If an Issue is created then use the Issue.js File
if (github.context.payload.issue) {
  console.log('Issue created');
  require('./issue.js');
}

// If a Pull Request is created then use the Pull Request.js File
if (github.context.payload.pull_request) {
  console.log('Pull Request created');
  require('./pull.js');
}
  

