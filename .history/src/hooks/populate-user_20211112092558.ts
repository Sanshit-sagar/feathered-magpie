import { Hook, HookContext } from '@feathersjs/feathers'


export default ():Hook => {
    return async (context: HookContext) => {

        const { app, method, result, params } = context;

        const addUser = async (user: User) => {
            
        }

        return context;
    }
}