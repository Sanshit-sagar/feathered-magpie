import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Users } from './users.class';

import createModel from '../../users.model';
import hooks from './user.hooks'; 


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

    app.use('/users', new Users(options,))
}