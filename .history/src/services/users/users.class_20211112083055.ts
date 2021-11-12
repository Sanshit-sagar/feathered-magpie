import crypto from 'crypto';
import { Params } from '@feathersjs/feathers';
import { Service, NedbServiceOptions } from 'feathers-nedb'; 

import { Application } from '../../declarations'

const gravityUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';

const getGravatar = (email: string) => {
    // Gravatar uses MD5 hashes from an email address (all lowercase) to get the image
    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    // Return the full avatar URL
    return `${gravatarUrl}/${hash}?${query}`;
  }