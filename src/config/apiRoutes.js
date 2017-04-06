const routes = () => {
  switch (process.env.NODE_ENV) {

    case 'production':
      return {
        BASE_API_URL: '',
        LOGIN_URL: '',
        REGISTER_URL: '',
        VALID_TOKEN_URL: '',
      };

    default:
      return {
        BASE_API_URL: 'http://localhost:4444',
        LOGIN_URL: '/api/login',
        REGISTER_URL: '/api/register',
        VALID_TOKEN_URL: '/api/isValid',
      };

  }
};

export default routes;
