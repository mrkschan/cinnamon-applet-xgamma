const GLib = imports.gi.GLib;

const AppletMeta = imports.ui.appletManager.applets['xgamma@mrkschan.gmail.com'];
const AppletDir = imports.ui.appletManager.appletMeta['xgamma@mrkschan.gmail.com'].path;


function MyApplet(orientation) {
  GLib.spawn_command_line_sync(
    'xgamma -rgamma 0.75 -ggamma 0.73 -bgamma 0.72');
}


function main(metadata, orientation) {
  let myApplet = new MyApplet(orientation);
  return myApplet;
}
