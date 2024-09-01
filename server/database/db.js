
import mongoose from 'mongoose';
  const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.s8s99.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try{
await mongoose.connect(URL,{useNewUrlParser:true});
console.log('db connection success')
    }catch(error){
console.log('error while connection',error);
    }
}
export default Connection;
