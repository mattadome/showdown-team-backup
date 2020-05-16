# showdown-team-backup
Backup and restore Pokemon Showdown! teams using text files.

# How does this work?
This extension backs up and downloads a text file of the showdown_teams value in localStorage that is used to store a user's teams. The restore function uses the same showdown_teams key and injects the value of an uploaded text file. As this extension works locally, any file uploaded is merely for the extension to process and inject data into the browser and is not uploaded to any server.  Nevertheless, be wary of what text files you load into the extension and only use the ones that you have generated.

# How do I use this?
As this extension is not on the official Chrome Store, the installation process is a little different.

1. Download this project
2. Unzip the extension to a folder you like
3. Go to chrome://extensions and turn on Developer Mode
4. Click "Load unpacked" and select the folder that you extracted this extension to
5. Accept anything that needs to be accepted
6. Done! 

