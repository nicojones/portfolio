import { Environment } from '~env/environment.interface';


// const ip = '192.168.210.100';
// const ip = '172.20.10.3';
// const ip = 'localhost:4201';
// const ip = '172.20.10.3';
export const environment: Environment = {
  production: false,
  getUrl: `/json`,
  phpUrl: '/api/app.php'
};
