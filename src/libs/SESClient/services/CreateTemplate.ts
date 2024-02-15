import { CreateTemplateCommand, SESClient } from '@aws-sdk/client-ses';

import ITemplate from '../interfaces/ITemplate';
import config from '../config/ses';

class CreateTemplate {
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
        const createTemplate = new CreateTemplateCommand({
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

export default CreateTemplate;
