// This is my web app's Firebase configuration
// This is how you add the firebase database to your application
var firebaseConfig = {
  apiKey: "AIzaSyAO88QUuBW5izwK47h5rvP835Ne3d63U3A",
  authDomain: "ccny-first-firebase.firebaseapp.com",
  databaseURL: "https://ccny-first-firebase.firebaseio.com",
  projectId: "ccny-first-firebase",
  storageBucket: "ccny-first-firebase.appspot.com",
  messagingSenderId: "46762297587",
  appId: "1:46762297587:web:a57cbd5c537f7d018ecf86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// a set is writing to your firebase database
// set will override the current value of the ref
//setting the "foo" reference value in our firebase database as a string
firebase.database().ref("foo").set("whatever")

//removing/deleting the "foo" reference value in our firebase database
// firebase.database().ref("foo").remove();

//setting the "number" reference value in our firebase database as an integer
firebase.database().ref("number").set(1002);
//setting the "array" reference value in our firebase database as an array
firebase.database().ref("array").set(["hey", "you"])
//setting the "object" reference value in our firebase database as an object
firebase.database().ref("object").set({"hey": "you"})

// a push will add to an array that is currently in the firebase database
firebase.database().ref("array").push("I said")
firebase.database().ref("array").push("hey you")

//setting an empty array in the database
firebase.database().ref("array_two").set([])

//getting the current value of the "foo" ref in the database
firebase.database().ref("foo").on("value", function(snapshot){
  //This is the key for the "foo" ref in the database, which equals the ref name "foo"
  console.log(snapshot.key)
  //logging the value of the "foo" reference from the database
  console.log(snapshot.val())

  $("#foo").text(snapshot.val())
});

//getting the current value of the "object" ref
firebase.database().ref("object").on("value", function(snapshot){
  //This is the key for the "object" ref in the database, which equals the ref name "object"
  console.log(snapshot.key)
  //getting the object reference from the database
  console.log(snapshot.val())
  //getting the value for the "hey" key from the object that we got from the database
	console.log(snapshot.val().hey)
});

//getting the "array" reference from firebase
//looping through it and appending it to the dom
firebase.database().ref("array").on("value", function(snapshot){
	//$("#add-to-me").empty();
	var ul = $("<ul>");

  //looping through all of the items in the array
  //this is how you loop through a firebase array
	snapshot.forEach(function(childSnapshot) {
    //this is a unique key for every item in the array
    console.log(childSnapshot.key)
    //appending each item in the array to a list item
    console.log(childSnapshot.val())
		var li = $("<li>").text(childSnapshot.val());
		ul.append(li)
	});

  //adding the list to the dom
  $("#add-to-me").append(ul)
});

//setting a ref of "animals" as an array in the firebase database
firebase.database().ref('animals').set(["lion", "tiger"]);
//adding an animal to the "animals" array in the firebase database
firebase.database().ref('animals').push("bear");
//getting the "animals" reference from the firebase database
firebase.database().ref('animals').on('value', function(snapshot) {
  console.log(snapshot.val())
	var ul = $("<ul>");
  //looping through the firebase database
  //this is how you loop through a firebase array
	snapshot.forEach(function(childSnapshot) {
    //logging each index in the array
		console.log(childSnapshot.val());
    //appending each item from the array to a list item
		var li = $("<li>").text(childSnapshot.val());
    //appending each list item to an unordered list
		ul.append(li);
	});
  //appending that unordered list to the dom
	$("#add-to-me").append(ul)
});

//functionality for the hovering on the image on the page
$("#hover-image").hover(function(){
  var modal = $("#image-modal");
  modal.show();
});

$("#hover-image").on("mouseleave", function(){
  $("#image-modal").hide();
})
