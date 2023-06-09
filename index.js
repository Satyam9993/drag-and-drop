const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e)=>{
    e.target.className += ' hold';
    setTimeout(()=>{
        e.target.className = 'hide'; 
    }, 0);
});

imgBox.addEventListener('dragend', (e)=>{
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log("dragover is trigger");
    })

    whiteBox.addEventListener('dragenter', ()=>{
        console.log("dragenter is trigger");
    })

    whiteBox.addEventListener('dragleave', ()=>{
        console.log("dragleave is trigger");
    })

    whiteBox.addEventListener('drop', (e)=>{
        e.target.append(imgBox);
    })
}