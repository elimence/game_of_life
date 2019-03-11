import R from 'ramda'
import uuid from 'uuid'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import bunyan from 'bunyan'
import {
  badRequest,
  boomify,
  unauthorized,
  notFound
} from 'boom'

export class UserService {
  constructor ({
    reqId = uuid(),
    log = bunyan({ noop: true })
  } = {}) {
    this.log = log.child({ service: 'user-service', reqId })
  }

  async getAll () {
    try {
      const users = await this.UserModel.find()
      return users
    } catch (e) {
      this.log.error(e)
      throw e
    }
  }
}

export default options => new UserService(options)
