import { Factory,KoaApplication } from '../libs/index.js'


(async function(){
    const app = Factory.create(KoaApplication)
    await app.listen(5000)
})()