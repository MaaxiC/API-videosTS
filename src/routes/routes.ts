import { Router } from 'express'
import * as videoController from './controller'

const videoRouter = Router()

videoRouter.get('/videos', videoController.getVideos)
videoRouter.get('/videos/:id', videoController.getVideo)
videoRouter.post('/videos', videoController.createVideo)
videoRouter.delete('/videos/:id', videoController.deleteVideo)
videoRouter.put('/videos/:id', videoController.updateVideo)

export { videoRouter }