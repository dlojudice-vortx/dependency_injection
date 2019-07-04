const { ListUsers } = require('./listUsers');

class UserController {

    constructor(di) {
        const defaultDependencies = { ListUsers: ListUsers }
        this.di = {}
        Object.assign(this.di, defaultDependencies, di)
    }

    list(request) {
        const listUsers = new this.di.ListUsers(this.di)
        return listUsers.run(request.id)
    }

}

module.exports = { UserController };