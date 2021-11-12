import { ServiceAddons, Params } from '@feathersjs/feathers'
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOAuth, OAuthStrategy, OAuthProfile } from '@feathersjs/authentication-oauth';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';

import { Application } from './declarations';

declare module './declarations' {
    interface ServiceTypes {
        'authentication': AuthenticationService & ServiceAddons<any>;
    }
}

class GitHubStrategy extends OAuthStrategy {
    async getEntityData(profile: OAuthProfile, existing: any, param: Params) {
        const baseData = await super.getEntityData(profile, existing, param);

        return {
            ...baseData,
            name: profile.login,
            avatar: profile.avatar,
            email: profile.email,
        }
    }
}

export default function (app: Application) {
    const authentication = new AuthenticationService(app);
    
    authentication.register('jwt', )
}