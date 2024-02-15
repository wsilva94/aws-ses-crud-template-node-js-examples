interface IConfig {
    region: string;
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    tls: boolean;
    disableHostPrefix: boolean;
}

export default IConfig;
