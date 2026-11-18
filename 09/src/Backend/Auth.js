import config from '../configrations/config'
import { Client, Account, ID } from "appwrite";
export class AuthBlueprint{
    client = new Client();
    account;
    constructor(){
        this.client
            .setProject(config.appwriteProjectId)
            .setEndpoint(config.appwriteUrl);
        this.account=new Account(this.client)
    };
    //lets create blueprint of auth-Operations
    // 1 create account
    async createAccount({email,password,name}){
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                return this.login({email,password});
            };
        } catch (error) {
            throw new Error(`${error.message}::"This error is occur in createAccount of AuthBlueprint in Backend."`);
        };
    };
    // 2 account login
    async login({email,password}){
        try {
            await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw new Error(`${error.message}::"This error is occur in login of AuthBlueprint in Backend."`);
            
        };
    };
    // 3 gett current user in app 
    async getCurrentUser(){
        try {
            await this.account.get()
        } catch (error) {
            throw new Error(`${error.message}::"This error is occur in getCurrentUser of AuthBlueprint in Backend."`);
        }
        return null;
    }
    async logoutFromAll(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error(`${error.message}:: "This error is occur in logoutFromAll of AuthBlueprint in Backend."`);
        }
    };
    async logoutFromThis(){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            throw new Error(`${error.message}:: "This error is occur in logoutFromThis of AuthBlueprint in Backend."`);
        }
    }


}
export const AuthService=new AuthBlueprint()
export default AuthService;