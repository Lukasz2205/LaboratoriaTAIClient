export class User {
  constructor(name, role, token) {
    this.name = name,
    this.role = role,
    this.token = token
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }
}