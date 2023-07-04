let myLibrary = [];
let book = [];

book[0] = ["Conan Doyle", "Sherlock Holmes", "527", "Not Read"];
book[1] = ["Evelyn Waugh","Vile Bodies","639","Not Read"];
book[2] = ["John Grisham","A Time To Kill","775","Not Read"];
book[3] = ["Philip.K.Dick","A Scanner Darkly","935","Not Read"];
book[4] = ["J.K.Rowling","Harry Potter","425","Not Read"];


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

function Book(title, author, numofpages, status) {
  // the constructor...
  title = this.title;
  author = this.author;
  numofpages = this.numofpages;
  status = this.status;
}

const authorname = document.querySelector('#author');
const titlename = document.querySelector('#title');
const numofpagescount = document.querySelector('#numofpages');
const statusinfo = document.querySelector('#readstatus');
const bookinfos = document.querySelector('#bookinfo');

submitform.addEventListener('submit', (e) => {
    e.preventDefault();
    libraryassigner();
    clearForm();
    toggle = true;
} );


function libraryassigner(){
    if(statusinfo.checked) {
        addBookToLibrary(titlename.value,authorname.value,numofpagescount.value,'Read');
    } else {
        addBookToLibrary(titlename.value,authorname.value,numofpagescount.value,'Not Read');
    }
}

function addBookToLibrary(title,author, numofpages, status) {
    // do stuff here
    console.log(myLibrary);
    ioe(title,author,numofpages,status);
    //showinpagertrue();
}

function ioe(title,author,numofpages,status){
    let i = myLibrary.length;
    book[i] = [author,title,numofpages,status];
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
        if (jack[3] == 'Read'){
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder; font-size: 0.8em;">Read</button>`;
        } else {
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder; font-size: 0.8em;">Not Read</button>`;
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
    let k = myLibrary.length;
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
        if (jack[3] == 'Read'){
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder">Read</button>`;
        } else {
            contentssss.innerHTML = `<button id="toggle${i}" onclick="hello(this.id)" style="border-radius: 5px; background-color: transparent; border-color: transparent; box-sizing: content-box; cursor: pointer; font-weight:bolder">Not Read</button>`;
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
        if(toggler.innerText =="Read"){
            toggler.innerText = "Not Read";
        } else if(toggler.innerText == "Not Read") {
            toggler.innerText = "Read";
        }        
}

function clearForm(){
    authorname.value = "";
    titlename.value = "";
    numofpagescount.value = '';
    statusinfo.checked = false;
}

showinPage();


