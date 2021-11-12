import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';

import hooks from './users.hooks'; 
import { Users } from './users.class';
import createModel from '../../models/users.model';

declare module '../../declarations' {
    interface ServiceType {
        'users': Users & ServiceAddons<any>; 
    }
};

export default function (app: Application) {
    const Model = createModel(app);
    const paginate = app.get('paginate');

    const options = {
        Model,
        paginate
    }; 

    app.use('/users', new Users(options, app));
    const service = app.service('users');

    // @ts-ignore
    service.hooks(hooks); 
}