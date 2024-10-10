document.onkeydown = function (Keypressed) {
  Keypressed.preventDefault();
  document.getElementById("Instructions").style.display = "none";
  document.getElementById("JavascriptKeyCodeHeading").style.display = "";
  document.getElementById("KeyInfoRows1").style.display = "";
  document.getElementById("KeyInfoRows2").style.display = "";
  document.getElementById("KeyCode").innerText = Keypressed.keyCode;
  document.getElementById("JavascriptKeyCodeHeading").innerHTML =
    "JavaScript KeyCode " + Keypressed.keyCode;
 
    // Key a,b,c,d etc
  document.getElementById("KeyName").innerText = Keypressed.key;
 
  // Key location
  const EventLocation = document.getElementById("EventLocation");
  if (Keypressed.location == 0) {
    EventLocation.innerText = "General Key";
  } else if (Keypressed.location == 1) {
    EventLocation.innerText = "Left-side Modifier Key";
  } else if (Keypressed.location == 2) {
    EventLocation.innerText = "Right-side Modifier Key";
  } else if (Keypressed.location == 3) {
    EventLocation.innerText = "Numeric Key";
  }
 
  // Event key code
  document.getElementById("EventCode").innerText = Keypressed.code;
 
  // Event key WHICH
  document.getElementById("EventWhich").innerText = Keypressed.which;
 
  // EVENT DUMP
  document.getElementById("EventDump").innerText = `{ 
          "key" : "${Keypressed.key}" ,
          "keyCode" : "${Keypressed.keyCode}" ,
          "which" : "${Keypressed.which}" ,
          "code" : "${Keypressed.code}" ,
          "location" : "${Keypressed.location}" ,  
          "altKey" : "${Keypressed.altKey}" ,
          "ctrlKey" : "${Keypressed.ctrlKey}" ,
          "metaKey" : "${Keypressed.metaKey}" ,
          "shiftKey" : "${Keypressed.shiftKey}" ,
          "repeat" : "${Keypressed.repeat}" ,
      }`;
};
