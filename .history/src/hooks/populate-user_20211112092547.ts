import { Hook, HookContext } from '@feathersjs/feathers'


export default ():Hook => {
    return async (context: HookContext) => {

        const { app, method, results, params } = context;



        return context;
    }
}