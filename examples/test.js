var notify = require('../index.js');

var image_url = 'http://st.motortrend.com/uploads/sites/10/2017/11/2018-Jeep-Wrangler-Unlimited-Sahara.jpg';
notify('192.168.1.77', '2018 Jeep Wrangler', 'This is a sample image of the new 2018 Jeep Wrangler', image_url, 5);

var image_url = 'http://st.motortrend.com/uploads/sites/5/2017/12/2018-Jeep-Wrangler-Rubicon.jpg?interpolation=lanczos-none&fit=around|660:438';
notify('192.168.1.77', '2018 Jeep Wrangler', 'The First Drive.', image_url, 5);
