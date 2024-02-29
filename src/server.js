const Hapi = require ('@hapi/hapi');
const routes = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: 6000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
        cors: {
          origin: ['*'],
        },
      },
  });
 
  server.route(routes);

  await server.start();
  
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();
