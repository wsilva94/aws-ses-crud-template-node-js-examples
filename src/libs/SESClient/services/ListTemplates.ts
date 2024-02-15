import { ListTemplatesCommand, SESClient } from '@aws-sdk/client-ses';

import config from '../config/ses';

class ListTemplates {
    private SESClient: SESClient;

    constructor() {
        this.SESClient = new SESClient(config);
    }

    public async execute(maxItems = 10): Promise<any> {
        const listTemplates = new ListTemplatesCommand({
            MaxItems: maxItems,
        });

        try {
            const response = await this.SESClient.send(listTemplates);

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default ListTemplates;
