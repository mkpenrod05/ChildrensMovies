
function full_list()
	{
	for (i = 0; i < movie.length; i++)
		{
		// document.write("<br /><hr /><br/>");
		// document.write(movie[i].title + "<br />");
		// document.write(movie[i].date + "<br />");
		// document.write(movie[i].description + "<br />");
		// document.write(movie[i].storyline + "<br />");
		// document.write(movie[i].runtime + "<br />");
		// document.write(movie[i].director + "<br />");
		// document.write(movie[i].star1 + "<br />");
		// document.write(movie[i].star2 + "<br />");
		// document.write(movie[i].star3 + "<br />");
		// document.write(movie[i].image + "<br />");
		// document.write(movie[i].rating + "<br />");
		// document.write(movie[i].genre + "<br />");
		// document.write(movie[i].gross + "<br />");
		// document.write(movie[i].box_rank + "<br />");
		// document.write(movie[i].oa_rank + "<br />");
		// document.write(movie[i].trailer + "<br />");
		document.write("<br /><hr /><br/>");
		document.write("<table border='0'>");
		
//-------------------------------------------------------------------------------------------//				
//-------------------------------------MOVIE LIST FORMAT-------------------------------------//
//-------------------------------------------------------------------------------------------//		
		document.write("<tr>");
			document.write("<td rowspan='2'>");
			document.write("<div class='image'>");
			document.write("<a href='Info.html?title_view=" + movie[i].id + "'>");
			document.write("<img style='border: 1px solid #999999;' height='150' src='images/");
			document.write(movie[i].image + "' title='" + movie[i].title + "' /></a>");
			document.write("</div></td>");
			document.write("<td align='center' width='100%'>");
			document.write("<a class='reg_link' href='Info.html?title_view=" + movie[i].id + "'>");
			document.write(movie[i].title + "</a>&nbsp;&nbsp;&nbsp;&nbsp;");
			document.write("<span class='date'>(" + movie[i].date + ")</span>");
			document.write("</td>");
		document.write("</tr>");
		
		document.write("<tr>");
			document.write("<td valign='top' style='padding: 10px 10px 0px 10px;'>");
			document.write("<span class='no_div'><b>&nbsp;" + movie[i].rating + "&nbsp;</b></span>&nbsp;&nbsp;");
			document.write("<span class='no_div'><b>&nbsp;" + movie[i].runtime + "&nbsp;</b></span>&nbsp;&nbsp;");
			document.write("<br /><br />");
			document.write(movie[i].description + "<br /><br />");
			document.write("<b>Directed by:</b>&nbsp;&nbsp;" + movie[i].director + "<br /><br />");
			document.write("<b>Leading roles:</b>&nbsp;&nbsp;");
			document.write("<a class='info' href='" + movie[i].star1_link + "' target='_BLANK'>" + movie[i].star1 + "</a>, ");
			document.write("<a class='info' href='" + movie[i].star2_link + "' target='_BLANK'>" + movie[i].star2 + "</a>, and ");
			document.write("<a class='info' href='" + movie[i].star3_link + "' target='_BLANK'>" + movie[i].star3 + "</a>");
			document.write("</td>");
		document.write("</tr></table>");
//-------------------------------------------------------------------------------------------//				
//-------------------------------------MOVIE LIST FORMAT-------------------------------------//
//-------------------------------------------------------------------------------------------//		

		}
	//document.write("<br /><br />...and many more to come!");
	}

/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/

function sort_gross(a,b)
	{
	return b - a;
	}
	
function box_office_results()
	{
	var gross_results = new Array;
	for (i = 0; i < movie.length; i++)
		{
		var title = movie[i].title;
		var gross = movie[i].gross;
		var rank = movie[i].box_rank;
		var id = movie[i].id;
		
		var info = new Array;
		info[0] = title;
		info[1] = gross;
		info[2] = rank;
		info[3] = id
		
		gross_results[rank] = {title: title, gross: gross, rank: rank, id: id};
		
		//document.write(title + " - " + gross + "<br />");
		}	
	for (x = 0; x < 10; x++)
		{
		document.write("<a class='info' href='Info.html?title_view=" + gross_results[x].id + "'>");
		document.write(gross_results[x].title + "</a><br />");
		document.write(gross_results[x].gross);
		if (x != 9)
			{
			document.write("<hr />");
			}
		}	
	}

/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/

function new_dvd_bluray()
	{
	document.write("<table border='0' width='100%'>");
	for (i = 0; i < new_dvd.length; i++)
		{
		document.write("<tr>");
		document.write("<td colspan='2'>");
		document.write("<hr />");
		document.write("</td>");
		document.write("</tr>");
		document.write("<tr>");
		document.write("<td rowspan='2' width='52'>");
			document.write("<a id='opener-" + i + "' class='info' href='#'>");
			document.write("<img style='border:1px solid #999999;' src='images/");
			document.write(new_dvd[i].image + ".jpg' width='50'");
			document.write("title='" + new_dvd[i].title + "' />");
			document.write("</a>");
		document.write("</td>");
		document.write("<td align='center'>");
		document.write("<b style='color:#FFB000;text-shadow:#444444 1px 1px 0px;'>");
		document.write(new_dvd[i].title + "</b>");
		document.write("</td>");
		document.write("<tr>");
		document.write("<td align='center'>");
		document.write("Released:&nbsp;&nbsp;" + new_dvd[i].date + "<br />");
		document.write("<img src='images/amazon.jpg' />&nbsp;&nbsp;");
		document.write("<a class='info' target='_Blank' href='" + new_dvd[i].dvd + "'>DVD</a>");
		document.write("&nbsp;&nbsp;|&nbsp;&nbsp;");
		document.write("<a class='info' target='_Blank' href='" + new_dvd[i].bluray + "'>Blu-Ray</a>");
		document.write("</td>");
		document.write("</tr>");
		document.write("<div id='dialog-" + i + "' title='" + new_dvd[i].title + "'>");
		document.write("<img src='images/" + new_dvd[i].image + "_large.jpg' style='border:1px solid #999999;' />");
		document.write("</div>");
		}
	document.write("</table>");
	}