import Database, { UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  public readonly db = Database

  async createUser(user: UserRequestDto) {
    if (!user) throw new Error('Userdata is missing')
    if (!user.username) throw new Error('Username is missing from userdata')
    return this.db.create(user)
  }
}
