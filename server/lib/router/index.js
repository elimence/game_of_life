import bunyan from 'bunyan'
import createUserRouter from './user'
import { Router } from 'express'

export default ({
  userService,
  log = bunyan({ noop: true })
}) => {
  const router = Router({ mergeParams: true })

  router.use('/users', createUserRouter({
    userService,
    log: log.child({ router: 'users' })
  }))

  return router
}
