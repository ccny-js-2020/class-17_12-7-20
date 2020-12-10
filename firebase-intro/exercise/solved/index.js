/*
  1. Create a firebase app and add it to your application
  2. Create an array of strings and add it to your firebase database
     Get the array from firebase and loop through the array
     Log the contents of the array
     Add the contents of the array to a list on the dom
   3. Create an array of objects and add it to your firebase database
      Get the array from firebase and loop through the array
      Log the contents of the array
      Add the contents of the array to a table on the dom
*/

var firebaseConfig = {
  apiKey: "AIzaSyA0jE-YkDAIke7Norgjf_duGC89ZOe_WeE",
  authDomain: "my-first-firebase-55f14.firebaseapp.com",
  projectId: "my-first-firebase-55f14",
  storageBucket: "my-first-firebase-55f14.appspot.com",
  messagingSenderId: "525652311299",
  appId: "1:525652311299:web:d82d0511971eaa6aa33d36",
  measurementId: "G-HS9PDGN56N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// logging this out because i ran this file once and it was added to the database,
// so no need to set it again
// firebase.database().ref("array_of_strings").set(["fee", "fi", "fo", "fum"]);

firebase.database().ref("array_of_strings").on("value", function(snapshot){
  console.log(snapshot.val());

  var ol = $("<ol>")
  snapshot.forEach(function(childSnapshot){
    console.log(childSnapshot.val());

    var li = $("<li>");
    li.text(childSnapshot.val());
    ol.append(li);
  });
  $(".firebase-content").append(ol)
});

// logging this out because i ran this file once and it was added to the database,
// so no need to set it again
// firebase.database().ref("array_two").set([]);
// firebase.database().ref("array_two").push({name: "Jared", age: 22, hasDog: false})
// firebase.database().ref("array_two").push({name: "Christine", age: 24, hasDog: true})
// firebase.database().ref("array_two").push({name: "Harold", age: 36, hasDog: true})
// firebase.database().ref("array_two").push({name: "Whitney", age: 36, hasDog: false})

firebase.database().ref("array_two").on("value", function(snapshot){
  // If you want to get only the names in the database
  // var names = []
  // snapshot.forEach((childSnapshot) => {
  //   names.push(childSnapshot.val().name)
  // });

  // THIS IS ONE WAY TO APPEND AN ARRAY OF OBJECTS TO A TABLE
  // var nameTh = $("<th>");
  // var ageTh = $("<th>");
  //
  // nameTh.text("name");
  // ageTh.text("age");
  //
  // $("#table-headers").append(nameTh).append(ageTh);
  //
  // snapshot.forEach((childSnapshot) => {
  //   console.log(childSnapshot.val());
  //   var newTr = $("<tr>");
  //
  //   var nameTd = $("<td>");
  //   var ageTd = $("<td>");
  //
  //   nameTd.text(childSnapshot.val().name);
  //   ageTd.text(childSnapshot.val().age);
  //
  //   newTr.append(nameTd).append(ageTd);
  //
  //   $("table").append(newTr);
  // });

  // THIS IS THE MORE DYNAMIC WAY TO APPEND AN ARRAY OF OBJECTS TO A TABLE
  // console.log(snapshot.val())
  //
  var keys = [];

  snapshot.forEach((childSnapshot) => {
    var tr = $("<tr>");
    var keysArray = Object.keys(childSnapshot.val())
    keys.push(keysArray);

    var object = childSnapshot.val();
    for(var j in object){
      console.log(object[j])
      var td = $("<td>");
      td.text(object[j]);
      tr.append(td);
    }
    $("table").append(tr);
  });

  var objectKeys = keys[0];
  console.log(objectKeys);
  objectKeys.forEach((key) => {
    console.log(key)
    var th = $("<th>");
    th.text(key)
    $("#table-headers").append(th);
  });

  //
  //   var obj = childSnapshot.val();
  //   for(var i in obj){
  //     var td = $("<td>");
  //     td.text(obj[i]);
  //     tr.append(td);
  //   }
  //
  //   $("table").append(tr)
  //
  // })
  // var setOfKeys = [...new Set(keys)];
  // setOfKeys.forEach((key) => {
  //   var th = $("<th>");
  //   th.text(key)
  //   $("#table-headers").append(th)
  // })
})
