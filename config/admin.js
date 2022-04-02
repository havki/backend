module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0aa65005a42b2ce8c8e74a917301225'),
  },
});
