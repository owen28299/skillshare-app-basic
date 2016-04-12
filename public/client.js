var text = document.getElementById("text");
var submit = document.getElementById("submit");
var load = document.getElementById("load");
var eventList = document.getElementById('events');

submit.addEventListener("click", function(){
  var value = text.value;
  text.value = "";

  var req = new XMLHttpRequest();
  req.addEventListener('load', function(){
  });

  req.open('POST', "http://localhost:8001/postevent");
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  req.send("skill="+value);

});

load.addEventListener("click", function(){
  var loadReq = new XMLHttpRequest();
  loadReq.addEventListener('load', function(){
    var skillsList = JSON.parse(this.responseText);
    eventList.innerHTML = "";

    skillsList.forEach(function(element){
      var docfrag = document.createDocumentFragment();
      var h3 = document.createElement('h3');
      h3.innerHTML = element.skill;
      docfrag.appendChild(h3);
      eventList.appendChild(docfrag);
    });

  });
  loadReq.open('GET', "http://localhost:8001/getskills");
  loadReq.send();

});

