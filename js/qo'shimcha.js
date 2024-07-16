function validate(input_area,input_time) {
    if (input_area.value.length < 5) {
        alert ('5 tadan kam yozmang')
        input_area.focus()
        return false
    }
    if (!input_time) {
        alert ('vaqtnikiritig')
        input_time.focus()
        return false
    }
    return true
}


function getdata() {
    let data = [];

    if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem("todos"))
    }

    return data
}


function creat_item(todo) {
    return `
    <div class="card_item">
                <div class="left_side">
                    <input type="checkbox" class="card_item_check">
                    <div>
                        <p>${todo.name}</p>
                        <p>${todo.time}</p>
                    </div>
                </div>

                <div class="right_side">
                    <i class="fa-solid fa-trash"></i>
                    <i class="fa-sharp fa-solid fa-pen"></i>
                </div>
            </div>

    `
}


export{validate,getdata,creat_item}