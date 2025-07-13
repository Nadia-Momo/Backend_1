/* eslint-disable no-console */
import {Server} from "http";
import app from "./app";
import mongoose from "mongoose";
import { envVars } from "./app/config/env";
let server:Server;
const startServer=async()=>{
try{
console.log(envVars.NODE_ENV)    
console.log(process.env.NODE_ENV);
  await mongoose.connect("mongodb+srv://momo:Zal7PJcqbwMBrC4R@cluster0.ztncy8c.mongodb.net/tour-management-system-backend?retryWrites=true&w=majority&appName=Cluster0")
server= app.listen(envVars.PORT,()=>{
console.log(`Server is listening to PORT ${envVars.PORT}`);
})      
    }
    catch(error){
        console.log(error);
    }

}
startServer()
process.on("SIGTERM",()=>{
console.log("SIGTERM signal received...Server shutting down");
    if(server){
        server.close(()=>{
             process.exit(1)
        });
       
    }
    process.exit(1)
});
process.on("unhandledRejection",(err)=>{
console.log("Unhandled Rejection detected...Server shutting down",err);
if(server){
server.close(()=>{
process.exit(1)
});
}
process.exit(1)
});
process.on("SIGINT",()=>{
console.log("SIGINT signal shutting down...");
if(server){
server.close(()=>{
process.exit(1)
});
}
process.exit(1)
});
