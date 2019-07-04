const { UserController } = require('./userController');

function main() {

    const request = {id: 42}
    const controller = new UserController()
    const users = controller.list(request)

    console.log(users)

}

main()