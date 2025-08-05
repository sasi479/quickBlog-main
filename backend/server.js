import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRouter.js'
import path from 'path';
import { fileURLToPath } from 'url';

const  app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const PORT = process.env.PORT ||3000;

app.listen(PORT,()=>{
    console.log('server is running on port' + ' ' + PORT);
    
})

export default app