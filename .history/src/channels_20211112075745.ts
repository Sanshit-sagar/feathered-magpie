import { HookContext } from '@feathersjs/feathers'
import { Application } from './declarations'

export default function(app: Application) {

    if(typeof app.channel !== 'function') {
        return;
    }


}