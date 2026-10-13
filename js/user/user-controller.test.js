const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });
  
  test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // Existe en la lista de usuarios, debe arrojar> null.
  test('user exist in users list, return null', () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user)
      expect(userController.add(user)).toEqual(null);
    });

// No existe en la lista de usuarios. Debe devolver> null
test('User not exists, return null', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.remove(user)).toEqual(null);
  });

