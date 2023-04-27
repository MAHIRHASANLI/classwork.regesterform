let formItem=document.querySelector("#form__item")
let imageInput=document.querySelector("#image")
let surname=document.querySelector("#surname")
let name=document.querySelector("#name")
let lefModal=document.querySelector(".list-group")

let img=""
imageInput.addEventListener("change",()=>{
    const mh=new FileReader();
    mh.readAsDataURL(imageInput.files[0])
    mh.addEventListener("load",()=>{
        const url=mh.result;
        if(imageInput.files[0].type.includes("image")){
            img=url
            imageInput.value=" "
            // console.log(img);
        }
        else {
            alert("Tez ol sekil sec!!!")
            imageInput.value=""
        }
    })

})
// let person=function(){
//     name:img.name;
// }
//
formItem.addEventListener("submit",(e)=>{
e.preventDefault()
    // if(formItem.value>0){
        lefModal.innerHTML+=`<li style=" display:flex; justify-content:space-between; align-items:center;" class="list-group-item;  ">
        <img class="img" src="${img}" alt="">
        <span>${name.value}</span>
        <span>${surname.value}</span>
        <button style=" width:50px; height:40px; background-color:red;><i style="padding:15px" class="remove fa-solid fa-trash"></i></button>
        </li>`
        img.value=" "
        name.value=" "
        surname.value=" "
   
    let remove=document.querySelectorAll(".remove")
    remove.forEach((element)=>{
        element.addEventListener("click",()=>{
            element.parentElement.remove()
        })
    })
   
})
