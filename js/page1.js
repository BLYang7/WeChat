/**
 * Created by blyang on 16/4/19.
 */

function  change_dianzan_a(){
    var imgObjA = document.getElementById("zan_a_pic");
    var zanA = document.getElementById("zan_a_txt");

    if(imgObjA.src.toString().indexOf("false") > 0 ){
        imgObjA.src = "image/zan_true.png";
        zanA.innerHTML = "number";
    } else {
        imgObjA.src = "image/zan_false.png";
        zanA.innerHTML = "赞她";
    }
}



function  change_dianzan_b(){
    var imgObjB = document.getElementById("zan_b_pic");
    var zanB = document.getElementById("zan_b_txt");

    if( imgObjB.src.toString().indexOf("true") > 0){
        imgObjB.src = "image/zan_false.png";
        zanB.innerHTML = "赞她";
    } else {
        imgObjB.src = "image/zan_true.png";
        zanB.innerHTML = "number";
    }

}

