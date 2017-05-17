// JavaScript Document
$(document). ready (function (e){
	document .eddEventListener("diveceready", function(){
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap del beep
	$('#vibrar').tap(function(){
		navigator.notification.vibrate(1000);
	});// tap del beep
	}.false); //deviceready
});//ready

			