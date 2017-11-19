const app = require('./server');
const db = require('./db/model').db;

db.sync()
.then(() => {
    app.listen(3000, () => {
        console.log('server running on port 3000'); 
    })
})
