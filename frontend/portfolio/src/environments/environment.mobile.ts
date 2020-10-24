import { Environment } from '~env/environment.interface';


const ip = '192.168.210.100';
export const environment: Environment = {
  production: false,
  getUrl: `http://${ ip }/json`,
  phpUrl: 'http://portfolio.local/api'
};
