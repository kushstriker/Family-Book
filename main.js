var img = ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10522309.jpg","https://image.freepik.com/free-vector/cartoon-school-boy-carrying-backpack-waving-hand_29190-4926.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartkey.com%2Fview%2FThJmbJ_6-year-old-boy-cartoon%2F&psig=AOvVaw3XSgIHFotBQ4YsZkKywZ4_&ust=1619600195344000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjH6ImHnvACFQAAAAAdAAAAABAE"];

var reason = ["This is my mother Mamatha",
              "This is me Kushal",
              "This is my brother Yashas"];

var i = 0;
function nextslide(){
  document.getElementById("album").src=img[i];
  document.getElementById("name").innerHTML=reason[i];
  i++;
  if( i>3 ) i=0;
  
}
 

  

 
