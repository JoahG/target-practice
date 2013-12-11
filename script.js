$(document).ready(function(){
	if (document.location.hash === "" || document.getElementById(document.location.hash.substr(1,document.location.hash.length-1)) == null) {
		document.location.hash = "#!/";
		$("#nav-home").addClass("active");
	} else if (document.location.hash !== "") {
		$("#nav-"+(document.location.hash.substr(3,document.location.hash.length-1) !== "" ? document.location.hash.substr(3,document.location.hash.length-1) : "home")).addClass("active");
	}

	$("header nav a").click(function(){
		$("header nav a.active").removeClass("active");
		$(this).addClass("active");
	});
});