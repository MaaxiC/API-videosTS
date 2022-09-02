import app from './app'
import './database'
import { config } from './config'

app.listen(config.server.PORT, () => {
    console.log('listening on port ', config.server.PORT)
})