export class User {
  constructor(name, roles, token) {
    this.name = name,
    this.roles = roles,
    this.token = token
  }

  getName() {
    return this.name;
  }

  getRoles() {
    return this.roles
  }

}