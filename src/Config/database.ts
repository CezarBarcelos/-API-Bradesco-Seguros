var mongoose = require('mongoose');
var mongoStrCon: string = 'mongodb://localhost:27017/';

mongoose.connect(mongoStrCon, function (error) {  
  if (error) {
    throw error;
  }
  else
  {    
    console.log('Conectado ao MongoDB! [ ' + mongoStrCon + ' ]');
    mongoose.connection.close();
  }  
});

export default mongoose.connection.readyState;