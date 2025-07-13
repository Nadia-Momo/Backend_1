import dotenv from "dotenv"
dotenv.config()
interface EnvConfig{
    PORT:string,
    DB_URL:string,
    NODE_ENV:"development"|"production"
}
const loadEnvVariables=():EnvConfig=>{
    const requiredEnvVariable:string[]=["PORT","DB_URL","NODE_ENV"];
    requiredEnvVariable.forEach(Key=>{
        if(!process.env[Key]){
            throw new Error(`Missing require environment variable ${Key}`)
        }
    })
    return {
    PORT:process.env.PORT as string,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    DB_URL:process.env.PDB_URL!,
    NODE_ENV:process.env.NODE_ENV as "development" |"production"
}
}
export const envVars=loadEnvVariables()
