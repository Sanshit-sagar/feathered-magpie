import { Hook, HookContext } from '@feathersjs/feathers';

export default (): Hook => {
    return async (context: HookContext) => {
        const { data } = context;

        if(!data)

    };
}