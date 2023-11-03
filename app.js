function saveToLocalStorage(event){
    event.preventDefault();
    const num = event.target.num.value;
    const text = event.target.text.value;
    const select = event.target.select.value;

    let obj = {
        num: num,
        text: text,
        select: select
    }
    localStorage.setItem(obj.text, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj){
    const parentEle = document.getElementById('listOfItems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.num + '-' + obj.text + '-' + obj.select;
    parentEle.appendChild(childEle);

    const deletebtn = document.createElement('input');
    deletebtn.type = "button";
    deletebtn.value = "Delete";
    deletebtn.onclick = () => {
        localStorage.removeItem(obj.text);
        parentEle.removeChild(childEle);
    }
    childEle.appendChild(deletebtn);

    const editbtn = document.createElement('input');
    editbtn.type = "button";
    editbtn.value = "Edit";
    editbtn.onclick = () => {
        localStorage.removeItem(obj.text);
        parentEle.removeChild(childEle);
        document.getElementById('num1').value = obj.num;
        document.getElementById('text1').value = obj.text;
        document.getElementById('select1').value = obj.select;
    }
    childEle.appendChild(editbtn);
}