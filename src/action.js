require('dotenv').config();
const github = require('@actions/github');

// Issue

if (github.context.payload.issue) {
  console.log('Issue created');
  require('./issue.js');
  require('./webhookissue.js');
}

// Pull Request

if (github.context.payload.pull_request) {
  console.log('Pull Request created');
  require('./pull.js');
  require('./webhookpull.js');
}
