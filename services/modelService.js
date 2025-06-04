const tf = require('@tensorflow/tfjs-node');
const path = require('path');

let model;

const loadModel = async () => {
  if (!model) {
    model = await tf.loadLayersModel(`file://${path.resolve(__dirname, '../path/to/model.json')}`);
  }
  return model;
};

const predict = async (inputArray) => {
  const model = await loadModel();
  const inputTensor = tf.tensor2d([inputArray], [1, 80]);
  const prediction = model.predict(inputTensor);
  const result = prediction.argMax(-1).dataSync()[0]; // Output: kelas prediksi
  return result;
};

module.exports = { predict };
