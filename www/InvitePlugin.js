var exec = require("cordova/exec");

var InvitePlugin = {

    sendInvite: function (s, f) {
        exec(s, f, "InvitePlugin", "invite", []);

        console.log("js function procced");
    }
};

module.exports = InvitePlugin;