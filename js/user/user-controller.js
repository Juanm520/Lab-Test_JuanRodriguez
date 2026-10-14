class UserController{
    
    constructor(){
        this.users = [];
    }
    
    getUsers(){
        return this.users;
    }

    add(user){
        if (this.users.some(userExisting => userExisting.id === user.id)){
            //return null if exists.
            return null
        }
        this.users.push(user);
    }

    remove(user){
        if (this.users.some(userExisting => userExisting.id === user.id)) {
            return this.users = this.users.filter(function(ele){
                return !ele.equalsTo(user)
            }); 
        }
        //return null if not exists.
        return null
    }

    findByEmail(email){
        // Valida que el email este en un formato adecuado.
        const regexEmailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!regexEmailValido.test(email)){
            return null
        }

        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].email === email)
                return this.users[i];
        } 
    }

    findById(id){
        const regexIdNumerico = /^\d+$/
        if(!regexIdNumerico.test(id)){
            return null
        }
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].id === id)
                return this.users[i];
        } 
    }


}


module.exports = UserController;