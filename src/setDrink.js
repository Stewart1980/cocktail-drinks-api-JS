const setDrink = (section)=>{
 section.addEventListener('click',function (e){
    //  JSON stringify JSON.parse
     const id = e.target.parentElement.dataset.id
     localStorage.setItem('drink', id)

 });
};


export default setDrink;