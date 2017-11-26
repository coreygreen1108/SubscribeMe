const db = require('../db/model')
const _db = require('../db').connection;

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
        let company2 = await db.Company.create({
            name: 'Fashioncraft',
            address: '5050 veterans memorial highways', 
            city: 'holbrook',
            state: 'NY',
            email: 'fashion@gmail.com',
            password: 'testtest'
        })
        console.log('company seeding complete');
    } catch (err){
        console.error(err);
    }
}

seeder()
