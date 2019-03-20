function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send(null);
}

getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data.basics);
  profile(data.basics);
  career(data.carrer);
  education(data.education);
  skills(data.skills);
})
var parent1=document.querySelector('.parent1') ;
var child1=document.querySelector('.child1') ;
var child2=document.querySelector('.child2') ;
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  child1.appendChild(image);
  parent1.appendChild(child1);
  var name=document.createElement('h1');
  name.textContent=pro.name;
  child1.appendChild(name);
  // parent1.appendChild(child1);
  var hr=document.createElement('hr');
  child1.append(hr);
  var email=document.createElement('email');
  email.textContent=pro.email;
  child1.appendChild(email);
}
function career(c){
  var data=document.createElement('h1');
  data.textContent="CAREER DETAILS";
  child2.appendChild(data);
  var hr=document.createElement('hr');
  child2.append(hr);
  var info=document.createElement('h3');
  info.textContent=c.info;
  child2.appendChild(info);
  parent1.appendChild(child2);
  var hr=document.createElement('hr');
  child2.append(hr);
}
function education(edu){
  var stu=document.createElement('h2');
  stu.textContent="Educational Details";
  child2.appendChild(stu);
  var hr=document.createElement('hr');
  child2.append(hr);
  var table=document.createElement('table');
  table.border="3";
let row='';
row += "<tr>"+"<th>"+"sno" +"</th>"+
"<th>"+"degree" +"</th>"+
"<th>"+"Institute" +"</th>"+
"<th>"+"peryear" +"</th>"+
"</tr>";

for(i in edu){
  row += "<tr>"+"<td>"+edu[i].sno +"</td>"+
  "<td>"+edu[i].degree +"</td>"+
  "<td>"+edu[i].Institute +"</td>"+
  "<td>"+edu[i].peryear +"</td>"+
  "</tr>";
}
table.innerHTML=row;
child2.appendChild(table);
parent1.appendChild(child2);
}
function skills(s){
  var ski=document.createElement("h2");
  ski.textContent="Skills set";
  child2.append(ski);
  var ul=document.createElement(ul);
  child2.append(ul);
  for(i in s){
    var li=document.createElement("li");
    li.textContent=s[i].info;
    ul.append(li);
  }
}
