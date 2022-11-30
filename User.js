// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://reqres.in/api/users",
//   headers: {
//     "Content-Type": "application/json"
//   }
// });

// const getDelayConfig = () => ({
//   params: {
//     delay: 3,
//   },
// });

// const UserAPI = {
//   getAll: config => instance.get("", Object.assign(getDelayConfig(), config)),
// };

// export default UserAPI;

























































<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" />
    <title>Abhilekh Patal</title>
    <meta name="Description" content="Abhilekh Patal">
    <meta name="Keywords" content="Abhilekh Patal">
    <link rel="shortcut icon" type="image/x-icon" href="/jspui/favicon.ico" />
    <!-- Common CSS -->
    <link href="/jspui/ds.css" rel="stylesheet" />
    <link href="/jspui/css/bootstrap.css" rel="stylesheet" />
    <link href="/jspui/css/ds-style.css" rel="stylesheet" />
    <link href="/jspui/css/form.css" rel="stylesheet" />
    <link href="/jspui/css/main.css" rel="stylesheet" />
    <!-- Common CSS -->
    <!-- J-Query 1.11.3 -->
    <script src="/jspui/js/jquery-1.11.3.min.js" type="text/javascript"></script>
    <!-- J-Query 1.11.3 -->
    <!-- Bootstrap JS -->
	<script src="/jspui/js/tether.min.js" type="text/javascript"></script>
    <script src="/jspui/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="/jspui/js/bootstrap.offcanvas.js" type="text/javascript"></script>
    <!-- Bootstrap JS -->

    <link rel="stylesheet" href="/jspui/css/jquery.webui-popover.css" type="text/css">

    <link href="/jspui/css/metismenu.min.css" rel="stylesheet" />
    <script src="/jspui/js/metismenu.min.js"></script>
    <script src="/jspui/js/submenu.js"></script>
    
    <link href="/jspui/css/ion.rangeSlider.css" rel="stylesheet" />
	<link href="/jspui/css/ion.rangeSlider.skinModern.css" rel="stylesheet" />
	<script src="/jspui/js/ion.rangeSlider.min.js"></script>

    <script>
        jQuery(document).ready(function ($) {
            $("#members-login").on("click", function () {
                $("#login-area").stop().slideToggle(400);
            });
        });
    </script>
    <script>
        $(document).mouseup(function (e) {
            var container = $("#login-area");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.slideUp();
            }
        });
    </script>
    <!--Fancybox Scripts -->
    <link rel="stylesheet" href="/jspui/css/jquery.fancybox.css" type="text/css" />
    <script type="text/javascript" src="/jspui/js/jquery.fancybox.min.js"></script>
    <script type="text/javascript" src="/jspui/js/jquery.fancybox-media.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $(".fancybox").fancybox({
                openEffect: 'fade',
                closeEffect: 'none',
                padding: 5,
                margin: 30,
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            });

            $(".helpinfo").fancybox({
                width: 700,
                fitToView: true,
                autoSize: true,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                padding: 0,
            });

            $(".date").fancybox({
                maxWidth: 500,
                fitToView: false,
                width: '70%',
                height: 'auto',
                autoSize: true,
                closeClick: false,
                openEffect: 'fade',
                closeEffect: 'fade',
                padding: 0
            });
            
            $(".add-tag1").fancybox({
                maxWidth: 600,
                fitToView: true,
                width: '100%',
                height: 'auto',
                autoSize: true,
                closeClick: false,
                openEffect: 'fade',
                closeEffect: 'fade',
                padding: 0
            });

            $(".bkmr").fancybox({
                maxWidth: 970,
                fitToView: true,
                width: '70%',
                height: 'auto',
                autoSize: true,
                closeClick: false,
                openEffect: 'fade',
                closeEffect: 'fade',
                padding: 0
            });

            $(document).ready(function () {
                $(".terms").fancybox({
                    maxWidth: 800,
                    fitToView: true,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    padding: 0
                });
                $(".filter1").fancybox({
                    maxWidth: 600,
					maxHeight: 600,
                    fitToView: true,
                    width: '100%',
                    height: 'auto',
                    autoSize: true,
                    closeClick: false,
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    padding: 0
                });

                $(".export-list").fancybox({
                    maxWidth: 500,
                    fitToView: true,
                    autoSize: true,
                    width: '100%',
                    height: '80%',
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none',
                    padding: 0
                });
				$(".filter-list").fancybox({
                    maxWidth: 600,
                    fitToView: true,
                    width: '100%',
                    height: 'auto',
                    autoSize: true,
                    closeClick: false,
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    padding: 0
                });
				
				 $(".changepassword").fancybox({
                maxWidth: 350,
                maxHeight: 280,
                fitToView: false,
                width: '70%',
                height: '70%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none'
            });

            });
        });
    </script>
    <!--Fancybox Scripts -->
	
	<script>

    
   		function onOtherFilterQuery(id){			 	
		 	var name = id.substring(0, id.indexOf("_")); 	
			var value = $("#" + id).val();
			var qEncoded = value; //encodeURIComponent(value);
			
			var query = "";
			
			var base = "/jspui";
	 		var location = "123456789/1";
			
			var url = base
			 		+ "/simple-search?location=" + location + "&query="
		     		+ query
			 		+ "&sort_by=" + "dc.date.accessioned_dt"
			 		+ "&order=" + "desc"
				 	+ "&rpp=" + "20"
				 	+ ""
				 	+ "&etal=" + "0"
				 	+ "&originalquery=" + "";
			 	
			 	
			 if(document.getElementById(id).checked){
				 url = url
				 	+ "&filtername=" + name
				 	+ "&filtertype=equals"
				 	+ "&filterquery=" + qEncoded;
			 }
			 else{
				 var removeIndex = id.substring(id.lastIndexOf("_") + 1);
				 var rmvURL = "&submit_filter_remove_"+ removeIndex +"=X";
				 url = url + rmvURL;
			 }
			 window.location.assign(url);
   		}
		
		function onOtherFilterQueryCustom(id){			 	
		 	var name = id.substring(0, id.indexOf("_")); 	
			var value = $("#" + id).val();
			var qEncoded = value; //encodeURIComponent(value);
			
			var query = "";
			
			var base = "/jspui";
	 		var location = "123456789/1";
			
			var url = base
			 		+ "/simple-search?location=" + location + "&query="
		     		+ query
			 		+ "&sort_by=" + "dc.date.accessioned_dt"
			 		+ "&order=" + "desc"
				 	+ "&rpp=" + "20"
				 	+ ""
				 	+ "&etal=" + "0"
				 	+ "&originalquery=" + "";
			 	
			 var removeIndex = id.substring(id.lastIndexOf("_") + 1);
			 var rmvURL = "&submit_filter_remove_"+ removeIndex +"=X";
			 url = url + rmvURL;
			 window.location.assign(url);
   		}
   		
   		function dateFilter(){
   			var dateFrom = $("#start_date").val();
   			var dateTo = $("#end_date").val();
   			alert(dateFrom + ":" + dateTo);
   			/*if(dateFrom !== "" && dateTo !== ""){
   				
   				var parsedFromDate = Date.parse(dateFrom);
   				var parsedToDate = Date.parse(dateTo);
   				
   				if(parsedFromDate <= parsedToDate){
   				
	   				var encodedDateFrom = encodeURIComponent(dateFrom);
	   	   			var encodedDateTo = encodeURIComponent(dateTo);
	   	   			
	   				var baseURL = "/jspui" ;
		   			var location = "123456789/1";
		    		var rpp = "20";
		    		var query = "" ;
		    		var sortedBy = "dc.date.accessioned_dt";
		    		var order = "desc";
		    		var httpFilters = "";
		    		
		    		var url = "";
		    		
		    		if(httpFilters.includes("dateIssued")){
		    			
		    			var dateCreatedIndex = httpFilters.indexOf("dateIssued");
		    			var firstIndex = httpFilters.indexOf("%5B", dateCreatedIndex);
		    			var secondIndex = httpFilters.indexOf("%5D", dateCreatedIndex);
		    			
		    			var previousString = httpFilters.substring(firstIndex, secondIndex + 3);
		    			var newString = "[" + encodedDateFrom +" TO " + encodedDateTo + "]";
		    			
		    			httpFilters = httpFilters.replace(previousString, newString);
		    			
		    			url = baseURL + "/simple-search?location=" + location + "&query=" + query + httpFilters + "&rpp=" + rpp + "&sort_by=" + sortedBy + "&order="+ order;
		    			
		    		}else{
		    			url = baseURL +"/simple-search?location=" + location + "&query=" + query + httpFilters  +"&filtername=dateIssued&filtertype=equals&filterquery=[" + encodedDateFrom +" TO " + encodedDateTo + "]&rpp=" + rpp + "&sort_by=" + sortedBy + "&order=" + order;
		    		}
		    		
		    		url = url + "&originalquery=" + "";
	    			self.parent.location.href = url;
   				}else{
   					alert("You can search only from lower date to higher date.");
   				}
   			}*/
   		}
   		
   		function specificYearFilter(){
   			var dateFrom = $("#start_date").val();
   			var dateTo = $("#end_date").val();
   			var url = "";
			
   			if(dateFrom.length != 4){
				var fromYear = dateFrom.split("-")[2];
				if(fromYear.length < 4){
					while((4 - fromYear.length) > 0){
						fromYear = "0" + fromYear;
					}
				}
   				dateFrom = fromYear + "-" + dateFrom.split("-")[1] + "-" + dateFrom.split("-")[0];
			}
   			else
   				dateFrom = dateFrom + "-01-01";
			
   			if(dateTo.length != 4){
				var toYear = dateTo.split("-")[2];
				if(toYear.length < 4){
					while((4 - toYear.length) > 0){
						toYear = "0" + toYear;
					}
				}
   				dateTo = toYear + "-" + dateTo.split("-")[1] + "-" + dateTo.split("-")[0];
			}
   			else
   				dateTo = dateTo + "-12-31";
   			
   			var encodedDateFrom = encodeURIComponent(dateFrom);
	   		var encodedDateTo = encodeURIComponent(dateTo);
   				
			var location = "123456789/1";
			var encodedLocation = encodeURIComponent(location);
			var rp = "20";
			var qu = "";
			var encodedQ = encodeURIComponent(qu);
			var baseURL = "/jspui";
			var httpFilters = "";
			var sortedBy = "dc.date.accessioned_dt";
			var order = "desc";
			
			if(httpFilters.includes("dateIssued")){
				var dateCreatedIndex = httpFilters.indexOf("dateIssued");
				var firstIndex = httpFilters.indexOf("%5B", dateCreatedIndex);
				var secondIndex = httpFilters.indexOf("%5D", dateCreatedIndex);
				
				var previousString = httpFilters.substring(firstIndex, secondIndex + 3);
				var newString = "[" + encodedDateFrom +" TO " + encodedDateTo + "]";
				
				httpFilters = httpFilters.replace(previousString, newString);
				
 				if(httpFilters.includes("dateIssuedTo")){
			    	var dateCreatedIndex2 = httpFilters.indexOf("dateIssuedTo");
					var firstIndex2 = httpFilters.indexOf("%5B", dateCreatedIndex2);
					var secondIndex2 = httpFilters.indexOf("%5D", dateCreatedIndex2);
					
					var previousString2 = httpFilters.substring(firstIndex2, secondIndex2 + 3);
				
					httpFilters = httpFilters.replace(previousString2, newString); 
				} 
				url = baseURL + "/simple-search?location=" + encodedLocation + "&query=" + encodedQ + httpFilters + "&rpp=" + rp + "&sort_by=" + sortedBy + "&order="+ order;
			}
			else{
				url = baseURL + "/simple-search?location=" + encodedLocation + "&query=" + encodedQ + httpFilters + "&filtername=dateIssued&filtertype=equals&filterquery=[" + encodedDateFrom +" TO " + encodedDateTo + "]&filtername_1=dateIssuedTo&filtertype_1=equals&filterquery_1=[" + encodedDateFrom +" TO " + encodedDateTo + "]&rpp=" + rp + "&sort_by=" + sortedBy + "&order=" + order;			
			}
			url = url + "&originalquery=" + "";
			window.location.assign(url);
   		}
   		
   		function onCollectionSpecificFilter(id){
   			var id = id;
   			var location = "";
   			if(document.getElementById(id).checked){
   				location = $('#' + id).val();
   			}
   		
   			var rp = "20" ;
   			var query = "";
   			var httpFilters = "";
   			var baseURL = "/jspui";
   			var sortedBy = "dc.date.accessioned_dt";
   			var order = "desc";
   			
   			var url = baseURL + "/simple-search?location=" + location + "&query=" + query + httpFilters + "&rpp=" + rp + "&sort_by=" + sortedBy + "&order=" + order + "&originalquery=" + "";
   			window.location.assign(url);
   		}
   		
   		function onChangeRPP(id){
   			var rpp = $("#"  + id).val();
   			var location = "123456789/1";
   			var query = "";
    		var encodedQ = encodeURIComponent(query); 
    		var httpFilters = "";
    		var baseURL = "/jspui";
    		var sortedBy = "dc.date.accessioned_dt";
    		var order = "desc";
    		
    		var url = baseURL + "/simple-search?location=" + location + "&query=" + encodedQ + "&originalquery=" + "" + httpFilters + "&rpp=" + rpp + "&sort_by=" + sortedBy + "&order=" + order;
   			window.location.assign(url);
   		}
   		
   		function onChangeSortBy(id){
   			var sortValue = $("#" + id).val();
   			var sortValueAndOrder = sortValue.split("-");
   			
   			var sortedBy = sortValue == "score" ? "score" : sortValueAndOrder[0];
   			var sortOrder = sortValue == "score" ? "desc" : sortValueAndOrder[1];
   			var location = "123456789/1";
   			var query = "";
    		var encodedQ = encodeURIComponent(query); 
    		var httpFilters = "";
    		var baseURL = "/jspui";
    		var rpp = "20" ;
    		
    		var url = baseURL + "/simple-search?location=" + location + "&query=" + encodedQ + "&originalquery=" + "" + httpFilters + "&rpp=" + rpp + "&sort_by=" + sortedBy + "&order=" + sortOrder;
   			window.location.assign(url);
   		}
   		
   		function onYearUnavailableFilter(id){
   			var location = "123456789/1";
   			var finalQuery = "";
   			
   			var searchQuery = "";
   			
   			if(document.getElementById(id).checked){
   				if(searchQuery === ""){
   					finalQuery = "-dateIssued:[\"\" TO *]";
   				}
   				else{
   					finalQuery = searchQuery + " AND " +  "-dateIssued:[\"\" TO *]";
   				}
   			}
   			else{
   				if(searchQuery.includes("dateIssued") === true){
   					finalQuery = searchQuery.substring(0,searchQuery.lastIndexOf("AND") - 1);
   				}
   				else{
   					finalQuery = searchQuery;
   				}
   			}
   			
   			var encodedQ = encodeURIComponent(finalQuery); 
   			var baseURL = "/jspui";
   			var rpp = "20" ;
   			var sortedBy = "dc.date.accessioned_dt";
   			var order = "desc";
   			
   			var url = baseURL + "/simple-search?location=" + location + "&query=" + encodedQ + "&originalquery=" + "" + "&rpp=" + rpp + "&sort_by=" + sortedBy + "&order=" + order;
   			window.location.assign(url);
   		}
    </script>
	<style>
	#ui-datepicker-div{
		z-index: 1300 !important;
	}
	</style>
