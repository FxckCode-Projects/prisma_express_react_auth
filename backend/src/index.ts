import express from 'express';
import cors from 'cors';
import auth from './auth/auth.routes'
import user from './users/users.routes'

const app = express();

app.use(express.json())
app.use(cors())

app.use("/auth", auth)
app.use("/general", user)


app.listen(3500)
console.log("App listen on port 3500")