//categories

function ajouterFiltre(categ){
    ul=document.getElementById('ulList');
    li=document.createElement('li');
    li.setAttribute('class','lead');
    li.setAttribute('onclick',`filtrerPar('${categ}')`);
    contenu = document.createTextNode(categ);
    li.appendChild(contenu);
    ul.appendChild(li);
 }
 var t=[];
 var verif;
 
 for(var q=0;q<cours.length;q++){
   
   for(var i=-1;i<t.length;i++){
     
     if(cours[q].category.toUpperCase() ==t[i]){
      
       verif=true;
       break;
     }
     else{
       verif=false;
     }
   }
   
   if(verif==false){
     t.push(cours[q].category.toUpperCase());
   }
 }
 
 t.forEach(e=>
 ajouterFiltre(e)
 )

 
var content=document.getElementById('content');
function ajouterCours(image,titre,prix){
    let div=document.createElement('div'),
    img=document.createElement('img'),
    h5=document.createElement('h5'),
    span=document.createElement('small');
    img.src=image;
    h5.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode('$'+prix));
    div.setAttribute('class','card p-0  text-center col-3 me-3 mb-3');
    div.setAttribute('style','width: 18rem;');
    img.setAttribute('class','card-img-top');
    h5.setAttribute('class','card-subtitle mt-2');

    div.append(img);
    div.append(h5);
    div.append(span);
    content.append(div);
}

//search
function filtrerPar(c){
    content.innerHTML="";
    console.log(c);
    if(c=='ALL'){
        cours.forEach((v)=>{
            ajouterCours(v.image,v.title,v.price);
        })
    }
    else{
        cours.forEach((v)=>{
            if(c==v.category){
                ajouterCours(v.image,v.title,v.price);
            }
        })
    }
    if(content.innerHTML==""){
        content.innerHTML=`<h1>Aucun cours n'existe dans cette categorie!!</h1>`;
    }
}
filtrerPar('ALL');
//la recherche
var s=document.getElementById('search');
function funcSearch(){
  var txtSearch=document.getElementById('search').value.toUpperCase();
  var item=document.getElementsByClassName("card p-0  text-center col-3 me-3 mb-3");
  var l=document.getElementsByTagName('h5');
  console.log(l.length);

  for(var i=0;i<l.length;i++){
    let a=item[i].getElementsByTagName('h5')[0];
    let value=a.innerHTML || a.innerText ||a.textContent;

    if(value.toUpperCase().indexOf(txtSearch)>-1){
      item[i].style.display="";
    }
    else{
      item[i].style.display="none";
    }
  }

}
s.addEventListener("keyup",funcSearch);

//valeur prix
var rangeValue=document.getElementById('range').value;
document.getElementById('spanPrix').innerHTML=rangeValue+' $';
document.getElementById('range').addEventListener('input',function(){
  rangeValue=document.getElementById('range').value;
  document.getElementById('spanPrix').innerHTML=rangeValue+' $';

  document.getElementById('content').innerHTML="";
  var t=false;
   cours.forEach((e)=>{
    
     if(e.price<rangeValue){
       ajouterCours(e.image,e.title,e.price);
       t=true;
     }
   })
   if(t==false){
   document.getElementById('content').innerHTML='<h3>Pas de cours avec se prix.</h3>';
   }
})

