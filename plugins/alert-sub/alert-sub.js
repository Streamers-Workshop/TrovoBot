const fs = require('fs');
const settings = require('./alert-sub.json');

module.exports = {
  name: 'alert-sub', // Name of the Plugin
  description:
    'Sends a message to chat of new Subscriber. Saves latest Subscriber to text file for obs&slobs.', // Description
  chat: false, // Defines this as a Chat Command
  event: true, // Is this a Event?
  type: 5001, // Type Event
  command: '', // This is the Command that is typed into Chat!
  permissions: [], // This is for Permissisons depending on the Platform.
  alias: [], // Alias commands that preform interesting things.
  cooldown: 0, // this is Set in Seconds, how long between the next usage of this command.
  settings: false, // Defining this as false will load the Settings file for this Plugin when the system loads this plugin.
  credits: `New Subscriber system by Krammy. Original by Bioblaze Payne.`, // MAKE SURE YOU FILL THIS IN GOD DAMNIT!
  execute(client, data) {
    if (settings.active) client.sendMessage(`Thanks @${data.user} for the Subscription <3`);

    fs.writeFile('./plugins/alert-sub/latest-sub.txt', data.user, (err) => {
      if (err) {
        return console.log(err);
      }
      return true;
    });
  },
};
