import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Users } from './users.class';

import createModel from '../../users.model';
import hooks from './user.hooks'; 


declare module