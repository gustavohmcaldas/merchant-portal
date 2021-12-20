export class User {
    public id: number;
    public username: string;
    public email: string;
    public active: boolean;
    public notLocked: boolean;
    public role: string;
    public authorities: [];
    
    constructor() {
        this.username = '';
        this.email = ''
        this.active = false;
        this.notLocked = false;
        this.role = '';
        this.authorities = [];
    }
}