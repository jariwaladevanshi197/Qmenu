// OUR EDITING

var showbox = function()
{
	if(document.getElementById('searchbox').style.display == "block")
	{
		document.getElementById('searchbox').style.display = "none";
		document.getElementById('segments').style.marginTop = "50px";
	}
	else
	{
		document.getElementById('searchbox').style.display = "block";
		document.getElementById('segments').style.marginTop = "8em";
	}
}