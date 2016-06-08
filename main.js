document.addEventListener('DOMContentLoaded', function () {
  var names=[];


  var input = document.getElementById('names');
  var submit = document.getElementById('submit');
  var randomStudent = document.getElementById('randomStudent');
  var output = document.getElementById('output');

  var makeGroups = document.getElementById('makeGroups');
  var groups = document.getElementById('groups');
 

  submit.addEventListener('click', addNames);
  randomStudent.addEventListener('click', getRandomStudent);

  makeGroups.addEventListener('click', createGroups);

  function addNames() {
    //clear out old names
    document.getElementById('displayNames').innerHTML = '';

    names = input.value.split(',');
    // console.log(names);
    var list = document.createElement('ul');
    var title = document.createElement('h4');
    title.appendChild(document.createTextNode("Names"));
    list.appendChild(title);

    for(var i = 0; i < names.length; i++) {
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(names[i]));
      list.appendChild(item);
      //document.getElementById('displayNames').innerHTML += "<li class='list'>"+names[i]+"</li> ";
    }
    document.getElementById('displayNames').appendChild(list);

    //clean up input box
    input.value = "";


  }

  function getRandomStudent() {
    if(names.length === 0) {
      alert("Error: You need to enter names before select a student");
      return;
    }
    var student = names[Math.floor(Math.random()*names.length)];
    output.innerHTML = student;


  }

  function createGroups() {
    
    groups.innerHTML = "";

    var numGroups = document.getElementById('numGroups').value;
    if(numGroups > names.length) {
      alert("Error: You can NOT have more teams then there are people");
      return;
    }
    //console.log(numGroups);
    var groupSize = Math.floor(names.length/numGroups);
    var temp = names.slice();
    //console.log(names.length%numGroups);
    
      //console.log(51);

      for(var i = 0; i < numGroups; i++) {
        
        var list = document.createElement('ul');
        var title = document.createElement('h4');
        title.appendChild(document.createTextNode("Team " + (i+1)));
        list.appendChild(title);
        //groups.innerHTML += "<ul>Team" + (i+1) + ":";
        for(var j = 0; j < groupSize; j++) {

          var index = Math.floor(Math.random()*temp.length);
          var student = temp[index];
          temp.splice(index,1);
          //console.log(student);
          ///console.log(temp);
          var item = document.createElement('li');
          item.appendChild(document.createTextNode(student));
          list.appendChild(item);
          // groups.innerHTML += "<li>"+student+"</li>"; 

          // var el = document.createElement('div');
          // el.classList.add('box');

          // boxes.appendChild(el);



        }

        //check and see if uneven number of people
        if(i === (numGroups-1) && temp.length > 0) {
          //console.log(75);
          for(var k = 0; k < temp.length; k++) {
            var el = document.createElement('li');
            el.appendChild(document.createTextNode(temp[k]));
            list.appendChild(el);
            //groups.innerHTML += "<li>"+temp[k]+ "</li>";

          }

      }
      groups.appendChild(list);
        //groups.innerHTML += "</span>";
        
      
      } 

      
    // if(names.length%numGroups === 0) {
    //   return;
    // } else {
    //     groups.innerHTML += "Team" + (i+1) + ": ";
    //     for(var j = 0; j < temp.size; j++) {
    //       var index = Math.floor(Math.random()*temp.length);
    //       var student = temp[index];
    //       temp.splice(index,1);
    //       console.log(student);
    //       console.log(temp);

    //       groups.innerHTML += student+ " "; 





    //     }

    //  }
  }
//test input: thomas,joe,john,adam,bill,bob,seneca
});