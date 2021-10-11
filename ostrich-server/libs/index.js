import KoaApplication from "./koa/index";

class Factory{
    constructor(){
        if(new.target){
            throw new Error("Singleton pattern class, new is not allowed");
        }
    }
    static create(target,options){
        if(target.name === 'KoaApplication'){
            return new KoaApplication(options)
        }
    }
}
export { Factory,KoaApplication}