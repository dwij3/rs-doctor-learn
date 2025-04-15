import type { NextConfig } from 'next';
import { RsdoctorWebpackPlugin } from '@rsdoctor/webpack-plugin';

const rsDoctorEnabled = process.env.RS_DOCTOR === 'true';


const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    if(rsDoctorEnabled){
      if (config.name === 'client') {
        config.plugins.push(
          new RsdoctorWebpackPlugin({
            disableClientServer: true,
            mode: 'brief',
          })
        );
      } else if (config.name === 'server') {
        config.plugins.push(
          new RsdoctorWebpackPlugin({
            disableClientServer: true,
            mode: 'brief',
            output: {
              reportDir: './.next/server',
            },
          }),
        );
      }
    }
   
    return config;
  },
};

export default nextConfig;