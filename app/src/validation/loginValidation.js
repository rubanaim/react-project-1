
import {z} from "zod";

const loginSchema = z.object({
    email : z.string().min(1,{message:'Email is reqiured'}).email({message:'Inavlid Email'}),
    password : z.string().min(1,{message:'Password is required'})
})

export default loginSchema;
