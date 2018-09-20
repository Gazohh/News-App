class User {
    username: string;
    password: string;
    email: string;

    get getUsername():string {
        return this.username;
    }

    set setUsername(username:string) {
        this.username = username;
    }

    get getPassword():string {
        return this.password;
    }

    set setPassword(password:string) {
        this.username = password;
    }

    get getEmail():string {
        return this.email;
    }

    set setEmail(email:string) {
        this.username = email;
    }
}
