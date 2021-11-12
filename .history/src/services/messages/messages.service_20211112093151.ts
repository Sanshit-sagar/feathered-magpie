import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'

import createModel from '../../models/messages.model'
import { Messages } from './messages.class'
import hooks from './messages.hooks'

declare module '../../declarations' {
    interface ServiceTypes {
        'messages': Messages & ServiceAddons<any>; 
    }
}

export default function (app: Application) {
    const Model = createModel(app);
    const paginate = app.get('paginate');

    const options = {
        Model,
        paginate
    };

    app.use('/messages', new Messages(options, app));
    const service = app.service('messages');
    service.hooks(hooks); 
}