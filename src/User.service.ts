import { UserRequestDto } from './Database'
import { UserRepository } from './User.repository'

// NOTE: Make userRepo public and not private. This is required for the tests!
export class UserService {
  constructor(public readonly userRepo: UserRepository) {}

  async createUser(user: UserRequestDto) {
    return this.userRepo.createUser(user)
  }
}
