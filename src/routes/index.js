import login from './v1/login';

const routeBuilder = (app, versionTag, controllers) => {
  const versionPath = versionTag ? `/${versionTag}` : '/';

  for (const controller in controllers){
    console.log(versionPath);

    app.use(versionPath, controllers[controller]);
  }
};

const routes = (app) => {
  console.log(' => ');
  routeBuilder(app, 'v1', {
    login
  })
}

export {
  routes
}