</head>
<body class="body">
    <div class="wrapper">
        <!-- HEADER -->
        





























<script>
	function querySearch(){
		var query = $("#query").val();
		var encodedQuery = encodeURIComponent(query);
		var baseURL = "/jspui";
		
		var encodedQueryWithParenthesis = "(" + encodedQuery + ")";
		
		var url;
		if($("#fulltext-search").prop('checked')){
			url = baseURL + "/simple-search?location=123456789%2F1&query=" + encodedQuery + "&rpp=20&sort_by=dc.date.accessioned_dt&order=desc";
		}else{
			url = baseURL + "/simple-search?rpp=20&sort_by=dc.date.accessioned_dt&order=desc&query=" 
					+ "title:" + encodedQueryWithParenthesis + " OR "
					+ "fileName:" + encodedQueryWithParenthesis + " OR "
					+ "part:" + encodedQueryWithParenthesis + " OR "
					+ "category:" + encodedQueryWithParenthesis + " OR "
					+ "fileType:" + encodedQueryWithParenthesis + " OR "
					+ "keywords:" + encodedQueryWithParenthesis + " OR "
					+ "department:" + encodedQueryWithParenthesis + " OR "
					+ "scale:" + encodedQueryWithParenthesis + " OR "
					+ "place:" + encodedQueryWithParenthesis + " OR "
					+ "subjectCollection:" + encodedQueryWithParenthesis + " OR "
					+ "organization:" + encodedQueryWithParenthesis + " OR "
					+ "recordType:" + encodedQueryWithParenthesis + " OR "
					+ "identifier:" + encodedQueryWithParenthesis + "&originalquery=" + encodedQuery;
		}
		window.location.assign(url);
	}
	
	function enterForQuery(e){
		if(e.keyCode == 13)
			querySearch();
	}
	function enterForFilter(e){
		if(e.keyCode == 13)
			addNewFilter();
	}
</script>
<link rel="stylesheet" href="/jspui/static/css/jquery-ui-1.10.3.custom/redmond/jquery-ui-1.10.3.custom.css" type="text/css" />
<script src="/jspui/static/js/jquery/jquery-ui-1.10.3.custom.min.js"></script>
<style>
.ui-autocomplete{
	cursor: pointer;
	overflow-x: hidden;
	overflow-y: scroll;
}
#ui-id-1{
	z-index: 2000;
	position:fixed !important;
}	
.clr-red-br {
    border: 2px solid #fcd24a;
    background: #fcd24a !important;
    color: #c80000;
    font-weight: bold;
    -webkit-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    padding: 6px 13px;
}
.clr-red-br:hover {
    border: 2px solid #c80000;
    color: #fff !important;
    background: #c80000 !important;
}
</style>

<style>
.font0 {
    font-size: 12px !important;
}

.fontOrg {
    font-size: 13px !important;
}

.font1 {
    font-size: 14px !important;
}

.font2 {
    font-size: 15px !important;
}

.font3 {
    font-size: 16px !important;
}
.high-contrast.dark {
	background: url(../../jspui/image/ico-themes.png) 50% 50% no-repeat;
}

.high-contrast.light {
	background: url(../../jspui/image/ico-themes-light.png) 50% 50% no-repeat;
}
</style>

<script>
function getCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) 
			break;
	}
	return null;
}

function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return unescape(document.cookie.substring(offset, endstr));
}

function setCookieVal (cookieName, cookieVal) {
	var thirtyDays = 1000*60*60*24*30;
	var expireDate = new Date((new Date()).valueOf() + thirtyDays);
	document.cookie = cookieName + "=" + cookieVal + ";expires=" + expireDate.toGMTString() + ";path=/";
}

function setFontSize(fontType){
	if(fontType == "increase")
	{
		if(jQuery("body").hasClass('font0') )
		{
			$("body").removeClass('font0');
			$("body").addClass('fontOrg');
			setCookieVal("fontClass", "fontOrg");
		}
		else if( jQuery("body").hasClass('fontOrg'))
		{
			$("body").removeClass('fontOrg');
			$("body").addClass('font1');
			setCookieVal("fontClass", "font1");
		}
		else if(jQuery("body").hasClass('font1') )
		{
			$("body").removeClass('font1');
			$("body").addClass('font2');
			setCookieVal("fontClass", "font2");
		}
		else if(jQuery("body").hasClass('font2') )
		{
			$("body").removeClass('font2');
			$("body").addClass('font3');
			setCookieVal("fontClass", "font3");
		}
	}else if(fontType == "decrease"){
		if(jQuery("body").hasClass('font3') )
		{
			$("body").removeClass('font3');
	        $("body").addClass('font2');
			setCookieVal("fontClass", "font2");
		}
		else if(jQuery("body").hasClass('font2'))
		{
			$("body").removeClass('font2');
	        $("body").addClass('font1');
			setCookieVal("fontClass", "font1");
		}
		else if(jQuery("body").hasClass('font1'))
		{
			$("body").removeClass('font1');
	        $("body").addClass('fontOrg');
			setCookieVal("fontClass", "fontOrg");
		}
		else if(jQuery("body").hasClass('fontOrg'))
		{
			$("body").removeClass('fontOrg');
	        $("body").addClass('font0');
			setCookieVal("fontClass", "font0");
		}
	}else{
		$("body").removeClass('fontOrg font0 font1 font2 font3');
        $("body").addClass('fontOrg');
		setCookieVal("fontClass", "fontOrg");
	}
}	

