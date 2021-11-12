import { ServiceAddons, Params } from '@feathersjs/feathers'
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOAuth, OAuthStrategy, OAuthProfile } from '@feathersjs/oauth';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';

import { Application } from './declarations';

declare module './declarations' {
    interface ServiceTypes {
        'authentication': AuthenticationService & ServiceAddons<any>;
    }
}

class GitHubStrategy extends OAuthStrategy {
    async getEntityData(profile: OAuthProfile, existing: any, param: )
}