This is my solution to set a certain xgamma when cinnamon (v1.4.0) starts.


The story is like this. My laptop has a blue-ish screen and I want to adjust
the amount of blue colors by using xgamma (The exact command is
`xgamma -rgamma 0.75 -ggamma 0.73 -bgamma 0.72`). My very first attempt is to
use .xsessionrc to do so since it is easy. However, cinnamon (v1.4.0) does not
really like the xgamma values. When it starts, it reset the gamma and used
`xgamma -gamma 1.0`. Therefore, the bug report was produced -
http://is.gd/FButrH. I don't really know whether it is a bug in cinnamon but I
know that if I switch back to gnome-2, it won't reset the xgamma value.

Also, I know that I can also use `/etc/X11/xorg.conf` to set the gamma value. I
didn't use it because that config file is too complicated to me.

As a result, I googled again and again, finding out that I may try to make a
"hack", using cinnamon applet to do the task. And, here is the applet in this
git repository.


Note: I used the icon file from the cinnamon Brightness applet :) Thanks for
the icon.


= Installation =
copy the folder xgamma@mrkschan.gmail.com/ to ~/.local/share/cinnamon/applets/
`cp -a xgamma@mrkschan.gmail.com ~/.local/share/cinnamon/applets/`