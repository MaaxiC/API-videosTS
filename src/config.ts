import dotenv from 'dotenv'
dotenv.config()

const config = {
    server: {
        PORT: process.env.PORT || 3000,
        MONGO_URL: process.env.URL
    }
}

export { config }