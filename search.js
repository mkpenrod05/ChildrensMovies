function search_title()
	{
	
	//get_query_string() function comes from querystring.js
	var title_search = get_query_string("title_search");
	
	if (title_search.length < 1)
		{
		document.getElementById("demo").innerHTML="<b style='color:#FF1800;'>Please enter a search term!</b>";
		}
	else
		{
		var x = 0;
		for (i = 0; i < movie.length; i++)
			{
			//document.write(movie[i].title + "<br />");
			//the "i" states case-insensitive
			var new_exp = new RegExp(title_search, "gi");
			if ((movie[i].title).match(new_exp))
				{
				x = x + 1;
				document.write("<br /><hr /><br />");
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
			}
		if (x == 1)
			{
			var plural = "";
			}
		else
			{
			var plural = "s";
			}
		document.getElementById("demo").innerHTML=("<center><p><h1>Search Results</h1></p></center>" +
		"Your search for <b style='color:#FF1800;'>" + 
		title_search + 
		"</b> returned <b style='color:#FF1800;'>" + 
		x + "</b> result" + plural + ".");
		}
	
	}	