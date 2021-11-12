import { HookContext } from '@feathersjs/feathers'
import { Application } from './declarations'

export default function(app: Application) {

    if(typeof app.channel !== 'function') {
        return;
    }

    app.on('connection', (connection: any) => {
        app.channel('anonymous').join(connection); 
    });

    app.on('login', (authResults: any, { connection }: any) => {
        if(connection) {

            app.channel('anonymous').leave(connection);

            app.channel('authenticated').join(connection);
        }
    })
}