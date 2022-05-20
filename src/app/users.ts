export class Users {
    name: string | undefined;
    email: string | undefined;
    phone: number | undefined;
    profile: string | undefined;
    id: number | undefined;

    constructor(id: number | undefined, name: string | undefined, email: string | undefined, phone: number | undefined, profile: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.profile = profile;
    }
}
