require('dotenv').config();
const envInfo = {
    PORT : Number(process.env.PORT),
    DATABASE_URL : String(process.env.MONGODB_CONNECTION_URL),
    MONGODB_USER_NAME : String(process.env.MONGODB_USER_NAME),
    MONGODB_PASSWORD : String(process.env.MONGODB_PASSWORD),
}

module.exports = envInfo;