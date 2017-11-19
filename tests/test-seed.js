const db = require('../db/model')
const _db = db.db;

async function seeder(){
    try {
        await _db.sync({force: true});
        let company = await db.Company.create({
            name: 'Villa Monte',
            address: '728 Old Bethpage Rd', 
            city: 'Old Bethpage',
            state: 'NY',
            email: 'monte@gmail.com',
            password: 'testtest'
        })
    } catch (err){
        console.error(err);
    }
}

seeder()
