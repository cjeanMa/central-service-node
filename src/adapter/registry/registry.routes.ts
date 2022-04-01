import {Router} from 'express'
import { RegistryController } from './registry.controller'

const router = Router();

router.post("/", RegistryController.postRegistry)

export default router;