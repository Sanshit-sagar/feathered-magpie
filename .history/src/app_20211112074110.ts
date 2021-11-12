import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';
import favicon from 'serve-favicon';

import feathers from '@feathersjs/feathers'; 
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio'; 

import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';

