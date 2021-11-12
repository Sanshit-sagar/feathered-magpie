import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';
import favicon from 'serve-favicon';

import configuration from '@feathers/configuration'
import express from '@feathers/express';
import socketio from '@feathers/socketio'; 

import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';

