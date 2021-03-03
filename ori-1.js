const topic=document.getElementsByClassName('topic');


function toggle(){
    document.getElementById('header-topic').classList.toggle('active');
    document.getElementById('black').classList.toggle('active');
}

function remove(){
    document.getElementById('header-topic').classList.remove('active');
    document.getElementById('black').classList.remove('active');
}

function topicClickEvent(number){
    topic[number].addEventListener('click',function(){
        toggle();
    });
}

//ドロップダウンメニューのアニメーション
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('menu').addEventListener('click',function(){
        toggle();
    })

    document.getElementById('black').addEventListener('click',function(){
       remove();
    })
    
    topicClickEvent(0);
    topicClickEvent(1);
    topicClickEvent(2);
});