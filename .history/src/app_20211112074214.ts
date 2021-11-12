import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';
import favicon from 'serve-favicon';

import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio';  
import configuration from '@feathersjs/configuration';

import logger from './logger';
import services from './services';
import appHooks from './app.hooks';
import middleware from './middleware';
import channels from './channels';

