const connection	=`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoose		= require('mongoose');
// use nativ promises
mongoose.Promise	= global.Promise;

exports.db = mongoose.connect(connection);