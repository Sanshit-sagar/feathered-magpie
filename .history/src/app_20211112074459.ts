import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';
import favicon from 'serve-favicon';

import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio';  
import configuration from '@feathersjs/configuration';

import logger from './logger';
import channels from './channels';
import services from './services';
import appHooks from './app.hooks';
import middleware from './middleware';
import authentication from './authentication';
import { Application } from './declarations';


const app: Application = express(feathers()); 

app.configure(configuration())

app.use(cors());
app.use(helmet());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded());
