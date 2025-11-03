// const formContainer = document.querySelector("#container")
const errorPara = document.querySelector("#error")

function Submitdetails(){
    const fullname = document.querySelector("#Name").value
    console.log(fullname)
    const age = document.querySelector("#Age").value
    console.log(age)
    const gender = document.querySelector("#Gender").value
    console.log(gender)
    const email = document.querySelector("#Email").value
    console.log(email)
   
    if(fullname == "" || age == "" || gender == "" || email == "" ){
        errorPara.innerHTML = "All fields are required"
        return;
    }
    if(!(age>=18 && age<=40)){
        errorPara.innerHTML = "Age should be greater then 18 and less then 40"
        return;
    }
    errorPara.innerHTML = "Form is Submitted Successfully"
}