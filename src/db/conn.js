const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Game_Register",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log(`Connection Sucessful`);
}).catch((e) => {
    console.log(e);
})


