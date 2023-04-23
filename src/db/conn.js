const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root2:Shaurya%4022may@cluster0.j1ucfh7.mongodb.net/Game_Register",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log(`Connection Sucessful`);
}).catch((e) => {
    console.log(e);
})







