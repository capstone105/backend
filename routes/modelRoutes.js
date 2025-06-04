const { predict } = require('../services/modelService');

const modelRoutes = [
  {
    method: 'POST',
    path: '/predict',
    options: {
      handler: async (request, h) => {
        try {
          const { input } = request.payload; // Hapi menggunakan request.payload untuk body
          const result = await predict(input);
          return h.response({ prediction: result }).code(200);
        } catch (error) {
          return h.response({ error: error.message }).code(500);
        }
      },
    },
  },
];

module.exports = modelRoutes;
