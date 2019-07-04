const { UserRepository } = require('./userRepository');

class ListUsers {

    constructor(di) {
        const defaultDependencies = { UserRepository: UserRepository }
        this.di = {}
        Object.assign(this.di, defaultDependencies, di)
    }

    run(id) {
        const repository = new this.di.UserRepository(this.di)
        return repository.findAll({where: {id}})
    }

}

module.exports = { ListUsers };