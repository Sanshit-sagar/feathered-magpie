import { Hook, HookContext } from '@feathersjs/feathers';

export default (): Hook => {
    return async (context: HookContext) => {
        const { data } = context;

        if(!data.text) {
            throw new Error('A message needs text');
        }

        const user = context.params.user;

        

    };
}