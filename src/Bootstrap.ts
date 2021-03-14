import 'dotenv/config'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'
import { UserController } from './User.controller'

/* --- Do this as last! --- */
const userRepository = new UserRepository()
const userService = new UserService(userRepository)
export const userController = new UserController(userService)

// NOTE: Make sure to do a named export of your userController
