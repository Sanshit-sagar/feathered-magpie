import { Hook, HookContext } from '@feathersjs/feathers';

export default (): Hook => {
    return async (context: HookContext) => {
        const { data } = context;

        if(!data.text) {
            throw new Error('A message needs text');
        }

        const user = context.params.user;

        const text = context.data.text.substing(0,400)

    };
}