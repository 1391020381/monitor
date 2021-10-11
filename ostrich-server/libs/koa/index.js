import path from 'path'
import factory from './koa.js'
import context from './core/context'

export default class KoaApplication{
    constructor(option){
       this.engine = factory(option)
       context.engine = this.engine
    }
    async listen(prot,ip){
       await this.engine.app.run(prot,ip)
    }
}