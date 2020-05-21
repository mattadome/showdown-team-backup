# showdown-team-backup
Backup and restore Pokemon Showdown! teams using text files.

Pokémon and Pokémon character names are trademarks of Nintendo.
This project is not affiliated with Pokémon Showdown! or its creators.\

**Note: Please manually backup your teams before using this extension for the first time. I am not responsible for any missing/damaged teams through the use of this project**

# How does this work?

This extension backs up and downloads a text file of the showdown_teams value in localStorage that is used to store a user's teams. The restore function uses the same showdown_teams key and injects the value of an uploaded text file. As this extension works locally, any file uploaded is merely for the extension to process and inject data into the browser and is not uploaded to any server.  Nevertheless, be wary of what text files you load into the extension and only use the ones that you have generated.

# How do I use this?
As this extension is not on the official Chrome Store, the installation process is a little different.

1. Download this project
2. Unzip the extension and extract its contents to a folder anywhere that you want
3. Go to chrome://extensions in your browser and turn on Developer Mode
4. Click "Load unpacked" and select the folder that you extracted this extension to
5. Accept anything that needs to be accepted
6. Done! 

