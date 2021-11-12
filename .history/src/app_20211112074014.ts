import cors from 'cors';
import helmet from 'helmet';
import compress from 'compression';
import favicon from 'serve-favicon';

import 
import express from '@feathers/express';

import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';

