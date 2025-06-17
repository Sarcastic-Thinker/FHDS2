const tableContainer1 = document.querySelector('#june25');
const tableContainer2 = document.querySelector('#july25');
const tableContainer3 = document.querySelector('#aug25');
const tableContainer4 = document.querySelector('#sept25');
const tableContainer5 = document.querySelector('#oct25');
const tableContainer6 = document.querySelector('#nov25');
const tableContainer7 = document.querySelector('#dec25');
let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;
let isClicked5 = true;
let isClicked6 = true;
let isClicked7 = true;

let showAndHide = function(table){
    if(table == tableContainer1){
        if(isClicked1){
            table.style.display = 'table';
            isClicked1 = false;
         }else{
            table.style.display = 'none';
            isClicked1 = true
         }
    }else 
        if(table === tableContainer2){
            if(isClicked2){
                table.style.display = 'table';
                isClicked2 = false;
            }else{
                table.style.display = 'none';
                isClicked2 = true
            }
    }else 
        if(table === tableContainer3){
            if(isClicked3){
                table.style.display = 'table';
                isClicked3 = false;
            }else{
                table.style.display = 'none';
                isClicked3 = true
            }
    }else 
        if(table === tableContainer4){
            if(isClicked4){
                table.style.display = 'table';
                isClicked4 = false;
            }else{
                table.style.display = 'none';
                isClicked4 = true
            }
    }else 
        if(table === tableContainer5){
            if(isClicked5){
                table.style.display = 'table';
                isClicked5 = false;
            }else{
                table.style.display = 'none';
                isClicked5 = true
            }
    }else 
        if(table === tableContainer6){
            if(isClicked6){
                table.style.display = 'table';
                isClicked6 = false;
            }else{
                table.style.display = 'none';
                isClicked6 = true
            } 
    }else 
        if(table === tableContainer7){
            if(isClicked7){
                table.style.display = 'table';
                isClicked7 = false;
            }else{
                table.style.display = 'none';
                isClicked7 = true
            }
    }  
}     