$('#patrocinadores').click(function(){
const API_URL='https://jsonplaceholder.typicode.com/users'

const xhr=new XMLHttpRequest();

function OnRequestHander() {
  if(this.status===200 && this.readyState===4){
    const data= JSON.parse(this.response);
    console.log(data);
    const HTMLResponse=document.querySelector("#app")
//codigo para listar patrocinadores
     const tpl=data.map((user) => '<li>'+'nombre: '+user.name +'<br>'+'usuario: '+user.username+'<br>'+'e-mail: '+user.email+'<br>'+'nombre de la compañia: '+user.company.name+'</li>');
       HTMLResponse.innerHTML='<ul>'+ tpl +'</ul>';
    }
}

xhr.addEventListener('load', OnRequestHander);
xhr.open('GET', API_URL);
xhr.send();})