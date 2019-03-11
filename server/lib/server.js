import path from 'path'
import cors from 'cors'

import express from 'express'
import serveFavicon from 'serve-favicon'
import bunyan from 'bunyan'

import {
  createUserService
} from './services'

import createRouter from './router'

export default ({
  log = bunyan({ name: ' Ceruba Api', noop: true }),
  pkg = {}
} = {}) => {
  const app = express()

  // Provision dependencies
  const userService = createUserService({ log })

  const router = createRouter({
    userService,
    log
  })

  app.use(cors())
  app.get('/', (req, res, next) => { res.json(pkg) })
  app.use('/api/v1', router)

  const onStart = async () => {}

  return {
    server: app,
    onStart
  }
}
