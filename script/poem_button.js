window.onload = function()
{
	initialize();
}

var currentPoemIndex = null;
var poems = [];

function initialize()
{
	poems = getPoems();
	currentPoemIndex = 0;
	hideAllPoems();
	showCurrentPoem();
}

function hideAllPoems()
{
	for(var index = 0; index < poems.length; index++)
	{
		var poem = poems[index];
		poem.style.display = "none";
	}
}

function showCurrentPoem()
{
	showPoem(poems[currentPoemIndex]);
}

function showPoem(poem)
{
	poem.style.display = "block";
}

function getPoems()
{
	return document.getElementsByClassName("poem");
}

function previousPoem()
{
	if(!(currentPoemIndex > 0)) return;
	
	currentPoemIndex--;
	hideAllPoems();
	showCurrentPoem();
}

function nextPoem()
{
	if(!(currentPoemIndex + 1 < poems.length)) return;
	
	currentPoemIndex++;
	hideAllPoems();
	showCurrentPoem();
}
