window.onload = function(){
    var go = document.getElementById('button');
    go.addEventListener('click',move);
}

let num = 0
let preDog = null;
function move (){
    let dog;
    createDog();
}

// 生成狗子
function createDog(){
    let newDog = document.createElement('div');
    newDog.className = 'doge';
    newDog.id = 'doge'+num;
    let bg = document.getElementById('doge-bg');
    bg.appendChild(newDog);
    dog = document.getElementById('doge'+num);
    console.log("🚀 ~ file: spin.js:29 ~ createDog ~ num:", num)
    getDog(dog);
    num++;
}

// 获取当前狗子在窗口中的位置并移动
function getDog(dog){
    let rect = dog.getBoundingClientRect();
    var leftRec = rect.left;
    let imgLeft = 0;
    moveController(dog,imgLeft,leftRec);
};

function moveController(dog,imgLeft,leftRec){
    // 控制单个狗子的移动
    let step = 5;
    const moveTimer = setInterval(()=>{
        // 狗子移动完成后执行的动作
        if(imgLeft + 200 <= -leftRec) {
            dog.remove();
            clearInterval(moveTimer);
            numClear(leftRec,step);
            return;
        }
        transform = 'translateX('+imgLeft+'px)';
        dog.style.transform = transform;
        imgLeft-=step;
    },15);
}

// 计数归零
function numClear(leftRec,step){
    limitNum = Math.floor(leftRec / 50) + step;
    if(num >= limitNum){ num = 0 }
    return; 
}