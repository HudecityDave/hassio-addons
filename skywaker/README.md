## Sky-Waker REST service

The original [Sky-Remote](https://github.com/dalhundal/sky-remote) from dalhundal requires nodejs package to work. This small addon will run a REST-wrapper around it to use sky-remote with hass.io.

I used vkorns [ps4-hass-waker](https://github.com/vkorn/hassio-addons/tree/master/ps4waker) as base, and changed everything for use with sky-remote. 
I only use the "power" function in automations. The sky box is not responding any state, so everything is very basic here.

## sky.py
You have to configure a custom component media player to use it.
The sky.py has to be in custom_components/media_player (is a direct copy of the original ps4.py - only changed to sky, for now only on/off is used)

## configuration.yaml

set up a media_play like this:
```
platform: sky
host: http://hassio_ip:port
sky_ip: ip_of_sky_box
name: Sky Receiver
local_store: channels
```

## Hassio UI

Set up the port here 
Set up the IP of the sky-box, too


## Sky Receiver Version (Q or non-Q)

Take a look to the original sky-remote project to decide your box version:

```javascript
var remoteControl = new SkyRemote('192.168.0.40', SkyRemote.SKY_Q_LEGACY);
```
or
```javascript
var remoteControl = new SkyRemote('192.168.0.40');
```

Hint: For me the SKY_Q_LEGACY version works for the sky+ HD /sky UHD (Humax 160 box).