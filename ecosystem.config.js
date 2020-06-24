module.exports = {
  /**
   * Demo Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'ENA-UI',
      script    : './ui/index.js',
      env: {
       "NODE_ENV": "development"
      },
      env_production : {
        NODE_ENV: 'production'
      }	
    },
	{
      name      : 'ENA-Service',
      script    : './ena-server/build/index.js',
      env: {
       "NODE_ENV": "development"
      },
      env_production : {
        NODE_ENV: 'production'
      }	
    }
  ]
};
