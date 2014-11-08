$(document).ready(function()
{
	alert("ya cargó");
	$.getJSON("bd.json",function(result)
	{
		$.each(result, function(name, url)
		{
			$("#list_radios").append("<option url=\"" + url + "\">" + name + "</option>");

			$("#list_radios option").on("click", function()
			{
				changeAudio($(this).attr("url"));
			});
		});
	});
});

function changeAudio(song)
{
    audio = document.getElementById("player");
    audio.src = song;
    audio.load();
    audio.play();
}