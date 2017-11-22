const app = require('./server');
const {connection} = require('./db');

connection.sync()
.then(() => {
    app.listen(3000, () => {
        console.log('server running on port 3000'); 
    })
})
