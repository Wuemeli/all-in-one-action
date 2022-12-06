# All-In-One Action
This Action is an Must-have. 

Features:
- Auto Thanks Users with an Message an Gif on an new Issue or Pull Request
- Notifies when an New Pull Request is opened or an Issue is created over an Webhook
- Notifies when an Commit is pushed over an Webhook

How to install:
Create an new File in your .github/workflows Folder. And paste this Content: All-In-One.yml

Then Get your Tenor API Key here: https://tenor.com/gifapi/documentation

Then go to the Repo Secrets and Create an New one with the Name: TENOR_TOKEN and Paste your Tenor Api Key there.
Then Create an new one with the Name: GITHUB_TOKEN and Paste your Github Token there.
Then Create an new one with the Name: WEBHOOK_ and Paste your Webhook Url there.

Then you are ready to go!

// ToDO

- [ ] Add an Option to disable the Webhook
- [ ] Add an Option to disable the Gif
- [ ] Add an Option to disable the Thanks Message
- [ ] Add an Option to disable the Thanks Message Gif
- [ ] Add an Option to disable the Thanks Message Text
- [ ] Add an Option to disable the Commit Message


