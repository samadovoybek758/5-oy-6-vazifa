import{validate,getdata,creat_item} from "./qo'shimcha.js";

const todo_wrapper = document.querySelector("#todo_wrapper");
const input_area = document.querySelector("#input_area");
const input_time = document.querySelector("#input_time");
const buttons = document.querySelector("#buttons");
const add = document.querySelector("#add");
const filter = document.querySelector("#filter");
const card = document.querySelector("#card");





add && add.addEventListener('click',function (el) {
    el.preventDefault()

    let isvalidate = validate(input_area,input_time)

    if (!isvalidate) {
        return
    }

    let todo = {
        name : input_area.value,
        time : input_time.value,
        status : "active",
        id : Date.now(),
    }

    let todos = getdata();
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos))
    input_area.value = null;
    input_time.value = null;



    let item = creat_item(todo);
    card.innerHTML += item

})


document.addEventListener("DOMContentLoaded", function () {
    let todos = getdata();

    todos.forEach(element => {
        let item = creat_item(element);
        card.innerHTML += item
    });
})