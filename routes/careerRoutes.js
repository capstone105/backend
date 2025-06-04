const careerController = require('../controllers/careerController');

module.exports = [
  {
    method: 'GET',
    path: '/api/careers',
    handler: careerController.getJobs
  },
  {
    method: 'POST',
    path: '/api/careers',
    handler: careerController.addJob
  }
];
