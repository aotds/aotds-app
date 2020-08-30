import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import rest_api from '@aotds/aotds-rest';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

app.use(rest_api({
    pouch_root: './data',
    prefix: '/api',
})
)

const sapper_app = express();
sapper_app.use(
    compression({ threshold: 0 }),
    sirv('public', { dev }),
    sapper.middleware()
);

app.use( sapper_app );


app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
