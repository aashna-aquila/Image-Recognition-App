    Webcam.set({
        width:350,
        height:300,
        image_format:'png',
        png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');

    function snapshot()
    {
      Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';
      })  
    }
    console.log('ml5 version is ',ml5.version);
    storage=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bgVeQ8f40/model.json',modelLoaded);

    function modelLoaded(){
        console.log('Model has been started');
    }

    function check()
    {
     store=document.getElementById('capture');
     storage.classify(store, gotresult);    
    }

    function gotresult(error,results)
    {
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object-name").innerHTML=results[0].label;
        document.getElementById("object-accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
    }