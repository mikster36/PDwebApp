const button = document.getElementById("button");
button.addEventListener("click", model);
 
function getImgFromCanvas() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    var imgData = context.getImageData(width/4, height/12, 801, 451);
    return imgData;
};


async function model(){
    const model = await tf.loadLayersModel("http://127.0.0.1:8080/model.json");
    const image = getImgFromCanvas();
    const test = tf.browser.fromPixels(image).expandDims(0, null);
    const prediction = model.predict(test);
    const logits = Array.from(prediction.dataSync());
    document.getElementById("prediction").innerHTML = "There is a " + String(logits[1]) + " chance you have Parkinson's Disease.";
};
