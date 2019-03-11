import R from 'ramda'
import { Router } from 'express'
import bodyParser from 'body-parser'
import bunyan from 'bunyan'

export default ({
  userService,
  authService,
  log = bunyan({ noop: true })
}) => {
  const router = Router({ mergeParams: true })
  router.use(bodyParser.json())

  router.get('/', async (req, res, next) => {
    try {
      const users = await userService.getAllUsers()
      res.json({ users })
    } catch (e) {
      log.error(e)
      next(e)
    }
  })

  return router
}
