import mongoose from 'mongoose'
import { config } from './config'

//(async () => {console.log('hola')})()
(async () => {
    try {
        const db = await mongoose.connect(`${config.server.MONGO_URL}`)
        console.log('database connection established to: ', db.connection.name)
    } catch (error) {
        console.log({status: 'error', error: 'failed to connect to the database'})
    }
})()
