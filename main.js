Webcam.attach("#camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagem_capturada"src="'+data_uri+'"/>'
    });
} console.log("versãoml5",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6x5KLTfoc/model.json",modelLoaed);
function modelLoaed() {
    console.log('modelo carregado');
}
function check() {
    img=document.getElementById('imagem_capturada');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}