$(document).ready(function(){
	
	$("#fulltext-search").prop('checked', true);
	$('#filtername').change(function(){
		var filter = $('#filtername').val();
		if(filter == 'branch'){
			$('#filtertype').css('visibility','hidden');
			$('#filtertype_branch').css('visibility','visible');
		}else{
			$('#filtertype').css('visibility','visible');
			$('#filtertype_branch').css('visibility','hidden');;
		}
	})
	
	var strCookie = getCookie("fontClass");
	if(strCookie != null){
		$("body").addClass(strCookie);
	}else{
		$("body").addClass("fontOrg");
	}

	var strCookie = getCookie("contrast");
	if(strCookie != null && strCookie == "dark" ){
		$("#light").show();
		$("#dark").hide();
		jQuery('head').append('<link rel="stylesheet" type="text/css" media="screen" href="/jspui/css/change.css">');
	}else{
		$("#light").hide();
		$("#dark").show();
		jQuery("[href*='change.css']").remove();
	}

	jQuery('#dark').click(function(){

		$("#light").show();
		$("#dark").hide();

		setCookieVal("contrast", "dark");
		jQuery('head').append('<link rel="stylesheet" type="text/css" media="screen" href="/jspui/css/change.css">');
	});

	jQuery('#light').click(function(){

		$("#light").hide();
		$("#dark").show();

		setCookieVal("contrast", "light");
		jQuery("[href*='change.css']").remove();
	});	
	
	var hieFacet = false;
	var department, autoFilter, auto_department, custom, department_branch_mapping;
	$("#filterquery").autocomplete({
		source: function(request, response){
			custom = false;
			autoFilter = $("#filtername").val();
			auto_department = "";
			if(autoFilter == "department" && autoFilter == "branch")
				custom = false;
			if(autoFilter == "branch")
			{
				autoFilter = "department";
				auto_department = department;
			}
			
			if(currentFilters.includes("department") && currentFilters.includes("branch"))
			{
				var deptIndex = currentFilters.indexOf("department") + 2;
				var branchIndex = currentFilters.indexOf("branch") + 2;
				
				var finalStr = currentFilters[deptIndex] + "::" + currentFilters[branchIndex];
				currentFilters.splice(branchIndex - 2, 3);
				
				var newIndex = currentFilters.indexOf("department");
				currentFilters[newIndex + 2] = finalStr;
			} 
			
			var httpReq = "";
			if (currentFilters != null && currentFilters.length >0 ) 
			{
			    var idx = 1;
			    for(var i = 0 ; i<=currentFilters.length-3;i++ ){
			    	if(i == 0){
			    	 httpReq = httpReq +"?filter_field_"+idx+"="+ currentFilters[i++];
			    	}else{
			    	 httpReq = httpReq +"&filter_field_"+idx+"="+ currentFilters[i++];
			    	}
			    	 httpReq = httpReq +"&filter_type_"+idx+"="+ currentFilters[i++];
			    	 httpReq = httpReq +"&filter_value_"+idx+"="+ currentFilters[i];
			    	 idx++;
			    }
			}if($("#filtername").val() == "department"){
				if(httpReq != ""){
					httpReq = httpReq + "&autocomplete.limit=1000"
				}else{
					httpReq = "?autocomplete.limit=1000"
				}
			}
			if($("#filtername").val() == "branch"){
				var depIndex=currentFilters.indexOf("department")+2;
				var depName=currentFilters[depIndex];
				var fieldVal = $("#filterquery").val();
				
				response($.map(department_branch_mapping[depName],function(item){
					switch($("#filtertype_branch").val()) {
				    case "contains":
				    	if(item.name.toUpperCase().indexOf(fieldVal.trim().toUpperCase()) != -1){
							return {label:item.name+" ("+item.value+")", value:item.name}
						}
				        break;
				    default:
				    	if(item.name.toUpperCase().indexOf(fieldVal.trim().toUpperCase()) == 0){
							return {label:item.name+" ("+item.value+")", value:item.name}
						}
				        break;
					}
				}));
				
			}else{
			$.ajax({
				url: "/jspui/json/discovery/autocomplete" + httpReq,
				dataType: "json",
				cache: false,
				data: {
					auto_idx: autoFilter,
					auto_query: $("#filterquery").val(),
					auto_sort: "count",
					custom: custom,
					auto_type: $("#filtertype").val(),
					auto_department: auto_department,
					location: '123456789/1'
				},
				success: function(data){
					if($("#filtername").val() == "department"){
						var	dict = {};
						department_branch_mapping = {};
						
						($.map(data.autocomplete, function(item){
								var displayLabel = item.displayedValue;
								var index = displayLabel.indexOf("::");
								
								var newdisplayLabel;
								if(index >=0){
								 	newdisplayLabel=displayLabel.slice(0,index);
								}else{
									newdisplayLabel=displayLabel;/*department doesn't have any branch.*/
								}
								
								if(!dict[newdisplayLabel]){
									dict[newdisplayLabel] = 0;
									department_branch_mapping[newdisplayLabel] = [];
								}
								dict[newdisplayLabel]=dict[newdisplayLabel]+item.count;
								
								if(index >=0){
									var branch = {};
									branch["name"] = displayLabel.slice(index + 2);
									branch["value"] = item.count;
																		
									department_branch_mapping[newdisplayLabel].push(branch);
								}
						}));
					
						response($.map(Object.keys(dict),function(key){
							return {label:key+" ("+dict[key]+")",value:key}
						}));
					}else{
					 response($.map(data.autocomplete, function(item){
						var displayLabel = item.displayedValue + " (" + item.count + ")";
						var valueLabel = item.displayedValue;
						return {label:displayLabel,value:valueLabel}
					}));
				}
				}
			})
			}
		}
	});
	
	$("#filtertype").change(function(){
		if($("#filtername").val() == "dateIssued")
		{
			if($(this).val() == "between")
			{
				var mainContent = '<div class="col-sm-1" id="dynamicYearSpacer">' +
									'<div class="form-group">' +
									'<input type="text" value="To" disabled>' +
									'</div>' +
									'</div>' +
									'<div class="col-sm-2" id="dynamicYearInput">' +
									'<div class="form-group">' +
										'<input type="text" id="filterquery2" name="filterquery2" onkeyup="enterForFilter(event)" autocomplete="off">' +
									'</div>' +
								'</div>';
				
				$("#mainSearchQuery").removeClass("col-sm-5");
				$("#mainSearchQuery").addClass("col-sm-2");
				$("#mainSearchQuery").after(mainContent);
				$("#filterquery2").datepicker({dateFormat: "yy-mm-dd",changeYear: true,yearRange: "1000:c"});
				jQuery("#ui-datepicker-div").click(function(){
				   jQuery(".dropdown-search").show();
				});
				
				$("#filterquery2").on("change", function() {
					$('.dropdown-search').show();
				});
			}
			else
			{
				var element =  document.getElementById("dynamicYearInput");
				if(typeof(element) != 'undefined' && element != null)
				{
					$("#filterquery2").datepicker("destroy");
					$(element).remove();
					$("#dynamicYearSpacer").remove();
					$("#mainSearchQuery").removeClass("col-sm-2");
					$("#mainSearchQuery").addClass("col-sm-5");
				}
			}
		}
	});
	
	$("#filtername").change(function(){
		if($(this).val() == "department" || $(this).val() == "branch")
			hieFacet = true;
		else
			hieFacet = false;
		
		if($(this).val() == "dateIssued")
		{
			$("#filtertype").hide();
			$("#filtertype_branch").hide();
			$("#dynamicfrom").show();
			
			$("#filtertype").html('<option value="between">Between</option>');
			$("#filterquery").autocomplete("disable");
			$("#filterquery").datepicker({dateFormat: "yy-mm-dd",changeYear: true,yearRange: "1000:c"});
			$("#filtertype").trigger("change");
			jQuery("#ui-datepicker-div").click(function(){
			   jQuery(".dropdown-search").show();
			});
		}
		else
		{
			$("#dynamicfrom").hide();
			$("#filtertype").show();
			$("#filtertype_branch").show();
			
			$("#filtertype").html('<option value="equals">Equals</option><option value="contains">Contains</option><option value="notequals">Not Equals</option><option value="notcontains">Not Contains</option>');
			$("#filterquery").datepicker("destroy");
			$("#filterquery").autocomplete("enable");
			
			var element =  document.getElementById("dynamicYearInput");
			if(typeof(element) != 'undefined' && element != null)
			{
				$("#filterquery2").datepicker("destroy");
				$(element).remove();
				$("#dynamicYearSpacer").remove();
				$("#mainSearchQuery").removeClass("col-sm-2");
				$("#mainSearchQuery").addClass("col-sm-5");
			}
		}
		
		if($(this).val() == "branch")
		{
			var validDept = currentFilters.includes("department");
			if(validDept)
			{
				var index = currentFilters.indexOf("department") + 2;
				department = currentFilters[index];
			}
			else
			{
				alert("Please select a Department first!");
				$("#filterquery").prop("disabled", true);
				return;
			}
		}
		
		$("#filterquery").prop("disabled", false);
	});
}); 
</script>

<style type="text/css" media="print">
body{display:none; visibility:hidden;}
</style>

<script>
$(function(){
	$(".changepassword").fancybox({
		maxWidth: 350,
		maxHeight: 280,
		fitToView: false,
		width: '70%',
		height: '70%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none'
	});
	
	$(".pdf").fancybox({
		maxWidth: 1000,
		maxHeight: 750,
		fitToView: false,
		width: '80%',
		height: '100%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none',
		padding: 5
	});
});
</script>

