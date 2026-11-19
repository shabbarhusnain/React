import config from '../configrations/config'
import {Client,Databases,Storage,ID,Query} from 'appwrite'

export class DatabaseBlueprint{
    client= new Client();
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket= new Storage(this.client)
    }
//-----------------------------------Post database CRUD operations----------------------------------------
    // create data
    async createPost({title,slug,content,featuredimage,status,userid}){
            try {
               return await this.database.createDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug,{
                        title,content,featuredimage,status,userid
                    }
                )
                return true;
            } catch (error) {
                throw new Error(`${error},"This error is occured at createPost in database.js"`);
                return false
            }
        };
    // update data
    async updatePost(slug,{title,content,featuredimage,status}){
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                    title,content,featuredimage,status}) 
        } catch (error) {
            throw new Error(`${error},"This error is occured at updatePost in database.js"`);
        }
    };
    // delete post
    async deletePost(slug){
        try {
            return await this.database.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
            return true;
        } catch (error) {
            throw new Error(`${error},"This error is occured at deletePost in database.js"`);
            return false
        }
    }
    // show single. post
    async singlePost(slug){
        try {
            return this.database.getDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
            return true;
        } catch (error) {
            throw new Error(`${error},"This error is occured at SinglePost in database.js"`);
            return false;
        }
    };
    // all Active post
    async postList(queries=[Query.equal("status","active")]){
        try {
            return this.database.listDocuments(config.appwriteDatabaseId,config.appwriteCollectionId,queries);

        } catch (error) {
            throw new Error(`${error},"This error is occured at postlist in database.js"`);

        }
    }
//------------------------------------file Storage CRUD operation-----------------------------------------
    // upload file/image
    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            throw new Error(`${error},"This error is occured at uploadFile in database.js"`);
        }
    };
    // update image
    async updateFile(fileId){
        try {
            return this.bucket.updateFile(config.appwriteBucketId,fileId)
        } catch (error) {
            throw new Error(`${error},"This error is occured at updateFile in database.js"`);
        }
    }
    // delete image
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(config.appwriteBucketId,fileId)
        } catch (error) {
            throw new Error(`${error},"This error is occured at deleteFile in database.js"`);
        }
    }
    // preview image
    async previewFile(fileId){
        try {
            return await this.bucket.getFilePreview(config.appwriteBucketId,fileId)
        } catch (error) {
            throw new Error(`${error},"This error is occured at previewFile in database.js"`);
        }
    }
//---------------------------------------------------------------------------------------
}
export const databaseServices=new DatabaseBlueprint()
export default databaseServices;