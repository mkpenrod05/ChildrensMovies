
	
function movie_list_all_xml()
	{
	if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		}
	else
		{// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.open("GET","movie_list_all.xml",false);
	//xmlhttp.open("GET","http://localhost/movie_list_all.xml",false);
	xmlhttp.ContentType = "text/xml";
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	
	//document.write("<table border='1'>");
	var x = xmlDoc.getElementsByTagName("movie");
	for (i = 0; i < x.length; i++)
		{
		document.write("<div style='padding:10px'>");
		document.write("<table border='1'>");
		document.write("<tr>");
		document.write("<td rowspan='2'>");
		document.write("<img height='150' src='images/");
		document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
		document.write("' />");
		document.write("</td>");
		document.write("<td align='center'>");
		document.write("<a href='Info.html?title_view=");
		document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
		document.write("'>");
		document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
		document.write("</a>");
		document.write("&nbsp;&nbsp;(");
		document.write(x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue);
		document.write(")");
		document.write("</td>");
		document.write("<td rowspan='2' align='center'>");
		document.write("<u>Rating</u><br />");
		document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
		//document.write("<img src='");
		//document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
		//document.write("'>");
		document.write("</td></tr>");
		document.write("<tr>");
		document.write("<td>");
		document.write(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);
		document.write("</td>");
		document.write("</tr>");
		document.write("</table>")
		document.write("</div>");
		}
	}




	
function search_title()
	{
	if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
		}
	else
		{// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.open("GET","movie_list_all.xml",false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	
	var x = xmlDoc.getElementsByTagName("movie");
	
	//get_query_string() function comes from querystring.js
	var title_search = get_query_string("title_search");
	
	results = new Array;
	if (title_search.length < 1)
		{
		alert("You must enter at least three characters!");
		}
	else
		{
		for (i = 0; i < x.length; i++)
			{
			var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
			var date = x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue
			var description = x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue
			var image = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue
			var rating = x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue
			
			var info = new Array;
			info[0] = title;
			info[1] = date;
			info[2] = description;
			info[3] = image;
			info[4] = rating;
			
			//the "i" states case-insensitive
			var new_exp = new RegExp(title_search, "i");
			
			if (title.match(new_exp))
				{
				//results.push(title);
				results.push(info);
				}
			}
		display_results(results, title_search);
		}
	
	}	


function display_results(results, title_search)
	{
	if (results.length > 0)
		{
		if (results.length == 1)
			{
			var plural = "";
			}
		else
			{
			var plural = "s";
			}
		document.write("<br />Your search for <b>");
		document.write(title_search);
		document.write("</b> returned <b>" + results.length);
		document.write("</b> result" + plural + ".<hr />");
		for (x in results)
			{
			//0=title, 1=date, 2=description, 3=image, 4=rating
			document.write("Title: " + results[x][0] + "<br />"); 
			document.write("Date: " + results[x][1] + "<br />");
			document.write("Description : " + results[x][2] + "<br />");
			document.write("Image: " + results[x][3] + "<br />");
			document.write("Rating: " + results[x][4] + "<br />");
			document.write("<hr />");
			}
		}
	else
		{
		document.write("<br />Your search for <b>");
		document.write(title_search);
		document.write("</b> returned <b>" + results.length + "</b> results.<hr />");
		}
	}

	
function box_office()
	{
	if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
		}
	else
		{// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.open("GET","movie_list_all.xml",false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;

	var x = xmlDoc.getElementsByTagName("movie");
	var results = new Array;
	var num = 1;
	for (i = 0; i < x.length; i++)
		{
		var box_rank = document.write(x[i].getElementsByTagName("box_rank")[0].childNodes[0].nodeValue);
		var gross = document.write(x[i].getElementsByTagName("gross")[0].childNodes[0].nodeValue);
		var info = new Array;
		info[0] = box_rank;
		info[1] = gross;
		if (box_rank.match(num))
			{
			results.push(info);
			}
		num = num + 1;
		}
	if (results.length > 0)
		{
		for (z in results)
			{
			document.write("Box Rank: " + results[z][0] + "<br />"); 
			document.write("Gross: " + results[z][1] + "<br /><hr />");
			}
		}
	}	
	

// if (results.length > 0) {
// // if there are any results, put them in a list inside the "resultshere" div
		// var resultshere = document.getElementById("resultshere");
		// var header = document.createElement("h5");
		// var list = document.createElement("ul");
		// var searchedfor = document.createTextNode("You've searched for "+searchterm);
		// resultshere.appendChild(header);
		// header.appendChild(searchedfor);
		// resultshere.appendChild(list);
		// for (var i=0;i<results.length;i++) {
			// var listitem = document.createElement("li");
			// list.appendChild(listitem);
			// listitem.appendChild(item);
		// }
	// } else {
// // else tell the user no matches were found
		// var resultshere = document.getElementById("resultshere");
		// var para = document.createElement("p");
		// var notfound = document.createTextNode("Sorry, I couldn't find anything like "+searchterm +"!");
		// resultshere.appendChild(para);
		// para.appendChild(notfound);
	// }

	
	
	
	
	
	
	
// function load_pre_func()
	// {
	// if (document.implementation && document.implementation.createDocument)
		// {
		// xml_doc = document.implementation.createDocument("", "", null);
		// xml_doc.load("movie_list_all.xml");
		// }
	// else if (window.ActiveXObject)
		// {
		// xml_doc = new ActiveXObject("Microsoft.XMLDOM");
		// xml_doc.async = "false";
		// xml_doc.load("movie_list_all.xml");
		// }
	// }

/* window.onload = loadIndex;

function loadIndex() { // load indexfile
most current browsers support document.implementation
	if (document.implementation && document.implementation.createDocument) {
		xmlDoc = document.implementation.createDocument("", "", null);
		xmlDoc.load("sample.xml");
	}
MSIE uses ActiveX
	else if (window.ActiveXObject) {
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = "false";
		xmlDoc.load("sample.xml");
	}
} */	







// //function searchIndex() { // search the index (duh!)
	// if (!xmlDoc) {
		// loadIndex();
	// }
	// // get the search term from a form field with id 'searchme'

	// var searchterm = document.getElementById("searchme").value;
	// var allitems = xmlDoc.getElementsByTagName("title");
	// results = new Array;
	// if (searchterm.length < 3) {
		// alert("Enter at least three characters");
	// } else {
		// for (var i=0;i<allitems.length;i++) {
// // see if the XML entry matches the search term,
// // and (if so) store it in an array
			// var name = allitems[i].lastChild.nodeValue;
			// var exp = new RegExp(searchterm,"i");
			// if ( name.match(exp) != null) {
				// results.push(allitems[i]);
			// }
		// }
// // send the results to another function that displays them to the user
	// showResults(results, searchterm);
	// }
// }