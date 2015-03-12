var $overlay_wrapper;
var $overlay_panel;
var navigate = false;
function show_overlay() {
    if ( !$overlay_wrapper ) append_overlay();
    $overlay_wrapper.fadeIn(700);
    
    
}
function show_overlay_article() {
    if ( !$overlay_wrapper ) append_overlay();
    $overlay_wrapper_article.fadeIn(700);
    
    
}
function hide_overlay() {
    if(!navigate){
    $overlay_wrapper.fadeOut(500);    
    if(player!=null){
        player.stopVideo();
    }
    }else {
        navigate = false;
    }
}
function hide_overlay_article() {
    if(!navigate){
    $overlay_wrapper_article.fadeOut(500);        
   }else {
        navigate = false;
    }
}
function attach_overlay_events() {
    $('A.hide-overlay', $overlay_wrapper).click( function(ev) {
        ev.preventDefault();
        hide_overlay();
    });
    $('A.hide-overlay-article', $overlay_wrapper_article).click( function(ev) {
        ev.preventDefault();
        hide_overlay_article();
    });
    $('A.next-item', $overlay_wrapper).click( function(ev) {
        ev.preventDefault();
        navigate = true;
        nextItem();
    });
    $('A.prev-item', $overlay_wrapper).click( function(ev) {
        ev.preventDefault();
        navigate = true;        
        prevItem();
    });
    $('A.next-item', $overlay_wrapper_article).click( function(ev) {
        ev.preventDefault();
        navigate = true;
        nextItem();
    });
    $('A.prev-item', $overlay_wrapper_article).click( function(ev) {
        ev.preventDefault();
        navigate = true;
        prevItem();
    });
//        $(":not(#player):not(#articleplayer):not(#nextitem):not(#previtem)").click(function(){
//            if(player!=null){
//                if(
//                    player.getPlayerState() == 1 || player.getPlayerState() == 2                   
//                   || player.getPlayerState() == 5 || player.getPlayerState() == 3
//                   || player.getPlayerState() == -1
//                  ){
//                    hide_overlay();
//                
//                }
//            }   
//
//});
    
}

function append_overlay() {
    $overlay_wrapper = $('<div id="overlay" onclick="hide_overlay()"></div>').appendTo( $('BODY') );
    $overlay_panel = $('<div id="overlay-panel" ></div>').appendTo( $overlay_wrapper );
    
    $overlay_panel.html( ' <div id="player"></div><ul id="navigation"><li class="left"><a href="#" class="prev-item">Prev</a></li><li class="right"><a href="#" class="next-item">Next</a></li></ul> <a href="#" class="hide-overlay">Close Overlay</a>' );
    
    $overlay_wrapper_article = $('<div id="overlay-article" onclick="hide_overlay_article()"></div>').appendTo( $('BODY') );
    $overlay_panel_article = $('<div id="overlay-panel-article" ></div>').appendTo( $overlay_wrapper_article );
    
    $overlay_panel_article.html( ' <div id="articleplayer"><iframe id="iframearticle"></iframe></div><ul id="navigation"><li class="left"><a href="#" class="prev-item">Prev</a></li><li class="right"><a href="#" class="next-item">Next</a></li></ul> <a href="#" class="hide-overlay-article">Close Overlay</a>' );
    
    attach_overlay_events();
}
var sectiontitle = "A little fluff ball artist";
function initRow(){
     $row_container = $(' <div class="container"></div>').appendTo( $('BODY') );
     $title_row_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
       $title_div = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                     '</div>').appendTo($title_row_div);
   $title_div.html( '<br><div class="home-bg"></div><div class="list-title">' + 'Teeny' +
                       ' | '+sectiontitle+'</div><br>' );
    $control_div= $('<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1" style = "float: right; align: right; margin-left:auto; margin-right:0;">'+
                       '<br><div id="divNoImage" class="dd-container" style = "width:60px; margin-left:auto; margin-right:0;"></div><br></div>').appendTo($title_row_div);
//        $controls_div = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
//                       '<br><div class="row" width="20%">'+
//                '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"><a href="javascript:clickToon();" class="buttontext"><div class="buttonback" >Toon</div></a></div>'+
//                       '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"><a href="javascript:clickStart();" class="buttontext"><div class="buttonback" >Start</div></a></div>'
//                   <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">'+
////                       '</div>    
//                       +'</div><br></div>').appendTo($title_row_div);
    $row_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
    $row_add = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="over18-text">Over 18?<br><br><a href="javascript:pageReadyGo()"><i class="fa fa-check-square-o"></i></a></div></div>').appendTo( $row_div);
}
var coinscript='<span class="coindiv"><span>'+    
    '<script src="js/coin.js"></script>'+

    '<script>'+
