var fileName = document.getElementById("txtHeader");
var fileContent = document.getElementById("txtContent");

fileName.value="";
fileContent.value="";
function downloadFile()
 {
     if(fileName.value === "" || fileContent.value ==="")
     window.alert("Please enter File name and content");
     else
     {
  var e = fileContent.value;
  var c = document.createElement("a");
  c.download = fileName.value + ".txt";
  var t = new Blob([e], {
    type: "text/plain"
  });
  c.href = window.URL.createObjectURL(t);
  c.click();
}
}


function changeStyle(propertyName)
{
    switch(propertyName)
    {
        case "b":
            if(fileContent.style.fontWeight === "bold")
        fileContent.style.fontWeight = "normal";
        else
        fileContent.style.fontWeight = "bold";
        break;
        case "i":
            if(fileContent.style.fontStyle === "italic")
        fileContent.style.fontStyle = "normal";
        else
        fileContent.style.fontStyle = "italic";
        break;
        case "n":
        fileContent.style.fontWeight = "normal";
        fileContent.style.fontStyle = "normal";
        fileContent.style.textDecoration = "none";
        break;
        case "u":
if(fileContent.style.textDecoration === "underline")
        fileContent.style.textDecoration = "none";
        else
        fileContent.style.textDecoration = "underline"
        break;

    }
}
// Function to update character and word counts
function updateCharacterAndWordCount() {
    var content = document.getElementById("txtContent").value;
 
    var characterCount = content.length;
 
    var wordCount = content.split(/\s+/).filter(function(word) {
       return word.length > 0;
    }).length;
 
    document.getElementById("characterCount").textContent = "Characters: " + characterCount;
    document.getElementById("wordCount").textContent = "Words: " + wordCount;
 }

function replaceText() {
    var content = document.getElementById("txtContent");
    var searchText = document.getElementById("searchInput").value;
    var replaceText = document.getElementById("replaceInput").value;
 
    if (!searchText || !replaceText) {
       alert("Please enter both search and replace text.");
       return;
    }
 
    var updatedContent = content.value.replace(new RegExp(searchText, 'g'), replaceText);
    content.value = updatedContent;
    updateCharacterAndWordCount();
 }
 function increaseFontSize() {
    var txtContent = document.getElementById("txtContent");
    var currentSize = window.getComputedStyle(txtContent, null).getPropertyValue('font-size');
    var newSize = (parseFloat(currentSize) * 1.2) + "px"; // Increase by 20%
    txtContent.style.fontSize = newSize;
}function decreaseFontSize() {
    var txtContent = document.getElementById("txtContent");
    var currentSize = window.getComputedStyle(txtContent, null).getPropertyValue('font-size');
    var newSize = (parseFloat(currentSize) * 0.8) + "px"; // Increase by 20%
    txtContent.style.fontSize = newSize;
}
function changeFontColor() {
    var txtContent = document.getElementById("txtContent");
    var fontColor = document.getElementById("fontColorPicker").value;
    txtContent.style.color = fontColor;
}
const states = [];

states.push(document.getElementById('txtContent').value);

document.getElementById('undo').addEventListener('click', function() {
  
  if (states.length > 0) {
    document.getElementById('txtContent').value = states.pop();
  }
});

document.getElementById('redo').addEventListener('click', function() {
  if (states.length > 0) {
    states.push(document.getElementById('txtContent').value);
    document.getElementById('txtContent').value = states.shift();
  }
});

document.getElementById('txtContent').addEventListener('input', function() {
  
  if (document.getElementById('txtContent').value.length > 0) {
    states.push(document.getElementById('txtContent').value);
  }
});
