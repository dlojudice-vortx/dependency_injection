const { UserController } = require('./userController');

function UserListTest() {

    //GIVEN
    const request = {id: 42}
    const injection = {
        UserRepository: class FakeUserRepository { 
            findAll(where) { 
                return [
                    {id: 10, name: "João"}
                ] } 
            }
    }
    const controller = new UserController(injection)

    //WHEN
    const users = controller.list(request)

    //THEN
    if (users[0].id != 1) return console.log("Erro:" + users[0].id)
    console.log("ok")

}

test()