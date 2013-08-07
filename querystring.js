function get_query_string(key, default_)
	{
	if (default_ == null) default_ = "";
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
	var querystring = regex.exec(window.location.href);
	if(querystring == null)
		return default_;
	else
		return querystring[1];
	}