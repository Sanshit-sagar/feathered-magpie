import crypto from 'crypto';
import { Params } from '@feathersjs/feathers';
import { Service, NedbServiceOptions } from 'feathers-nedb'; 

import { Application } from '../../declarations'

const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';

// Gravatar uses MD5 hashes from an email address (all lowercase) to get the image
const getGravatar = (email: string) => {
    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    return `${gravatarUrl}/${hash}?${query}`;
}

interface UserData {
    _id?: string;
    email: string;
    password: string;
    name?: string;
    avatar?: string;
    githubId?: string; 
};


export class extends Service<UserData> {
    
}