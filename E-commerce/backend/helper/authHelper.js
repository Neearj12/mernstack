 import bcryptjs from 'bcryptjs'
 export const hashPassword=async(password)=>{
    try {
        const saltRounds=10;
        const hash=await bcryptjs.hash(password,saltRounds)
        return hash
    } catch (error) {
    console.log(error);        
    }
 }

 export const comparePassword= async (password,hashPassword)=>{
    return bcryptjs.compare(password,hashPassword)
 }