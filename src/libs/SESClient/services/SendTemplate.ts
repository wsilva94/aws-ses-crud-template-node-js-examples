import { SESClient, SendTemplatedEmailCommand } from '@aws-sdk/client-ses';

import ISendTemplate from '../interfaces/ISendTemplate';
import config from '../config/ses';

class SendTemplate {
    private SESClient: SESClient;

    constructor() {
        this.SESClient = new SESClient(config);
    }

    public async execute({
        toAddresses,
        template,
        templateData,
    }: ISendTemplate): Promise<any> {
        const sendTemplatedEmail = new SendTemplatedEmailCommand({
            Source: process.env.APP_MAIL,
            Destination: {
                ToAddresses: toAddresses,
            },
            Template: template,
            TemplateData: JSON.stringify(templateData),
        });

        try {
            const response = await this.SESClient.send(sendTemplatedEmail);

            return response;
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
}

export default SendTemplate;
