console.log('tabs.js is here to server'); 
 
var projectBtn = document.getElementById("projects"); 
 
projectBtn.addEventListener("click", function(event) { 
  console.log("you clicked projects!") 
  // show #contProjects 
  document.getElementById("contProjects").style.display = "block"; 
  // hide all other tab cont's 
  document.getElementById("contAboutMe").style.display = "none"; 
  document.getElementById("contBackground").style.display = "none"; 
}); 