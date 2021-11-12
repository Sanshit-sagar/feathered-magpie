import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';
import favicon from 'serve-favicon';

import configuration from '@feathersks/configuration'
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio'; 

import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';

