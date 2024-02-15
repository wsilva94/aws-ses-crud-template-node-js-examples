interface ISendTemplate {
    toAddresses: string[];
    template: string;
    templateData?: object;
}

export default ISendTemplate;
