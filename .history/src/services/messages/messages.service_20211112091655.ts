import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'

import { Messages } from './messages.class'
import createModel from '../../models/messages.model'
import hooks from './messages.hooks'

declare module '../declarations'