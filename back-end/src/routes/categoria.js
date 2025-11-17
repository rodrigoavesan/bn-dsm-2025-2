import { Router } from 'express'
import controller from '../controllers/categorias.js'

const router = Router()

router.post('/', controller.create)
<<<<<<< HEAD
=======
router.get('/', controller.retrieveAll)
>>>>>>> 2d0bc48c0fff22cde12d9a7dfceed104124b8385

export default router