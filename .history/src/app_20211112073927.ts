import favicon from 'serve-favicon';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';


import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';