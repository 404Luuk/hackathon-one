const fs = require('fs');
let users = require('../data/userData.json');

export const usersRepo = {
    getAllL: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    //find
    create,
    update,
    delete: _delete
};

function create(user) {
    //create userid
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    users.push(user);
    saveData();
}


function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}


function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
}


function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}