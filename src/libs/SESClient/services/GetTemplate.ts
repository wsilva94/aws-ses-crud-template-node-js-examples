import { GetTemplateCommand, SESClient } from '@aws-sdk/client-ses';

import config from '../config/ses';

class GetTemplate {
    private SESClient: SESClient;
    constructor() {
        this.SESClient = new SESClient(config);
    }

    public async execute(templateName: string): Promise<any> {
        const listTemplates = new GetTemplateCommand({
            TemplateName: templateName,
        });

        try {
            const response = await this.SESClient.send(listTemplates);

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default GetTemplate;
