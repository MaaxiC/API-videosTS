import dotenv from 'dotenv'
dotenv.config()

export default {
    MONGO_DATABASE: process.env.db || 'videosTS',
    MONGO_URL: process.env.url,
    PORT: process.env.port || 3000
}