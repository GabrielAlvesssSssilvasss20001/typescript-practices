import {Request, Response} from 'express';
import {createUser} from './createUser';

export let displayUserJSON = (req: Request, res: Response) => {
    const user = createUser(
        {
            name: 'Gabriel',
            password: '0000',
            email: 'gbr@gmail.com'
        }
    );
    console.log(user);
    res.json(typeof(user.address));
};