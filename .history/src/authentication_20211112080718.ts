import { ServiceAddons, Params } from '@fea'
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOAuth, OAuthStrategy, OAuthProfile } from '@feathersjs/oauth';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';

import { Application } from './declarations';

declare module './declarations' {
    interface ServiceTypes {
        'authentication': AuthenticationService & ServiceAddons<T>;
    }
}
