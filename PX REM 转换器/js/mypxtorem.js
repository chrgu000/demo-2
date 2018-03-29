(function($){
	$(function(){
		function pxRem(){
			var rootEle=$("#rootele").val();
			var pxEle=$("#pxele").val();
			var remEle=$("#remele").val();
			var pxToRemVal=pxEle/rootEle;
			var remToPxVal=remEle*rootEle;
			$("#pxtorem").html(pxToRemVal+"rem");
			$("#remtopx").html(remToPxVal+"px");
		};
		$("#pxrembox").find("input[type='text']").bind("keyup",function(){
			pxRem();
		});
		pxRem();
	});
})(jQuery)