'CoinWidgetCom.go({'+
	'wallet_address: "15nduG3JLq1FCTNm2R2z1nnnVjXSs4dHvT"'+
	', currency: "bitcoin"'+
	', counter: "count"'+
	', alignment: "bc"'+
	', qrcode: true'+
	', auto_show: false'+
	', lbl_button: "DJ Donate"'+
	', lbl_address: "DJ Diddle\'s Bitcoin"'+
	', lbl_count: "donations"'+
	', lbl_amount: "BTC"'+
'});'+
'</script></span></span>';
var aboutlink = '<div class="about-link"><a href="commissions.html">Commissions</a></div>';
var urltype = 0;
function scrollToDiv(){
    if(docCookies.hasItem('divid') ){
       if(document.getElementById(docCookies.getItem('divid'))){
                document.getElementById(docCookies.getItem('divid')).scrollIntoView();
                //docCookies.removeItem('divid');
    }
    }else{
        
    }
}
function setDivId(divid){
    docCookies.setItem('divid',divid);
}
function pageReadyGo(){
     _adding = false;
    $more_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
    $more_add = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>').appendTo( $more_div);
    $more_add.html('<center>' + aboutlink +'</center>');
    $coin_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
    $coin_add = $('<center ></center>').appendTo( $coin_div);
    $(".coinwidg").appendTo($coin_add);
//     $donate_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
//    $donate_div.html(coinscript);
    activateOrderSelect();
    docCookies.setItem('is18', true, Infinity);
       if(docCookies.hasItem('urltype')){
            urltype = parseInt( docCookies.getItem('urltype'));
             $('#divNoImage').ddslick('select', {index: urltype });

        }
        
    getContent();
    loaded = true;
    $('A.show-overlay').click( function(ev) {
        ev.preventDefault();
        show_overlay();
    });
    $('A.show-overlay-article').click( function(ev) {
        ev.preventDefault();
        show_overlay_article();
    });
}
$(function() {
    initRow();
    //if(docCookies.hasItem('is18')){
    //    if(docCookies.getItem('is18')){
            pageReadyGo();
    //    }
    //}
     
});
    function loadArticle(article_url){
        currentitem = article_url;
        document.getElementById("iframearticle").src= article_url;   
        //"http://www.readability.com/m?url=" +
    }
    var user = "nexusa";
    var app_id = "CE2BAC9E";
    var namespace = "urn:x-cast:com.example.chromecasttest";
    var playlist = "";
    var playerloaded = false;
    var title = "";
    var currentitem ="";
    function log(str)
    {
        console.log(str);

    }



    function onError()
    {
        log("onError");
    }

    var loaded = false;
    function onLoad()
	{
        
        log("document loaded");

	}

    function setPlaylist(_playlist){
        var jsonplaylist = JSON.parse(_playlist);
        var jsonArray = jsonplaylist.objects;
       
        var maintitle = jsonplaylist.maintitle;
        var buckettitle = jsonplaylist.buckettitle;

        $row_container = $(' <div class="container"></div>').appendTo( $('BODY') );
        $row_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
        $title_div = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                       '<br><div class="list-title">' + maintitle +
                       ' | '+buckettitle+'</div><br></div>').appendTo($row_div);
        var _playlistarray = [];
        for(var i = 0; i<jsonArray.length; i++){
               var pageObj = jsonArray[i];
                var pagehtml = '';
                if(pageObj.type == 3){
                    pagehtml = getArticleDiv(pageObj);
                }else if(pageObj.type == 6){
                    pagehtml = getVideoDiv(pageObj);
                }
                _playlistarray.push(pageObj.onclick);
                $(pagehtml).appendTo($row_div);
        }
        playlist = _playlistarray;
    }
   
    function getVideoDiv(pageObj){
           var videodiv = "<div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-4\">" +
							"<br>" +
							"<a href=\"#\" class=\"show-overlay\" onclick=\"playVideo('"
                            + pageObj.onclick + "');\">"+
							"<div class=\"with-bg-size\" style=\"background-image:url('http://img.youtube.com/vi/"+ pageObj.onclick+ "/0.jpg')\">" +

							
							"<div class=\"with-bg-size\" style=\"background-image:url('images/gradoverlay.png')\">" +
							"<div class=vid-info-title>"+ pageObj.title + "</div>" +
							"<div class=vid-info-author>"+ pageObj.author + "</div>" +
							"<div class=vid-info-date>"+ pageObj.date + "</div>" +
							"<div class=vid-info-duration>"+ getduration(pageObj.duration) 
                            + "</div>" +
							"<div class=\"with-bg-size img-play\" style=\"background-image:url('images/gradoverlayplay.png')\">" + 
							"</div>" +
							"</div>" +
							"</div>" +
							"</a>" +
							"<br>" +
							"</div>";
        return videodiv;
    }
    function getduration(_duration) {
        		var seconds = _duration;
	    var minutes = seconds / 60;
	    var hours = minutes / 60;        
        var time = [ hours, minutes % 60, seconds%60];
        var _time = [];
         time[0] = time[0] || 12;
          for ( var i = 0; i < 3; i++ ) {
            time[i] = time[i] - time[i]%1;
            if (i>0 && time[i] < 10 && time[i-1] > 0) {
              time[i] = "0" + time[i];
            }
            if(time[i]>0 || i>0){
             _time.push(time[i]);   
            }
          }
        
                  
        return _time.join(":");
	}
    var maximg = 50;
    var imgcnt = 0;
    
    function nextItem(){
        var usenext = false;
        var isArticle = false;
        if(currentitem.length>11 || currentitem.indexOf(".") > -1){
            isArticle = true;
        }
        for(var index in playlist){
            var item = playlist[index];
            if(usenext){
//                if(item.length>11 || item.indexOf(".") > -1){
//                    loadArticle(item);
//                }else{                    
//                    playVideo(item);   
//                }
                updateContent(item, isArticle);
                break;
            }
            if(item == currentitem){
                usenext = true;   
            }
        }
    }
    
    function prevItem(){
        var previousitem = "";
        var useprev = false;
        var isArticle = false;
        if(currentitem.length>11 || currentitem.indexOf(".") > -1){
            isArticle = true;
        }
        for(var index in playlist){
            var item = playlist[index];
            if(useprev){
                break;
            }
            if(item == currentitem){
                useprev = true;   
            }else{
                previousitem = item;   
            }
        }
        if(useprev && previousitem.length>0){
                updateContent(previousitem, isArticle);
        }
    }
    function updateContent(newitem, isArticle){
        if(newitem.length>11 || newitem.indexOf(".") > -1){
                    if(!isArticle){
                        hide_overlay();
                        show_overlay_article();
                    }
                    loadArticle(newitem);
                }else{
                    if(isArticle){
                        hide_overlay_article();
                        show_overlay();
                    }
                    playVideo(newitem);   
                }        
    }
	window.addEventListener("load", onLoad);
     var player;
    var activeplaylist = "";

    
    function playVideo(videoid){
        activeplaylist = videoid;
        currentitem = videoid;
        if(player ==null){
         loadplayer();   
        }else{
           playPlaylist(); 
        }
        
    }
    function loadplayer(){
          // 2. This code loads the IFrame Player API code asynchronously.
        
     
                
              var tag = document.createElement('script');

              tag.src = "https://www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
    }
    
    
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
     
      function onYouTubeIframeAPIReady() {
       // broadcast("playerready");
            player = new YT.Player('player', {
              height: '100%',
              width: '100%',
               
                playerVars: {'videoId': activeplaylist, "iv_load_policy":3,
                            'showinfo': 0, 'autoplay':1},
              events: {
                'onReady': onPlayerReady,//onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
      }


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
          playPlaylist();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
    
      function onPlayerStateChange(event) {
        /*if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
          //done = true;
            title = "";
            broadcast("playbackurl:" + player.getVideoUrl()); 
        }else if(event.data == YT.PlayerState.ENDED && !done) {
          broadcast("ended");
            
        }*/
      }
      function stopVideo() {
        player.stopVideo();
      }
        var quality = "large";
        function playPlaylist(){
            try {
  

            if(activeplaylist.length >11){
                player.loadPlaylist(activeplaylist, 0, 0, quality);   
            }else {
                player.loadVideoById(activeplaylist, 0, quality);   
            }
                
            } 
            catch (e) {
                log("Error caught");
                   player.playVideo();
            } 
        }
      function playNewVideo(videoid){
          player.loadVideoById(videoid, 0, quality); 
      }
        function playNextVideo(){
            player.nextVideo();
        }
        function playPreviousVideo(){
            player.previousVideo();
        }
        function playpauseVideo(){
               if(player.getPlayerState() == 1){
                    player.pauseVideo();   
               }else{
                   player.playVideo();
               }
        }
        function seekVideoTo(seekto){
            player.seekTo(seekto, true);
        }