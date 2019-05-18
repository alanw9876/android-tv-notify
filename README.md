# android-tv-notify

### Android TV Notifications
This is for sending quick notifications/alerts to your Android TV.  It requires that the "Notification for Android TV" apk be installed on your TV to receive the messages.

###### Example Use:

~~~javascript
var notify = require('android-tv-notify')
notify('192.168.1.64', 'Stock Alert', "Stock Price Watch: $118.25 as of "+Date(), "stock.png", "15")
~~~
