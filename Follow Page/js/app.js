let likes =  document.getElementById("likes");
let comment =  document.getElementById("comment");
let share =  document.getElementById("share");
let follow =  document.getElementById("follow");

let i = 0;

function runing(){
    if(i< 688){
        likes.innerHTML = i + " K" + "<br> <p> likes <p>";
        i++;
    }
    if(i< 876){
        comment.innerHTML = i + " K" + "<br> <p> comment <p>";
        i++;
    }
    if(i< 759){
        share.innerHTML = i + " K" + "<br> <p> share <p>";
        i++;
    }
    if(i< 988){
        follow.innerHTML = i + " K" + "<br> <p> follower <p>";
        i++;
    }


    setTimeout(runing, 100);

}
