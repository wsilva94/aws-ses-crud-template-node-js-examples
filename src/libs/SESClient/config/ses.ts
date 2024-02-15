import IConfig from '../interfaces/IConfig';

const config = {
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    tls: true,
    disableHostPrefix: true,
} as IConfig;

export default config;
