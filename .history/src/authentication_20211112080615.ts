import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOAuth, OAuthStrategy, OAuthProfile } from '@feathersjs/oauth';
import { AuthenticationStrategy, JWTStrategy } from '@feathersjs/authentication';

import { Application } from './declarations';


declare module './declarations' {
    interface ServiceTypes {
        
    }
}
