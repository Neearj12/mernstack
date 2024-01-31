import mongoose from 'mongoose'

const connectDb=async()=>{
  
 try {
   const conn=await mongoose.connect(process.env.URL,{ useNewUrlParser: true, useUnifiedTopology: true }) 

   console.log('conneted to mongodb database');   
 } catch (error) {
    console.log(`Error in mongodb ${error}`.bgRed.white);
 }
}
export default connectDb