<nav class="navbar navbar-light bg-nav navbar-fixed-top">
	<div class="container">
		<div class="navbar-brand">
			<a href="/jspui/"><img src="/jspui/images/logo.png" alt="" title="" class="img-fluid"></a>
			<img src="/jspui/images/logo-national-archive-india.png" alt="" title="" class="img-fluid">
		</div>
		<div class="pull-xl-right text-xl-right">
			<ul class="tp-link">
				
				
				<li style="width: 250px; margin-top: 0px; text-align: left;"><a href="/jspui/simple-search?location=&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc">Last Updated: 568 records containing 80123 pages on 16th November, 2022</a><li>
				
				<li><a href="/jspui/password-login" style="margin-left:15px;" class="btn-inline clr-blue-br btn-login"><i class="fa fa-lock" aria-hidden="true"></i> Login / Register</a></li>
				<li>
					<button id="offcanvas-toggle" type="button" class="navbar-toggle collapsed offcanvas-toggle hidden-xl-up pull-xs-right" data-toggle="offcanvas" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					
 					<a href="javascript:void(0);"  title="Decrease font size" onclick="setFontSize('decrease')" style="margin-left:5px; font-size: 11px;">-A</a>
 					<a href="javascript:void(0);" title="Reset font size" onclick="setFontSize('')" style="margin-left:5px; font-size: 13px;">A</a>
 					<a href="javascript:void(0);" title="Increase font size" onclick="setFontSize('increase')" style="margin-left:5px; margin-right:5px; font-size: 15px;">+A</a>					
					<img title="Normal Contrast" id="light" src="/jspui/image/ico-themes-light.png" style="display: block; max-width: 100%; height: auto; float:right;" >
 		            <img title="High Contrast" id="dark" src="/jspui/image/ico-themes.png" style="display: none; max-width: 100%; height: auto;float:right;" >
				</li>
				
			</ul>
			
			<div class="spacer1"></div>
			<ul class="admin-link">
			
			<li class="hidden-sm-down"><a href="/jspui/pdf/5-step-user-guide.pdf" class="pdf fancybox.iframe"><i class="fa fa-lg fa-file-pdf-o" aria-hidden="true" style="font-weight:bold"></i>&nbsp;&nbsp;5 Step User Guide</a></li>
			<li class="hidden-sm-down"><a target="_blank" class="fancybox-media" href="https://youtu.be/0oGBwi_A6xA"><i class="fa fa-lg fa-file-video-o" aria-hidden="true" style="font-weight:bold"></i>&nbsp;&nbsp;How to Use Digitized on Demand</a></li>
			</ul>
			<div class="spacer1 hidden-xl-up"></div>
		</div>
		<div class="clear"></div>
		<div id="offcanvas-overlay"></div>
	</div>
	<div class="bg-nav-bt">
		<div class="container">
			<div class="pull-xs-left navbar-offcanvas-left navbar-offcanvas" id="navbar">
				<ul class="nav navbar-nav navbar-padding">
					
					<li class="nav-item"><a href="/jspui/simple-search?location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc">Online Reference Media</a></li>
					<li class="nav-item"><a href="/jspui/digitized-collections">Digitized Collections</a></li>
				</ul>
			</div>
			<ul class="search">
				<li>
					<div class="search-area">
						<div class="input-group">
							<input name="" id="query" type="text" class="form-control" placeholder="See Tips for Optimized Search" onkeyup="enterForQuery(event)">
							<span class="search-btn">
								<a href="#" onclick="querySearch()"><i class="fa fa-search"></i></a>
							</span>
							<script>
								if ($(window).width() < 400 ) {
								    $("#query").attr("placeholder","See Tips");
								}
							</script>
						</div>
					</div>
				</li>
				<li style="padding-left: 5px;">
					<div class="checkbox checkbox-primary checkbox-left">
                     	<input type="checkbox" name="checkbox" style="padding-top: 5px;" id="fulltext-search">
                        <label for="fulltext-search">Full Text<br/>Search</label>
                    </div>
				</li>
				<li class="dropdown_link">
					<a id="search-toggle" href="#">Advanced<br />Search</a>
					<div class="dropdown-search">
						<div class="search_panel">
							<div class="btn-close pull-xs-right"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
							<!-- <h4>Filters</h4>
							 <p>Use filters to refine the search results.</p>-->
							<h5>The default search is performed across all Metadata & Full text </h5>
							<h5>Find records with the customised combination of Metadata using Advanced Search</h5>
							<div class="spacer1"></div>
							<div class="search_data">
								<div class="row" id="dynamicFormData"></div>
								<script>
									var currentFilters = [];
									
								</script>
								
								<div class="row">
									<form action="/jspui/simple-search" method="get" id="advanceSearchForm">
									<input type="hidden" value="123456789&#x2F;1" name="location" />
									<input type="hidden" name="rpp" value="20" />
									<input type="hidden" value="" name="query" />
									</form>
									<div class="col-sm-3">
										<div class="form-group">
											<select id="filtername" name="filtername">
											<option value="title">Title (Subject)</option><option value="fileName">File No.</option><option value="part">Part</option><option value="category">Category</option><option value="fileType">Document Type</option><option value="keywords">Keywords</option><option value="department">Department</option><option value="branch">Branch</option><option value="scale">Scale</option><option value="dateIssued">Year / Date</option><option value="place">Place</option><option value="subjectCollection">Digitized Collection</option><option value="organization">Organization</option><option value="recordType">Record Contains</option><option value="identifier">Identifier</option><option value="series">Series</option><option value="callNumber">Call Number</option><option value="contributor">Contributor</option><option value="publisher">Publisher</option><option value="subject">Subject</option><option value="creator">Creator</option><option value="accessionNumber">Accession Number</option>
											</select>
										</div>
									</div>
									<div class="col-sm-2">
										<div class="form-group col-sm-12" style="padding:0;">
											<select id="filtertype" name="filtertype" style="visibility:visible;position:absolute">
											<option value="equals">Equals</option><option value="contains">Contains</option><option value="notequals">Not Equals</option><option value="notcontains">Not Contains</option>
											</select>
											<input id = "dynamicfrom" type="text" value="From" style="display:none; text-align:center;" disabled>
											<select id="filtertype_branch" name="filtertype" style="visibility:hidden;position:absolute">
											<option value="equals">Equals</option><option value="contains">Contains</option>
											</select>
										</div>
									</div>
									<div class="col-sm-5" id="mainSearchQuery">
										<div class="form-group">
											<input type="text" id="filterquery" name="filterquery" onchange="jQuery('.dropdown-search').show();" onkeyup="enterForFilter(event)">
										</div>
									</div>
									<script>
										function resetAdvanceSearch(){
											currentFilters = [];
											department_branch_mapping={};
											$("#filtername").prop('selectedIndex', 0);
											$("#filtertype").prop('selectedIndex', 0);
											$("#filterquery").val("");
											$("#dynamicFormData").html("");
										}
										function submitAdvanceSearch(){
											var form = document.getElementById("advanceSearchForm");
											var size = 0;
											
											if(currentFilters.length > 0){
												size = currentFilters.length / 3;
											}
											
											if(currentFilters.includes("department") && currentFilters.includes("branch"))
											{
												var deptIndex = currentFilters.indexOf("department") + 2;
												var branchIndex = currentFilters.indexOf("branch") + 2;
												
												var finalStr = currentFilters[deptIndex] + "::" + currentFilters[branchIndex];
												currentFilters.splice(branchIndex - 2, 3);
												
												var newIndex = currentFilters.indexOf("department");
												currentFilters[newIndex + 2] = finalStr;
												size--;
											}
											
											if(currentFilters.includes("dateIssued"))
											{
												var dateIndex = currentFilters.indexOf("dateIssued");
												var type = currentFilters[dateIndex + 1];
												var value = currentFilters[dateIndex + 2];
												
												if(currentFilters.includes("dateIssuedTo")){
													var dateIndexDtIssuedTo = currentFilters.indexOf("dateIssuedTo");
													var valueofDtIssuedTo = currentFilters[dateIndexDtIssuedTo + 2];
												}
												
												currentFilters[dateIndex + 1] = "equals";
												
												
												if(type == "equals")
												{
													var digitRegex = /^[0-9]+$/;
													var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
													if(digitRegex.test(value)){
														value = "[" + value + "-01-01 TO " + valueofDtIssuedTo + "-12-31]";
													}else if(dateRegex.test(value)){
														value = "[" + value + " TO " + valueofDtIssuedTo + "]";
													}
													currentFilters[dateIndex + 2] = value;
													currentFilters[dateIndexDtIssuedTo + 2] = value;
												}
												/*else if(type == "before")
												{
													currentFilters[dateIndex + 2] = "[* TO " + value +"]";
												}
												else if(type == "after")
												{
													currentFilters[dateIndex + 2] = "[" + value + " TO *]";
												}*/
											}
											
											for(i = 0; i < size; i++){
												j = i * 3;
												
												var name = document.createElement("input");
												var type = document.createElement("input");
												var fQuery = document.createElement("input");
												
												name.setAttribute("type", "hidden");
												name.setAttribute("id", "filter_field_" + (i+1));
												name.setAttribute("name", "filter_field_" + (i+1));
												name.setAttribute("value", currentFilters[j]);
												
												type.setAttribute("type", "hidden");
												type.setAttribute("id", "filter_type_" + (i+1));
												type.setAttribute("name", "filter_type_" + (i+1));
												type.setAttribute("value", currentFilters[j + 1]);
												
												fQuery.setAttribute("type", "hidden");
												fQuery.setAttribute("id", "filter_value_" + (i+1));
												fQuery.setAttribute("name", "filter_value_" + (i+1));
												fQuery.setAttribute("value", currentFilters[j + 2]);
												
												form.appendChild(name);
												form.appendChild(type);
												form.appendChild(fQuery);
											}
											
											form.submit();
										}
										function refreshFilterBar(){
											if(currentFilters.length > 0){
												var size = currentFilters.length / 3;
												var dynamicFormData = document.getElementById("dynamicFormData");
												dynamicFormData.innerHTML = "";
												var filterNames = $("#filtername").html();
												var filterTypes = $("#filtertype").html();
												var datesFilterTypes = '<option value="equals">Equals</option><option value="between">From</option>';
												
												if(currentFilters.includes("department"))
												{
													var valueIndex = currentFilters.indexOf("department") + 2;
													var value = currentFilters[valueIndex];
													if(value.includes("::"))
													{
														currentFilters.push("branch");
														currentFilters.push("equals");
														currentFilters.push(value.split("::")[1]);
														currentFilters[valueIndex] = value.split("::")[0];
														size++;
													}
												}
												
												for(i = 0; i < size; i++){
													var element = document.createElement("div");
													element.setAttribute("id", "dynamicData-" + i);
													dynamicFormData.appendChild(element);
													
													var myType = filterTypes;
													var myTypeToSelect = currentFilters[(i*3) + 1];
													var myValue = currentFilters[(i*3) + 2];
													if(currentFilters[i*3] == "dateIssued")
													{
														myType = datesFilterTypes;
														
														var first = myValue.split(" TO ")[0];
														
														if(first == myValue)
														{
															myTypeToSelect = "equals";
														}
														else
														{
															var second = myValue.split(" TO ")[1];
															first = first.substr(1, first.length);
															second = second.substr(0, second.length - 1);
															
															if(first == "*")
															{
																myTypeToSelect = "before";
																myValue = second;
															}
															else if(second == "*")
															{
																myTypeToSelect = "after";
																myValue = first;
															}
															else
															{
																myTypeToSelect = "between";
																myValue = first + "::" + second;
															}
														}
													}
													
													if(currentFilters[i*3] == "dateIssuedTo"){
														continue;
													}
													
													var myDynamicDiv = "";
													
													if(myValue.includes("::"))
													{
														myDynamicDiv = '<div class="col-sm-2">' +
																		'<div class="form-group">' +
																			'<input type="text" value="' + myValue.split("::")[0] +'" disabled>' +
																		'</div>' +
																		'</div>' +
																		'<div class="col-sm-1">' +
																		'<div class="form-group">' +
																			'<input type="text" value="To" disabled>' +
																		'</div>' +
																		'</div>' +
																		'<div class="col-sm-2">' +
																		'<div class="form-group">' +
																			'<input type="text" value="' + myValue.split("::")[1] +'" disabled>' +
																		'</div>' +
																		'</div>';
													}
													else
													{
														myDynamicDiv = '<div class="col-sm-5">' +
																		'<div class="form-group">' +
																		'<input type="text" value="' + myValue +'" disabled>' +
																		'</div>' +
																		'</div>';
													}
													
													var data = '<div class="col-sm-3">' + 
													'<div class="form-group">' + 
													'<select disabled>' +
													filterNames +
													'</select>' +
													'</div>' +
													'</div>' +
													'<div class="col-sm-2">' +
													'<div class="form-group">';
													
													if(currentFilters[i*3] == "dateIssued"){
														data += '<select style="-webkit-appearance: none;" disabled>' +
													myType + 
														'</select>';
													}
													else{
														data += '<select disabled>' +
														myType + 
														'</select>';
													}
													
													data += '</div>' +
													'</div>' + myDynamicDiv + 
													'<div class="col-sm-2">' +
													'<div class="form-group">' +
													'<a onclick="removeDynamicFilter(' + i + ')" class="clr-blue-br"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>' + 
													'</div>' +
													'</div>';
													
													document.getElementById("dynamicData-" + i).innerHTML = data;
													
													var newElementID = document.getElementById("dynamicData-" + i);
													$(newElementID).find('option[value="' + currentFilters[i*3] + '"]').prop('selected', true);
													$(newElementID).find('option[value="' + myTypeToSelect + '"]').prop('selected', true);
												}
											}
										}
										refreshFilterBar();
										function removeDynamicFilter(index){
											if(currentFilters.length > 0)
											{
												if(currentFilters.includes("branch") && currentFilters[index * 3] == "department")
												{
													alert("Cannot delete Department while having Branch!");
													return;
												}
												
												var size = currentFilters.length / 3;
												
												if(size == 1 || (currentFilters[index*3] == "dateIssued" && size == 2))
												{
													resetAdvanceSearch();
													return;
												}
												
												if(index == 0)
												{
													var cut;
													if(currentFilters[index*3] == "dateIssued"){
														cut = currentFilters.slice(6, currentFilters.length);
													}else{
														cut = currentFilters.slice(3, currentFilters.length);
													}
													
													currentFilters = cut;
												}
												else if(index == (size - 1))
												{
													var cut;
													if(currentFilters[index*3] == "dateIssued"){
														cut = currentFilters.slice(0, 6 * index);
													}else{
														cut = currentFilters.slice(0, 3 * index);
													}
														
													currentFilters = cut;
												}
												else
												{
													var place = index * 3;
													var first = currentFilters.slice(0, place);
													var second;
													
													if(currentFilters[index*3] == "dateIssued"){
														second= currentFilters.slice(place + 6, currentFilters.length);
													}else{
														second= currentFilters.slice(place + 3, currentFilters.length);
													}
													
													currentFilters = first.concat(second);
												}
												refreshFilterBar();
											}
										}
										function addNewFilter(){
											var valid = document.getElementById("filterquery").value.length > 0;
											if($("#filtername").val()=="branch" && currentFilters[currentFilters.indexOf("department")+2].indexOf("::") != -1){
												alert("Filter already exist!");
												return;
											}
											if(currentFilters.includes($("#filtername").val()))
											{
												alert("Filter already exist!");
												return;
											}
											
											if(valid)
											{
												var value = $("#filterquery").val();
												
												if($("#filtername").val() == "dateIssued") 
												{
													var type = $("#filtertype").val();
													
													if(type == "between")
													{
														value = "[" + value + " TO " + $("#filterquery2").val() +"]";
													}
													else if(type == "before")
													{
														value = "[* TO " + value +"]";
													}
													else if(type == "after")
													{
														value = "[" + value + " TO *]";
													}
												}
												
												currentFilters.push($("#filtername").val());
												currentFilters.push($("#filtertype").val());
												currentFilters.push(value);
												
												if($("#filtername").val() == "dateIssued"){
													currentFilters.push("dateIssuedTo");
													currentFilters.push("equals");
													currentFilters.push(value);
												}
												
												$("#filtername").prop('selectedIndex', 0);
												$("#filtertype").prop('selectedIndex', 0);
												$("#filterquery").val('');
												$("#filtername").focus();
												$("#filtername").trigger("change");
												
												refreshFilterBar();
											}
										}
									</script>
									<div class="col-sm-2">
										<div class="form-group">
											<a class="clr-blue-br" onclick="addNewFilter()"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;ADD</a>
										</div>
									</div>
								</div>
							</div>
							<div class="spacer1"></div>
							<div class="row">
								<div class="col-sm-12">
									<button type="submit" class="btn-blue" onclick="resetAdvanceSearch()">Reset</button>
									<button type="submit" class="btn-blue" onclick="submitAdvanceSearch()">Search</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li title="Search Tips">
					<a href="/jspui/help.htm" class="helpinfo fancybox.iframe">
						<i class="fa fa-lg fa-lightbulb-o" aria-hidden="true"> Tips</i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

        <!-- HEADER -->
        <!-- BODY -->
        <section class="container-fluid">
            <div class="row">
                <div class="spacer2"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3">
                            <!-- Sub Menu Offcanvas Button -->
                            <div class="navbar-subtoggle"> <a id="offcanvas-subtoggle" data-toggle="offcanvas" data-target="#submenu" aria-expanded="false" class="navbar-toggle offcanvas-toggle"> <i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Filter </a> </div>
                            <!-- Sub Menu Offcanvas Button -->
                            <div id="offcanvas-left-overlay"></div>
                            <nav id="submenu" class="navbar-offcanvas-left navbar-offcanvas navbar-offcanvas-submenu" role="navigation">
                                <div class="panel panel-primary">
                                    <h2><i class="fa fa-filter" aria-hidden="true"></i> &nbsp;FILTER</h2>
                                    <div class="panel-heading panel_trigger active"> <a href="#">By Category</a> </div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">
											<ul class="metismenu catmenu checkbox checkbox-primary">
											
												<li>
                                                    <input value= "123456789%2F3" type="checkbox" name="checkbox" id= "resource_checkbox1"  onClick="onCollectionSpecificFilter(this.id)">
                                                    <label for="resource_checkbox1">Public Records (2800694)</label>
                                                </li>
                                            
												<li>
                                                    <input value= "123456789%2F4" type="checkbox" name="checkbox" id= "resource_checkbox2"  onClick="onCollectionSpecificFilter(this.id)">
                                                    <label for="resource_checkbox2">Private Papers (7429)</label>
                                                </li>
                                            
												<li>
                                                    <input value= "123456789%2F5" type="checkbox" name="checkbox" id= "resource_checkbox3"  onClick="onCollectionSpecificFilter(this.id)">
                                                    <label for="resource_checkbox3">Cartographic Records (207)</label>
                                                </li>
                                            
												<li>
                                                    <input value= "123456789%2F6" type="checkbox" name="checkbox" id= "resource_checkbox4"  onClick="onCollectionSpecificFilter(this.id)">
                                                    <label for="resource_checkbox4">Oriental Records (938)</label>
                                                </li>
                                            
												<li>
                                                    <input value= "123456789%2F2763466" type="checkbox" name="checkbox" id= "resource_checkbox5"  onClick="onCollectionSpecificFilter(this.id)">
                                                    <label for="resource_checkbox5">Reference Tools (87)</label>
                                                </li>
                                            
												<li>
                                                    <input value= "123456789%2F2763507" type="checkbox" name="checkbox" id= "resource_checkbox6"  onClick="onCollectionSpecificFilter(this.id)">
                                                    <label for="resource_checkbox6">Library Collection (3945)</label>
                                                </li>
                                            
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="panel-heading panel_trigger active">
                                        <a href="#">By Year</a>
                                    </div>
                                    <div class="container">
                                        <div class="row">
											<div class="spacer1"></div>
                                            <div class="col-xl-6">
                                                From:
                                                <input type="text" name="start_date" id="start_date" value="01-01-5" />
                                            </div>
                                            <div class="col-xl-6">
                                                To:
                                                <input type="text" name="end_date" id="end_date" onchange="specificYearFilter()" value="31-12-2009" />
                                            </div>
                                            <div class="spacer1"></div>
                                            <div class="col-xl-12">
                                                <input type="text" id="txtRange" />
                                            </div>
                                        </div> 
                                    </div>
                                    <script>
									$("#start_date").datepicker({dateFormat: "dd-mm-yy",changeYear: true,yearRange: "5:2009"});
									$("#end_date").datepicker({dateFormat: "dd-mm-yy",changeYear: true,yearRange: "5:2009"});
									var $range = $("#txtRange");
									$range.ionRangeSlider({
										type: "double",
										min: 5,
										max: 2009,
										from: 5,
										to: 2009,
										step: 1,
										prettify_enabled: false,
										force_edges: true,
										onChange: function(data){
											var startDate = $("#start_date").val();
											var endDate = $("#end_date").val();
											
											var startYear = $("#txtRange").data("from");
											var endYear = $("#txtRange").data("to");
											
											if(startDate.length != 4 && endDate.length !=4)
											{
												var x = startDate.split("-")[0] + "-" + startDate.split("-")[1] + "-" + startYear;
												var y = endDate.split("-")[0] + "-" + endDate.split("-")[1] + "-" + endYear;
												
												$("#start_date").val(x);
												$("#end_date").val(y);
											}
										},
										onFinish: function(data){
											specificYearFilter();
										}
									});
									</script>

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
									By Keywords
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

													<li>
														<input class="filter" type="checkbox" name="keywords_1" id="keywords_1"  value="Finance+Department" onclick="onOtherFilterQuery(this.id);">
														<label for="keywords_1">Finance Department (3726)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="keywords_2" id="keywords_2"  value="Simla" onclick="onOtherFilterQuery(this.id);">
														<label for="keywords_2">Simla (2844)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="keywords_3" id="keywords_3"  value="Calcutta" onclick="onOtherFilterQuery(this.id);">
														<label for="keywords_3">Calcutta (1938)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="keywords_4" id="keywords_4"  value="Ministry+of+Finance" onclick="onOtherFilterQuery(this.id);">
														<label for="keywords_4">Ministry of Finance (1924)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="keywords_5" id="keywords_5"  value="P.K.+Malaviya" onclick="onOtherFilterQuery(this.id);">
														<label for="keywords_5">P.K. Malaviya (1832)</label>
							                        </li>
		
												<li class="text-lg-right">
													<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=keywords&amp;facetLimit=13" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
												</li>
			
											</ul>                                           
                                        </div>
                                    </div>                                    

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
									By Type of Document
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

													<li>
														<input class="filter" type="checkbox" name="fileType_1" id="fileType_1"  value="DOD" onclick="onOtherFilterQuery(this.id);">
														<label for="fileType_1">Non Digitized Documents (2685140)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="fileType_2" id="fileType_2"  value="PDF" onclick="onOtherFilterQuery(this.id);">
														<label for="fileType_2">Digitized Documents (126379)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="fileType_3" id="fileType_3"  value="pdf" onclick="onOtherFilterQuery(this.id);">
														<label for="fileType_3">Digitized Documents (756)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="fileType_4" id="fileType_4"  value="Digitized+Public+Records%3B+Foreign+and+Political" onclick="onOtherFilterQuery(this.id);">
														<label for="fileType_4">Digitized Public Records; Foreign and Political (79)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="fileType_5" id="fileType_5"  value="Digitized+Public+Records%3B+Ministry+of+Home+Affairs" onclick="onOtherFilterQuery(this.id);">
														<label for="fileType_5">Digitized Public Records; Ministry of Home Affairs (26)</label>
							                        </li>
		
												<li class="text-lg-right">
													<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=fileType&amp;facetLimit=13" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
												</li>
			
											</ul>                                           
                                        </div>
                                    </div>                                    

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
									By Department & Branch
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

							<li>
								<a href="#" aria-expanded="false">Military (793818) <span class="fa plus-times"></span></a>
								<ul aria-expanded="false">
									
											<li>
											<input class="filter" type="checkbox" name="department_0" id="department_0"  value="Military%3A%3AMilitary" onclick="onOtherFilterQuery(this.id);">
											<label for="department_0">Military (306243)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_1" id="department_1"  value="Military%3A%3AGeneral+Orders+By+The+Commander+In+Chief" onclick="onOtherFilterQuery(this.id);">
											<label for="department_1">General Orders By The Commander In Chief (105119)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_2" id="department_2"  value="Military%3A%3AQuarter+Master+General" onclick="onOtherFilterQuery(this.id);">
											<label for="department_2">Quarter Master General (53329)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_3" id="department_3"  value="Military%3A%3ALetters+To+The+Court+Of+Directors" onclick="onOtherFilterQuery(this.id);">
											<label for="department_3">Letters To The Court Of Directors (36438)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_4" id="department_4"  value="Military%3A%3AEstate" onclick="onOtherFilterQuery(this.id);">
											<label for="department_4">Estate (31870)</label>
											</li>
											
									
									<span class="text-lg-right">
										<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=department&amp;facetLimit=13&amp;openDepartment=Military" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
									</span>
								</ul>
							</li>
							
							<li>
								<a href="#" aria-expanded="false">Home (477583) <span class="fa plus-times"></span></a>
								<ul aria-expanded="false">
									
											<li>
											<input class="filter" type="checkbox" name="department_5" id="department_5"  value="Home%3A%3APublic" onclick="onOtherFilterQuery(this.id);">
											<label for="department_5">Public (287419)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_6" id="department_6"  value="Home%3A%3AJudicial" onclick="onOtherFilterQuery(this.id);">
											<label for="department_6">Judicial (30255)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_7" id="department_7"  value="Home%3A%3APolitical" onclick="onOtherFilterQuery(this.id);">
											<label for="department_7">Political (23166)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_8" id="department_8"  value="Home%3A%3APolice" onclick="onOtherFilterQuery(this.id);">
											<label for="department_8">Police (22573)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_9" id="department_9"  value="Home%3A%3AEstablishment" onclick="onOtherFilterQuery(this.id);">
											<label for="department_9">Establishment (18358)</label>
											</li>
											
									
									<span class="text-lg-right">
										<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=department&amp;facetLimit=13&amp;openDepartment=Home" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
									</span>
								</ul>
							</li>
							
							<li>
								<a href="#" aria-expanded="false">Foreign (221819) <span class="fa plus-times"></span></a>
								<ul aria-expanded="false">
									
											<li>
											<input class="filter" type="checkbox" name="department_10" id="department_10"  value="Foreign%3A%3AInternal" onclick="onOtherFilterQuery(this.id);">
											<label for="department_10">Internal (54491)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_11" id="department_11"  value="Foreign%3A%3AGeneral" onclick="onOtherFilterQuery(this.id);">
											<label for="department_11">General (43519)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_12" id="department_12"  value="Foreign%3A%3APolitical" onclick="onOtherFilterQuery(this.id);">
											<label for="department_12">Political (28954)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_13" id="department_13"  value="Foreign%3A%3ASecret" onclick="onOtherFilterQuery(this.id);">
											<label for="department_13">Secret (27135)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_14" id="department_14"  value="Foreign%3A%3AExternal" onclick="onOtherFilterQuery(this.id);">
											<label for="department_14">External (21723)</label>
											</li>
											
									
									<span class="text-lg-right">
										<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=department&amp;facetLimit=13&amp;openDepartment=Foreign" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
									</span>
								</ul>
							</li>
							
							<li>
								<a href="#" aria-expanded="false">Dgims (108307) <span class="fa plus-times"></span></a>
								<ul aria-expanded="false">
									
											<li>
											<input class="filter" type="checkbox" name="department_15" id="department_15"  value="Dgims%3A%3AStores" onclick="onOtherFilterQuery(this.id);">
											<label for="department_15">Stores (22351)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_16" id="department_16"  value="Dgims%3A%3AI.M.D." onclick="onOtherFilterQuery(this.id);">
											<label for="department_16">I.M.D. (13127)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_17" id="department_17"  value="Dgims%3A%3AI.M.S." onclick="onOtherFilterQuery(this.id);">
											<label for="department_17">I.M.S. (11988)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_18" id="department_18"  value="Dgims%3A%3APublic+Health+%28Sanitary%29" onclick="onOtherFilterQuery(this.id);">
											<label for="department_18">Public Health (Sanitary) (10328)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_19" id="department_19"  value="Dgims%3A%3AMedical+Section" onclick="onOtherFilterQuery(this.id);">
											<label for="department_19">Medical Section (6837)</label>
											</li>
											
									
									<span class="text-lg-right">
										<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=department&amp;facetLimit=13&amp;openDepartment=Dgims" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
									</span>
								</ul>
							</li>
							
							<li>
								<a href="#" aria-expanded="false">Foreign & Political (92975) <span class="fa plus-times"></span></a>
								<ul aria-expanded="false">
									
											<li>
											<input class="filter" type="checkbox" name="department_20" id="department_20"  value="Foreign+%26+Political%3A%3AInternal" onclick="onOtherFilterQuery(this.id);">
											<label for="department_20">Internal (18701)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_21" id="department_21"  value="Foreign+%26+Political%3A%3AEstablishment" onclick="onOtherFilterQuery(this.id);">
											<label for="department_21">Establishment (14447)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_22" id="department_22"  value="Foreign+%26+Political%3A%3AGeneral" onclick="onOtherFilterQuery(this.id);">
											<label for="department_22">General (12941)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_23" id="department_23"  value="Foreign+%26+Political%3A%3AFrontier" onclick="onOtherFilterQuery(this.id);">
											<label for="department_23">Frontier (10999)</label>
											</li>
											
											<li>
											<input class="filter" type="checkbox" name="department_24" id="department_24"  value="Foreign+%26+Political%3A%3AExternal" onclick="onOtherFilterQuery(this.id);">
											<label for="department_24">External (7929)</label>
											</li>
											
									
									<span class="text-lg-right">
										<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=department&amp;facetLimit=13&amp;openDepartment=Foreign+%26+Political" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
									</span>
								</ul>
							</li>
							
												<li class="text-lg-right">
													<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=department&amp;facetLimit=13" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
												</li>
			
											</ul>                                           
                                        </div>
                                    </div>                                    

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
									By Place
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

													<li>
														<input class="filter" type="checkbox" name="place_1" id="place_1"  value="Allahabad" onclick="onOtherFilterQuery(this.id);">
														<label for="place_1">Allahabad (482)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="place_2" id="place_2"  value="Bharat" onclick="onOtherFilterQuery(this.id);">
														<label for="place_2">Bharat (203)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="place_3" id="place_3"  value="New+Delhi" onclick="onOtherFilterQuery(this.id);">
														<label for="place_3">New Delhi (180)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="place_4" id="place_4"  value="Lucknow" onclick="onOtherFilterQuery(this.id);">
														<label for="place_4">Lucknow (133)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="place_5" id="place_5"  value="Delhi" onclick="onOtherFilterQuery(this.id);">
														<label for="place_5">Delhi (127)</label>
							                        </li>
		
												<li class="text-lg-right">
													<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=place&amp;facetLimit=13" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
												</li>
			
											</ul>                                           
                                        </div>
                                    </div>                                    

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
									By Digitized Collection
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

													<li>
														<input class="filter" type="checkbox" name="subjectCollection_1" id="subjectCollection_1"  value="Digitized+Public+Records" onclick="onOtherFilterQuery(this.id);">
														<label for="subjectCollection_1">Digitized Public Records (110856)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="subjectCollection_2" id="subjectCollection_2"  value="Home+Political" onclick="onOtherFilterQuery(this.id);">
														<label for="subjectCollection_2">Home Political (20835)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="subjectCollection_3" id="subjectCollection_3"  value="Ministry+of+Home+Affairs" onclick="onOtherFilterQuery(this.id);">
														<label for="subjectCollection_3">Ministry of Home Affairs (12263)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="subjectCollection_4" id="subjectCollection_4"  value="%27Mutiny%27+Papers" onclick="onOtherFilterQuery(this.id);">
														<label for="subjectCollection_4">'Mutiny' Papers (10266)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="subjectCollection_5" id="subjectCollection_5"  value="Foreign+and+Political" onclick="onOtherFilterQuery(this.id);">
														<label for="subjectCollection_5">Foreign and Political (8611)</label>
							                        </li>
		
												<li class="text-lg-right">
													<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=subjectCollection&amp;facetLimit=13" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
												</li>
			
											</ul>                                           
                                        </div>
                                    </div>                                    

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
                                    Held By
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

					<li>
						<input class="filter" type="checkbox" name="organization_1" id="organization_1"  value="National+Archives+of+India" onclick="onOtherFilterQuery(this.id);">
						<label for="organization_1">National Archives of India (2810920)</label>
					</li>
					
					<li>
						<a href="#" aria-expanded="false">Other Archives (2144) <span class="fa plus-times"></span></a>
						<ul aria-expanded="false">
				
						<li>
							<input class="filter" type="checkbox" name="organization_2" id="organization_2"  value="NAI+Library+-+New+Delhi" onclick="onOtherFilterQuery(this.id);">
							<label for="organization_2">NAI Library - New Delhi (1356)</label>
						</li>
						
						<li>
							<input class="filter" type="checkbox" name="organization_3" id="organization_3"  value="Repository-3" onclick="onOtherFilterQuery(this.id);">
							<label for="organization_3">Repository-3 (740)</label>
						</li>
						
						<li>
							<input class="filter" type="checkbox" name="organization_4" id="organization_4"  value="Repository-4" onclick="onOtherFilterQuery(this.id);">
							<label for="organization_4">Repository-4 (45)</label>
						</li>
						
						<li>
							<input class="filter" type="checkbox" name="organization_5" id="organization_5"  value="Repository-2" onclick="onOtherFilterQuery(this.id);">
							<label for="organization_5">Repository-2 (3)</label>
						</li>
						
						</ul>
					</li>
				
											</ul>                                           
                                        </div>
                                    </div>                                    

									<div class="clearfix"></div>
									<div class="panel-heading panel_trigger active"><a href="#">
									
									Record Contains
									
									</a></div>
                                    <div class="panel-body panel_content">
                                        <div class="cat-menu">

                                            <ul class="metismenu catmenu checkbox checkbox-primary">

													<li>
														<input class="filter" type="checkbox" name="recordType_1" id="recordType_1"  value="Letters" onclick="onOtherFilterQuery(this.id);">
														<label for="recordType_1">Letters (1083)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="recordType_2" id="recordType_2"  value="National+Archives+of+India" onclick="onOtherFilterQuery(this.id);">
														<label for="recordType_2">National Archives of India (788)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="recordType_3" id="recordType_3"  value="Newspaper+Articles" onclick="onOtherFilterQuery(this.id);">
														<label for="recordType_3">Newspaper Articles (173)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="recordType_4" id="recordType_4"  value="English" onclick="onOtherFilterQuery(this.id);">
														<label for="recordType_4">English (158)</label>
							                        </li>
		
													<li>
														<input class="filter" type="checkbox" name="recordType_5" id="recordType_5"  value="Letters+%26+Proceedings" onclick="onOtherFilterQuery(this.id);">
														<label for="recordType_5">Letters & Proceedings (133)</label>
							                        </li>
		
												<li class="text-lg-right">
													<b><a href="/jspui/simple-search?location=123456789/1&amp;query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;moreFacet=morefacet&amp;facetType=recordType&amp;facetLimit=13" class="filter1 fancybox.iframe" style="color: #634a35;">More »</a></b>
												</li>
			
											</ul>                                           
                                        </div>
                                    </div>                                    
      
                                </div>
                            </nav>
                            <!-- Sub Menu Offcanvas Panel -->
                        </div>
                        <script>
                            $(document).ready(function () {
                                $('#tabs li a:not(:first)').addClass('inactive');
                                $('.container1').hide();
                                $('.container1:first').show();

                                $('#tabs li a').click(function () {
                                    var t = $(this).attr('id');
                                    if ($(this).hasClass('inactive')) { //this is the start of our condition
                                        $('#tabs li a').addClass('inactive');
                                        $(this).removeClass('inactive');

                                        $('.container1').hide();
                                        $('#' + t + 'C').show();
                                    }
                                });
                            });
                        </script>
                        <div class="col-xl-9 col-lg-9">
                            <div class="row">
								<div class="container">
									
									<div class="search-results">
										
									
									
										
											<div class="col-lg-12">
											<h4>2813300 Items found in 0.05 seconds</h4>
										</div>
									</div>
								</div>
                                <div class="container wow fadeInDown" style="visibility: visible;">
                                    <div class="col-lg-4 col-sm-12 col-xs-12">
                                        <div class="row">
                                            <ul class="breadcrumb">
                                                <li class="breadcrumb-item"><i class="fa fa-home" aria-hidden="true"></i></li>
                                                <li class="breadcrumb-item">Results</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-7 col-md-12 text-xl-right text-lg-right marg-b-xs">
                                        <div class="row">
                                            <div class="sorting">
                                           
                                                <ul class="bkmrk">
                                               
                                                    
                                                      <li class="sort">
                                                       <!-- <a href="#">
                                                            <i class="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
                                                        </a>-->
                                                         <select id="selectSortBy" onChange="onChangeSortBy(this.id)">
															<option value="score" >Relevance</option>
															<option value="dc.date.issued_dt-asc" >Record Date (Asc)</option>
															<option value="dc.date.issued_dt-desc" >Record Date (Desc)</option>
															<option value="dc.date.accessioned_dt-asc" >Date Uploaded (Asc)</option>
															<option value="dc.date.accessioned_dt-desc" selected='selected'>Date Uploaded (Desc)</option>
                                                        </select>
                                                    </li>
                                                    <li class="page">
														<select id="selectRPP" onchange="onChangeRPP(this.id)">
															<option value="20" selected='selected'>20 per page</option>
															<option value="50" >50 per page</option>
															<option value="100" >100 per page</option>
														</select>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="sorting">
                                                <ul id="tabs">
                                                    <li><a id="tab1"><img src="/jspui/images/icon-burger.png" alt="" title="" class="img-fluid" /></a></li>
                                                    <li><a id="tab2"><img src="/jspui/images/icon-colview.png" alt="" title="" class="img-fluid" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="spacer2"></div>
                                <div class="container wow fadeInUp">
                                    <h1> Results</h1>
                                    <div class="underline-blk"><i class="fa fa-angle-double-down" aria-hidden="true"></i></div>
                                </div>
                                <!-- List View -->
                                <div class="container container1" id="tab1C">
                                    <ul class="booklist-view">

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815761?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815761/606999/PR_000004064390_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815761?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">A.C. Todd; Calcutta; Political Department</a></li>

                                                        <li><b>Department:</b> Political</li>

														<li><b>Branch:</b> 1915</li>

                                                        <li><b>Year:</b> 1915</li>

														<li><b>Place :</b> Vol/60</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>102 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815760?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815760/606997/PR_000004064383_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815760?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Indian State Forces; Kapurthala Darbar; Army Department; Bombay</a></li>

                                                        <li><b>Department:</b> General</li>

														<li><b>Branch:</b> 1924</li>

                                                        <li><b>Year:</b> 1924</li>

														<li><b>Place :</b> Vol/17</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>28 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815759?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815759/606995/PR_000004064377_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815759?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Indian Penal Code; St Andrew's Church; Indian Tea Association</a></li>

                                                        <li><b>Department:</b> Political</li>

														<li><b>Branch:</b> 1908</li>

                                                        <li><b>Year:</b> 1908</li>

														<li><b>Place :</b> Vol/17</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>12 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815758?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815758/606993/PR_000004064375_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815758?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Mr. S.H. Butler; Lahore Medical Service; Campbell Medical School and Hospital</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1911</li>

                                                        <li><b>Year:</b> 1911</li>

														<li><b>Place :</b> Vol/76</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>3 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815757?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815757/606991/PR_000004064374_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815757?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Central Indigenous Drugs Committee; Major A.V. Anderson; Indian Medical Service;</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1899</li>

                                                        <li><b>Year:</b> 1899</li>

														<li><b>Place :</b> Vol/36</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>2 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815756?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815756/606989/PR_000004064373_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815756?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Indian Medical Service; Port Blair; Army Regulations</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1917</li>

                                                        <li><b>Year:</b> 1917</li>

														<li><b>Place :</b> Vol/99</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>4 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815755?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815755/606987/PR_000004064372_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815755?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Civil Assistant Surgeons; W. Booth-Gravely; Finance Department; Madras</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1916</li>

                                                        <li><b>Year:</b> 1916</li>

														<li><b>Place :</b> Vol/97</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>2 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815754?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815754/606985/PR_000004064125_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815754?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Sirohi Darbar; Maharaja Jey Singh; Public Works Department</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1868</li>

                                                        <li><b>Year:</b> 1868</li>

														<li><b>Place :</b> AJ/VII (5)</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>11 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815753?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815753/606983/PR_000004064331_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815753?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Nagpur; Major F.J. Drury; Jail Department</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1905</li>

                                                        <li><b>Year:</b> 1905</li>

														<li><b>Place :</b> Vol/51</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>6 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815752?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815752/606981/PR_000004064330_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815752?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Bombay; Surgeon F.C. Reeves; Cama Hospital; Civil Department</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1888</li>

                                                        <li><b>Year:</b> 1888</li>

														<li><b>Place :</b> Vol/22</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>3 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815751?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815751/606979/PR_000004064329_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815751?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Provincial Civil Service; F.W. Duke; Army Department</a></li>

                                                        <li><b>Department:</b> Establishment</li>

														<li><b>Branch:</b> 1914</li>

                                                        <li><b>Year:</b> 1914</li>

														<li><b>Place :</b> Vol/74</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>6 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815750?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815750/606977/PR_000004064328_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815750?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Finance Department; Bombay; Mohd Ahmed</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1927</li>

                                                        <li><b>Year:</b> 1928</li>

														<li><b>Place :</b> Vol/4</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>6 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815749?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815749/606975/PR_000004064327_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815749?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Rangoon; Mr. Pitt Kennedy; Audit Committees</a></li>

                                                        <li><b>Department:</b> Legislative</li>

														<li><b>Branch:</b> 1865</li>

                                                        <li><b>Year:</b> 1865</li>

														<li><b>Place :</b> Vol/8</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>3 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815748?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815748/606973/PR_000004064326_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815748?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Bombay Civil Courts Act; Indian Civil Service; Legislative Department</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1912</li>

                                                        <li><b>Year:</b> 1912</li>

														<li><b>Place :</b> Vol/208</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>3 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815747?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815747/606971/PR_000004064325_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815747?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Saharanpur; Bhagat Ram; Criminal Procedure Code</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1911</li>

                                                        <li><b>Year:</b> 1911</li>

														<li><b>Place :</b> Vol/204</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>5 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815746?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815746/606969/PR_000004064208_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815746?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Finance Department; Madras; D.N. Chakaravarti</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1926</li>

                                                        <li><b>Year:</b> 1926</li>

														<li><b>Place :</b> Vol/3</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>6 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815745?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815745/606967/PR_000004064206_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815745?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Madras; Mr. C.B. Sen; Law Department</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1911</li>

                                                        <li><b>Year:</b> 1911</li>

														<li><b>Place :</b> Vol/201</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>3 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815744?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815744/606965/PR_000004064193_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815744?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Abdul Rahman Dani; Ajmer; Political Department</a></li>

                                                        <li><b>Year:</b> 1856</li>

														<li><b>Place :</b> 8/1856</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>10 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815743?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815743/606963/PR_000004063961_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815743?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Fort St. George; Marriage Dissolution Act; Sir G.E.W. Couper</a></li>

                                                        <li><b>Department:</b> Legislative</li>

														<li><b>Branch:</b> 1868</li>

                                                        <li><b>Year:</b> 1868</li>

														<li><b>Place :</b> Vol/14</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>6 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="wow fadeInUp">
                                            <div class="row">
                                                <div class="pic">
                                                    <a href="/jspui/handle/123456789/2815742?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
														<img src="/jspui/bitstream/123456789/2815742/606962/OR_000001001209_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                    </a>
                                                </div>
												<div class="detail">
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815742?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Crisis of Crisis</a></li>

                                                        <li><b>Year:</b> 1972</li>

														<li><b>Digitized Collection :</b> Oriental Records</li>

														<li><b>Held by :</b> National Archives of India</li>

                                                    </ul>
                                                    <ul class="iconlist-view">

                                                        <li>30 Views</li>

                                                       </ul>
                                                </div>
                                            </div>
                                        </li>

									</ul>
                                </div>
                                <!-- List View -->
                                <!-- Grid View -->
                                <div class="container container1" id="tab2C">
                                    <ul class="booklist">

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>102 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815761?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815761/606999/PR_000004064390_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815761?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">A.C. Todd; Calcutta; Political Department</a></li>

                                                        <li><b>Department:</b> Political</li>

														<li><b>Branch:</b> 1915</li>

                                                        <li><b>Year:</b> 1915</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>28 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815760?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815760/606997/PR_000004064383_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815760?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Indian State Forces; Kapurthala Darbar; Army Depar...</a></li>

                                                        <li><b>Department:</b> General</li>

														<li><b>Branch:</b> 1924</li>

                                                        <li><b>Year:</b> 1924</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>12 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815759?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815759/606995/PR_000004064377_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815759?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Indian Penal Code; St Andrew's Church; Indian Tea ...</a></li>

                                                        <li><b>Department:</b> Political</li>

														<li><b>Branch:</b> 1908</li>

                                                        <li><b>Year:</b> 1908</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>3 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815758?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815758/606993/PR_000004064375_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815758?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Mr. S.H. Butler; Lahore Medical Service; Campbell ...</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1911</li>

                                                        <li><b>Year:</b> 1911</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>2 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815757?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815757/606991/PR_000004064374_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815757?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Central Indigenous Drugs Committee; Major A.V. And...</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1899</li>

                                                        <li><b>Year:</b> 1899</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>4 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815756?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815756/606989/PR_000004064373_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815756?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Indian Medical Service; Port Blair; Army Regulatio...</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1917</li>

                                                        <li><b>Year:</b> 1917</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>2 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815755?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815755/606987/PR_000004064372_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815755?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Civil Assistant Surgeons; W. Booth-Gravely; Financ...</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1916</li>

                                                        <li><b>Year:</b> 1916</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>11 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815754?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815754/606985/PR_000004064125_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815754?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Sirohi Darbar; Maharaja Jey Singh; Public Works De...</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1868</li>

                                                        <li><b>Year:</b> 1868</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>6 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815753?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815753/606983/PR_000004064331_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815753?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Nagpur; Major F.J. Drury; Jail Department</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1905</li>

                                                        <li><b>Year:</b> 1905</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>3 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815752?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815752/606981/PR_000004064330_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815752?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Bombay; Surgeon F.C. Reeves; Cama Hospital; Civil ...</a></li>

                                                        <li><b>Department:</b> Medical</li>

														<li><b>Branch:</b> 1888</li>

                                                        <li><b>Year:</b> 1888</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>6 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815751?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815751/606979/PR_000004064329_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815751?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Provincial Civil Service; F.W. Duke; Army Departme...</a></li>

                                                        <li><b>Department:</b> Establishment</li>

														<li><b>Branch:</b> 1914</li>

                                                        <li><b>Year:</b> 1914</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>6 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815750?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815750/606977/PR_000004064328_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815750?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Finance Department; Bombay; Mohd Ahmed</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1927</li>

                                                        <li><b>Year:</b> 1928</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>3 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815749?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815749/606975/PR_000004064327_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815749?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Rangoon; Mr. Pitt Kennedy; Audit Committees</a></li>

                                                        <li><b>Department:</b> Legislative</li>

														<li><b>Branch:</b> 1865</li>

                                                        <li><b>Year:</b> 1865</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>3 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815748?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815748/606973/PR_000004064326_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815748?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Bombay Civil Courts Act; Indian Civil Service; Leg...</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1912</li>

                                                        <li><b>Year:</b> 1912</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>5 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815747?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815747/606971/PR_000004064325_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815747?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Saharanpur; Bhagat Ram; Criminal Procedure Code</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1911</li>

                                                        <li><b>Year:</b> 1911</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>6 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815746?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815746/606969/PR_000004064208_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815746?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Finance Department; Madras; D.N. Chakaravarti</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1926</li>

                                                        <li><b>Year:</b> 1926</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>3 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815745?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815745/606967/PR_000004064206_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815745?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Madras; Mr. C.B. Sen; Law Department</a></li>

                                                        <li><b>Department:</b> Judicial</li>

														<li><b>Branch:</b> 1911</li>

                                                        <li><b>Year:</b> 1911</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>10 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815744?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815744/606965/PR_000004064193_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815744?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Abdul Rahman Dani; Ajmer; Political Department</a></li>

                                                        <li><b>Year:</b> 1856</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>6 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815743?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815743/606963/PR_000004063961_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815743?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Fort St. George; Marriage Dissolution Act; Sir G.E...</a></li>

                                                        <li><b>Department:</b> Legislative</li>

														<li><b>Branch:</b> 1868</li>

                                                        <li><b>Year:</b> 1868</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                        <li>
                                            <figure class="wow fadeInUp">
                                                <ul class="iconlist">


                                                        <li>30 Views</li>
                                           </ul>
                                                <a href="/jspui/handle/123456789/2815742?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">
													<img src="/jspui/bitstream/123456789/2815742/606962/OR_000001001209_TIT_01.jpg" alt="" title="" class="img-fluid" />
                                                </a>
                                                <figcaption>
                                                    <ul>
                                                        <li class="hd"><a href="/jspui/handle/123456789/2815742?searchWord=&backquery=[location=123456789%2F1&query=&rpp=20&sort_by=dc.date.accessioned_dt&order=desc]">Crisis of Crisis</a></li>

                                                        <li><b>Year:</b> 1972</li>

                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </li>

                                    </ul>
                                </div>
                                <!-- Grid View -->
                                <!-- Call Out -->
                                <div id="bookmark" style="display:none;">
                                    <div class="input-group">
                                        <input name="bookmarkname_new" id="bookmarkname_new" type="text" class="addfolder" placeholder="Bookmark Name">
                                        <input type="submit" value="Add" class="addfolder" onclick="onAddBookmark()">
                                    </div>
                                </div>
                                <!-- Call Out -->
                                <div class="spacer1"></div>

                                <!-- Pagging -->
                                <div class="container text-xs-center">
									<div class="pull-md-left">
                                    <nav>
                                        <ul class="pagination">

											<li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>

			<li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>

			<li class="page-item"><a class="page-link" href="/jspui/handle/123456789/1/simple-search?query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;start=20">2</a></li>

			<li class="page-item"><a class="page-link" href="/jspui/handle/123456789/1/simple-search?query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;start=40">3</a></li>

			<li class="page-item"><a class="page-link" href="/jspui/handle/123456789/1/simple-search?query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;start=60">4</a></li>

                                            <li class="page-item">
                                                <a class="page-link" href="/jspui/handle/123456789/1/simple-search?query=&amp;originalquery=&amp;sort_by=dc.date.accessioned_dt&amp;order=desc&amp;rpp=20&amp;etal=0&amp;start=20" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>

                                        </ul>
                                    </nav>
									</div>
                                </div>
                                <!-- Pagging -->


                            </div>
                            <div class="spacer1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="push"></div>
    </div>
    <!--::: FOOTER :::-->
    <div class="footer">
	<div class="container ftr-container">
		<div class="row">
			<div class="col-xl-6 col-md-6 col-sm-8">
				<ul class="ftrlist">
					<li><a href="/jspui/">Home</a></li>
					<li><a href="/jspui/about-us/">About us</a></li>
					<li><a href="/jspui/contact-us/">Contact us</a></li>
					<li><a href="/jspui/privacy-and-copyright-policy/">Privacy and Copyright Policy</a></li>
				</ul>
				<ul class="ftrlist">
					<li><a href="/jspui/terms-and-conditions/">Terms and Conditions</a></li>
					<li><a href="/jspui/disclaimer/">Disclaimer</a></li>
					<li><a href="/jspui/site-map/">Sitemap</a></li>
					<li><a href="/jspui/refund-policy/">Cancellation, Return & Refund Policy</a></li>
				</ul>
			</div>
			<div class="col-xl-3 col-md-3 text-xl-left text-md-left text-xs-center hidden-md-down">
				<b>NATIONAL ARCHIVES OF INDIA</b><br />
				National Archives Building, <br />
				Janpath, New Delhi 110001. INDIA<br />
				<b>T: </b>011- 23384797<br /><b>E:</b> archives[at]nic[dot]in
			</div>
			<div class="col-xl-3 col-md-3 col-sm-4 text-xl-left text-md-left text-xs-center">
				<img src="/jspui/images/logo-kontent.png" alt="" title="" class="img-fluid logo-kontent" /><br />
				&#169; National Archives of India. All Rights Reserved.
			</div>
		</div>
		<div class="col-xl-4 col-md-4 col-xs-12 text-xl-right">
		</div>
	</div>
