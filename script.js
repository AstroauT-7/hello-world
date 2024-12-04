// 计数器

let button1 = document.getElementById("countButton");
let button2 = document.getElementById("removeButton");
let result = document.getElementById("count");
let count = 0;


button1.addEventListener('click', function () {
    count++;
    result.innerHTML = count;
})

button2.addEventListener('click', function () {
    count = 0;
    result.innerHTML = count;
})

//待办事项

const Text_box = document.querySelector(".text_box");
const List = document.querySelector(".list");
const Button = document.querySelector(".button");

function New(e) {
    if (e === "") {
        return;
    }
    const new_list = document.createElement("li");
    new_list.innerHTML = `
        <input type="checkbox" class="checkbox">
        <label>${e}</label>
        <button class="rubbish_bin">🗑️</button>    
    `
    const Rubbish_bin = new_list.querySelector(".rubbish_bin");
    const Checkbox = new_list.querySelector(".checkbox");

    Rubbish_bin.addEventListener('click', function () {
        new_list.remove();
    })

    Checkbox.addEventListener('change', function () {
        if (Checkbox.checked) {
            new_list.style.textDecoration = "line-through";
            new_list.style.color = "#999";
            List.append(new_list);
        } else {
            new_list.style.textDecoration = "none";
            new_list.style.color = "";
            List.prepend(new_list);
        }
    })

    List.append(new_list);
    Text_box.value = '';
}

Text_box.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        New(Text_box.value)
    }
})

Button.addEventListener('click', function () {
    New(Text_box.value)
});

