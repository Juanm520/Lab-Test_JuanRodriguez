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

  //Tarea 2>
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

// findByEmail prueba uno: devuelve solo el user correcto. 
test('Find the user by his email returns the rigth user', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    let user1 = new User(12345,"Pedro", "pedro@generation.org");
    userController.add(user);
    userController.add(user1);
    expect(userController.findByEmail(user.email)).not.toEqual(user1);
    expect(userController.findByEmail(user1.email)).toEqual(user1);
  });

// findByEmail prueba dos: Falla si no es un email valido.
test('An wrong email format returns null', () => {    
    let userEmailInvalido = "santiago.generation.org"
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail(userEmailInvalido)).toEqual(null);
    expect(userController.findByEmail(user.email)).not.toEqual(null);
  });

// findById prueba uno: busca el id apropiado.
test('Find the user by his id returns the rigth user', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    let user1 = new User(12345,"Pedro", "pedro@generation.org");
    userController.add(user);
    userController.add(user1);
    expect(userController.findById(user.id)).not.toEqual(user1);
    expect(userController.findById(user1.id)).toEqual(user1);
  });

// findById prueba dos: Solo acepta numeros. 
test('An wrong id format returns null', () => {    
    let userIdInvalido = "3e22"
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findById(userIdInvalido)).toEqual(null);
    expect(userController.findById(user.id)).not.toEqual(null);
  });