</div>
<a href="#" class="scrollup" title="Scroll Back to Top"><i class="fa fa-chevron-up"></i><br /> TOP </a>
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-60676735-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-60676735-1');
</script>
    <!--::: FOOTER :::-->
    <script src="/jspui/js/jquery.webui-popover.min.js"></script>
    <script>
        (function () {
            var settings = {
                trigger: 'click',
                placement: function (el) { return el.data('placement') },
                title: '',
                width: 300,
                multi: false,
                style: '',
                padding: true
            };

            function initPopover() {
                var largeContent = $('#addfolder').html(),
                    largeSettings = {
                        width: 350,
                        content: largeContent,
                        closeable: true,
                        title: 'Add to a Folder',
                    };
                $('a.add-folder').webuiPopover('destroy').webuiPopover($.extend({}, settings, largeSettings));

                var largeContent = $('#bookmark').html(),
                largeSettings = {
                    content: largeContent,
                    closeable: true,
                    title: 'Add Bookmark',
                };
            
            	var element = document.getElementById("bookmark");
            	element.parentNode.removeChild(element);
            
            	$('a.bookmark').webuiPopover('destroy').webuiPopover($.extend({}, settings, largeSettings));
                
                var incrementVar = 1;
				$('a.bookmark-edit').each(function(){
					var curElementId = $(this).attr('id');
					var values = curElementId.split("_");
					var bookMarkName = values[1];
					var largeContent = '<div class="input-group">' +
				    '<input name="bookmarkname" id="bookmarkname_' + incrementVar + '" type="text" class="addfolder" value="' + bookMarkName + '">' +
				    '<input type="submit" value="RENAME" id="submit_' + incrementVar + '" class="addfolder" onclick="onRenameBookmarkName(this.id)">' +
					'</div>';
				    var largeSettings = {
				        content: largeContent,
				        closeable: true,
				        title: 'Edit Bookmark',
				    };
				    
				    incrementVar++;
					
					$(this).webuiPopover('destroy').webuiPopover($.extend({}, settings, largeSettings));
				});
            }
            initPopover();
        })();
    </script>
    <!-- Common J-Query -->
    <script src="/jspui/js/main.min.js" type="text/javascript"></script>
    <!-- Common J-Query -->
</body>
</html>