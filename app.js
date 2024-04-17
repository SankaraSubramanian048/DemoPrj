// Import required modules
const express = require('express');
const { exec } = require('child_process');

// Create Express app
const app = express();
const port = 6060;

// POST endpoint for webhook
app.post('/webhook', (req, res) => {
  // Execute shell command to navigate to the folder and run 'git pull'
  exec('cd /home/navee/web/navee.yugan.tech/public_html/learnings && git pull', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      res.status(500).send('Error executing command');
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.status(200).send('Git pull executed successfully');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
