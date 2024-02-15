require('dotenv').config();

import express from 'express';

require('express-group-routes');

import { Request, Response } from 'express';
import ListTemplates from './libs/SESClient/services/ListTemplates';
import GetTemplate from './libs/SESClient/services/GetTemplate';
import CreateTemplate from './libs/SESClient/services/CreateTemplate';
import SendTemplate from './libs/SESClient/services/SendTemplate';
import UpdateTemplate from './libs/SESClient/services/UpdateTemplate';
import DeleteTemplate from './libs/SESClient/services/DeleteTemplate';

const app = express();

app.use(express.json());

//@ts-ignore
app.group('/ses/template', router => {
    router.get('/list/:limit', async (req: Request, res: Response) => {
        try {
            const { limit } = req.params;
            const response = await new ListTemplates().execute(Number(limit));

            res.send(response).status(200);
        } catch (error) {
            res.send(error.message);
        }
    });

    router.get('/:templateName', async (req: Request, res: Response) => {
        try {
            const { templateName } = req.params;
            const response = await new GetTemplate().execute(templateName);

            res.send(response).status(200);
        } catch (error) {
            res.send(error.message);
        }
    });

    router.post('/create', async (req: Request, res: Response) => {
        try {
            const response = await new CreateTemplate().execute(req.body);

            res.send(response).status(200);
        } catch (error) {
            res.send(error.message);
        }
    });

    router.post('/send', async (req: Request, res: Response) => {
        try {
            const response = await new SendTemplate().execute(req.body);

            res.send(response).status(200);
        } catch (error) {
            res.send(error.message);
        }
    });

    router.put('/update', async (req: Request, res: Response) => {
        try {
            const response = await new UpdateTemplate().execute(req.body);

            res.send(response).status(200);
        } catch (error) {
            res.send(error.message);
        }
    });

    router.delete('/:templateName', async (req: Request, res: Response) => {
        try {
            const { templateName } = req.params;
            const response = await new DeleteTemplate().execute(templateName);

            res.send(response).status(200);
        } catch (error) {
            res.send(error.message);
        }
    });
});

app.get('/health', (_req: Request, res: Response) => {
    res.send('Application works!');
});

app.listen(process.env.PORT, () => {
    console.log(`Application started on port ${process.env.PORT}!`);
});
