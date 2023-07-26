let myLibrary = [];
let book = [];

book[0] = ["Conan Doyle", "Sherlock Holmes", "50", "Available"];
book[1] = ["Evelyn Waugh","Vile Bodies","30","Out of stocks"];
book[2] = ["John Grisham","A Time To Kill","40","Available"];
book[3] = ["Philip.K.Dick","A Scanner Darkly","35","Available"];
book[4] = ["J.K.Rowling","Harry Potter","50","Out of stocks"];


myLibrary.push(book[0]);
myLibrary.push(book[1]);
myLibrary.push(book[2]);
myLibrary.push(book[3]);
myLibrary.push(book[4]);


const newBook = document.querySelector('.addanewbook');
const submitform = document.querySelector('#forms');
const submitbutton = document.querySelector('#submit');

newBook.addEventListener('click', popup);
submitbutton.addEventListener('click', submitter);

let toggle = true;

function popup(){
    if (toggle==true){
        toggle= false;
        forms.style.opacity = '1';
    }else if(toggle ==false){
        forms.style.opacity='0';
        toggle=true;
    }
}

function submitter(){
    forms.style.opacity='0';
}

function Book(title, author, stocks, status) {
  // the constructor...
  title = this.title;
  author = this.author;
  stocks = this.stocks;
  status = this.status;
}

const authorname = document.querySelector('#author');
const titlename = document.querySelector('#title');
const rentfees = document.querySelector('#rentfee');
const statusinfo = document.querySelector('#status');
const bookinfos = document.querySelector('#bookinfo');

submitform.addEventListener('submit', (e) => {
    e.preventDefault();
    libraryassigner();
    clearForm();
    toggle = true;
} );


function libraryassigner(){
    if(statusinfo.checked) {
        addBookToLibrary(titlename.value,authorname.value,rentfees.value,'Available');
    } else {
        addBookToLibrary(titlename.value,authorname.value,rentfees.value,'Out of stocks');
    }
}

function addBookToLibrary(title,author, fees, status) {
    // do stuff here
    console.log(myLibrary);
    ioe(title,author,fees,status);
    //showinpagertrue();
}

function ioe(title,author,fees,status){
    let i = myLibrary.length;
    book[i] = [author,title,fees,status];
    console.log(book[i]);
    myLibrary.push(book[i]);
    addontopage(i);

}

function showinPage(){
    for(let i = 0;i<myLibrary.length;i++){
    console.log(myLibrary.length);
    jack = book[i];
    const content = document.createElement('tr');
    content.setAttribute("id", `fordel${i}`);
    const contents = document.createElement('td');
        contents.textContent = `${jack[0]}`;
        const contentss = document.createElement('td');
        contentss.textContent = `${jack[1]}`;
        const contentsss = document.createElement('td');
        contentsss.textContent = `${jack[2]}`;
        const contentssss = document.createElement('td');
        contentssss.textContent = `${jack[3]}`;
        if (jack[3] == 'Available'){
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder; font-size: 0.8em;">Available</button>`;
        } else {
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder; font-size: 0.8em;">Out of stocks</button>`;
        }
        const contentsssss = document.createElement('td');
        contentsssss.setAttribute("class", "styler");
        contentsssss.innerHTML =`<button id="delbuttons${i}" class="purposedel" onclick="removebook(this.id)" style="background-color: #D05050; border-color: #D05050;color: black; font-weight: bold; cursor: pointer;  border-radius: 7px; height: 30px; width: 200px;font-size: 0.8em;">Delete Book</button>`;
        

        content.appendChild(contents);
        
        content.appendChild(contentss);
        content.appendChild(contentsss);
        content.appendChild(contentssss);
        content.appendChild(contentsssss);

    bookinfos.appendChild(content);
    }

}

function addontopage(i) {
    for(let j = i;j<myLibrary.length;j++){
        jack = book[i];
        console.log(myLibrary.length);
        const content = document.createElement('tr');
        content.setAttribute("id", `fordel${i}`);
        const contents = document.createElement('td');
        contents.textContent = `${jack[0]}`;
        const contentss = document.createElement('td');
        contentss.textContent = `${jack[1]}`;
        const contentsss = document.createElement('td');
        contentsss.textContent = `${jack[2]}`;
        const contentssss = document.createElement('td');
        contentssss.textContent = `${jack[3]}`;
        if (jack[3] == 'Available'){
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder">Available</button>`;
        } else {
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder">Out of stocks</button>`;
        }
        const contentsssss = document.createElement('td');
        contentsssss.setAttribute("class", "styler");
        contentsssss.innerHTML =`<button id="delbuttons${i}" class="purposedel" onclick="removebook(this.id)" style="background-color: #D05050; border-color: #D05050;color: black; cursor: pointer; font-weight: bold; border-radius: 7px; height: 30px; width: 200px;">Delete Book</button>`;
    
        content.appendChild(contents);
        content.appendChild(contentss);
        content.appendChild(contentsss);
        content.appendChild(contentssss);
        content.appendChild(contentsssss);
        bookinfos.appendChild(content);
    }
}

function removebook(clicked_id) {
    let a = clicked_id;
    let b = a.slice(10);
    myLibrary.splice(b,1);
    const chosenone = document.querySelector(`#fordel${b}`);
    bookinfos.removeChild(chosenone);
    forms.style.opacity='0';
    toggle = true;
    console.log(myLibrary);
}

function hello(licked_id){
    let a = licked_id;
    let b = a.slice(6);
    console.log(b);
    const toggler = document.querySelector(`#toggle${b}`);
        if(toggler.innerText =="Available"){
            toggler.innerText = "Out of stocks";
        } else if(toggler.innerText == "Out of stocks") {
            toggler.innerText = "Available";
        }        
}

function clearForm(){
    authorname.value = "";
    titlename.value = "";
    rentfees.value = '';
    statusinfo.checked = false;
}

showinPage();


