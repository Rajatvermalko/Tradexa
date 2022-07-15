const url = `https://jsonplaceholder.typicode.com/posts`;

const getData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    for(let value of data ){
        let createTableRow =  generateHTML(value.title,value.body);
        document.getElementById('table').appendChild(createTableRow);
    }   
}


const addData = ()=>{
    let title = document.getElementById('title')
    let body = document.getElementById('body')
    let createTableRow = generateHTML(title.value,body.value);
    document.getElementById('table').appendChild(createTableRow);
}

const generateHTML = (title,body) => {
    let tr = document.createElement('tr');
    let tdTitle = document.createElement('td');
    let tdBody = document.createElement('td');
    let titleNode = document.createTextNode(title);
    let bodyNode = document.createTextNode(body);
    tdTitle.appendChild(titleNode)
    tdBody.appendChild(bodyNode)
    tr.appendChild(tdTitle)
    tr.appendChild(tdBody)
    return tr
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('btntoggle');

  if (form.style.display === 'none') {
    //  this SHOWS the form
    form.style.display = 'block';
  } else {
    // this HIDES the form
    form.style.display = 'none';
  }
});
