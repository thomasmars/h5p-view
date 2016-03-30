/**
 * Created by thoma_000 on 29.03.2016.
 */

// Requires H5P to be a global variable.
global.H5PIntegration = {};
global.H5P = {};

require('./scripts/h5p');
require('./scripts/h5p-event-dispatcher');
require('./scripts/h5p-x-api-event');
require('./scripts/h5p-x-api');
require('./scripts/h5p-content-type');

document.write('TESTING!!');

