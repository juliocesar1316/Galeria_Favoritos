const galeria = document.querySelectorAll(".galery-photo");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".img");
const closeModal = document.querySelector(".close-modal");
const setaNext = document.querySelector('.next');
const setaPrev = document.querySelector('.prev');
const menu = document.querySelector('.menuu img');
const itemMenu = document.querySelectorAll('.menu span'); 


let arraySrc = [];
let indexImg = 0;

let click = true;
itemMenu.forEach(item=>{
    menu.addEventListener('click', function () {
        if(click){
            menu.src = "assets/close-menu.svg";
            click = false;
        }else{
            menu.src = "assets/open-menu.svg";
            click = true
        } 
        item.classList.toggle('visivel');
    });  
});

imgModal.addEventListener('click', function(event){
    event.stopPropagation()
})

imgModal.addEventListener('dblclick', function(){
    const imgLike = galeria[indexImg].previousElementSibling;
    const imgLikeModal = imgModal.previousElementSibling;
    
    if(arraySrc.includes(indexImg)){
        imgLike.classList.add('escondido');
        imgLikeModal.classList.add('escondido');
        let posicaoIndex = arraySrc.indexOf(indexImg);
        arraySrc.splice(posicaoIndex, 1); 
    }else{
        arraySrc.push(indexImg);
        imgLike.classList.remove('escondido');
        imgLikeModal.classList.remove('escondido');
    }
});

function abrirModal(src,name){
    imgModal.src = src;
    modal.style.display = 'flex';
    imgModal.style.width = '550px';
 
};
galeria.forEach((imagem,index)=>{
    imagem.addEventListener('click', function(event){
        abrirModal(event.target.src, event.target.name);
        indexImg = index;
        proximo(index);
        semSeta(index);
        const imgLikeModal = imgModal.previousElementSibling;
        if(arraySrc.includes(indexImg)){
            imgLikeModal.classList.remove('escondido');
        }else{
            imgLikeModal.classList.add('escondido');
        }
    });
});

modal.addEventListener('click', function (event) {
    modal.style.display = 'none';
});

closeModal.addEventListener('click', function(event){
    modal.style.display = 'none';
});


function proximo(index){
    let i = index;
    
    setaNext.addEventListener('click',function (event) {
        i++;
        
        const image = galeria[i];
        imgModal.src = image.src;
        semSeta(i);
        
        const imgLikeModal = imgModal.previousElementSibling;
        if(arraySrc.includes(i)){
            imgLikeModal.classList.remove('escondido');
        }else{
            imgLikeModal.classList.add('escondido');
        }
        indexImg++;
        event.stopPropagation();
    });  
    setaPrev.addEventListener('click', function(event){
        i--;
       
        const image = galeria[i];
        imgModal.src = image.src; 
        semSeta(i);
        

        const imgLikeModal = imgModal.previousElementSibling;
        if(arraySrc.includes(i)){
            imgLikeModal.classList.remove('escondido');
        }else{
            imgLikeModal.classList.add('escondido');
        } 
        indexImg--;
        event.stopPropagation();
    })
};
function semSeta(indice){
    if(indice === 0){
        setaPrev.classList.add('escondido');
    }else if(indice !==0){
        setaPrev.classList.remove('escondido');
    }
    if(indice === 9){
        setaNext.classList.add('escondido');
    }else if(indice !==9){
        setaNext.classList.remove('escondido');
    }
};
