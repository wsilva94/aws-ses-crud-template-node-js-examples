import { SESClient, UpdateTemplateCommand } from '@aws-sdk/client-ses';

import ITemplate from '../interfaces/ITemplate';
import config from '../config/ses';

class UpdateTemplate {
    private SESClient: SESClient;

    constructor() {
        this.SESClient = new SESClient(config);
    }

    public async execute({
        templateName,
        subjectPart,
        textPart,
        htmlPart,
    }: ITemplate): Promise<any> {
        const createTemplate = new UpdateTemplateCommand({
            Template: {
                TemplateName: templateName,
                SubjectPart: subjectPart,
                TextPart: textPart,
                HtmlPart: htmlPart,
            },
        });

        try {
            const response = await this.SESClient.send(createTemplate);

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default UpdateTemplate;
