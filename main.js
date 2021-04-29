var friends = [];

function submit(){

var friend1 = document.getElementById("name_of_the_student_1").value;
var friend2 = document.getElementById("name_of_the_student_2").value;
friends.push(friend1);
friends.push(friend2);
document.getElementById("display_name").innerHTML= friends;
document.getElementById("submit_button").style.display="none";
}