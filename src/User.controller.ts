import { UserRequestDto } from './Database'
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {
  constructor(public readonly userService: UserService) {}

  async store(data: unknown) {
    return this.userService.createUser(data as UserRequestDto)
  }
}
