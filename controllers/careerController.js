const jobs = []; // Ganti dengan MongoDB jika perlu

exports.getJobs = async (request, h) => {
  return h.response(jobs).code(200);
};

exports.addJob = async (request, h) => {
  const { title, description } = request.payload;
  const newJob = { id: jobs.length + 1, title, description };
  jobs.push(newJob);
  return h.response({ message: 'Job ditambahkan', job: newJob }).code(201);
};
