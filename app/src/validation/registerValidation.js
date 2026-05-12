
import {z} from "zod";

const registerSchema = z.object({
    firstName : z.string().min(1,{message:'First Name is required'}),
    lastName : z.string().min(1,{message:'Last Name is required'}),
    phone : z.string().min(1,{message: ' Enter Your Phone Number'}).regex(/^01[0-25][0-9]{8}$/,{message:'Invalid Phone Number'}),
    email : z.string().min(1,{message:'Email is reqiured'}).email({message:'Inavlid Email'}),
    password : z.string().min(1,{message:'Password is required'}).regex(/[A-Z]{2}/,{message:'Enter Two Capital Characters'}).regex(/[0-9]{3}/,{message:'Enter Three Numbers or more'}).regex(/.*[~!@#$%^&*()_\-+={\[}\]|\\:;"'<,>.\/?].*/,{message:"Password must includes one special Character at least"}).min(8,{message:'Password must be 8 Characters or more'}),
    confirmPassword: z.string().min(1,{message:'Confirm Password is required'}),
    gender: z.enum(['male','female'],{message:'Gender is required'})
}).refine(schema=>schema.password===schema.confirmPassword,{message:'Password is not Matching',path:['confirmPassword']})

export default registerSchema;
