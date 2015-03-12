
function getContent(){
    
    $row_div.empty();

    var data = imagedata;  
    parseReddit(data);   
    
    
}

function setupoverlay(){
     $('A.show-overlay').click( function(ev) {
        ev.preventDefault();
        show_overlay();
    });
    $('A.show-overlay-article').click( function(ev) {
        ev.preventDefault();
        show_overlay_article();
    });
}

function parseReddit(data){

    

       
    data.images.forEach( function(image){
        if(image.type == showtype || showtype == ddBasic.length-1){
        var pagehtml = '';
        pagehtml = parseRedditChildArticle(image);
        $(pagehtml).appendTo($row_div);
        }
    });
    setupoverlay();
}

function parseRedditChildArticle(image){
    var data = image;
     var articlediv = "<div id='" + data.title +"' class=\"col-xs-12 col-sm-6 col-md-5 col-lg-4\">" +
							"<br>" +
							"<a href=\""//#\" class=\"show-overlay-article\" onclick=\""//loadArticle('
                            +'littlefluffball_art/'+ data.img + "\">"+//');
							resolveArticleBackgrnd(data) +
							
							"<div class=\"with-bg-size img-hide\" style=\"background-color:rgba(0,0,0,0.3);\">" +
         "<div class=\"with-bg-size img-play\" style=\"background-color:rgba(255,255,255,0.3);\">" +
         "</div>" +
							"<div class=vid-info-title>"+ data.title + "</div>" +
//							"<div class=vid-info-author>"+ data.domain + "</div>" +
//							"<a href='http://www.reddit.com/" + data.permalink + "'><div class=vid-info-date>"+ '<i class="fa fa-comments-o"></i>' + "</div></a>" +
							
							//"background-:url('images/gradoverlayarticle.png')\">" + 
							
							"</div>" +
							"</div>" +
							"</a>" +
							"<br>" +
							"</div>";
        return articlediv;
}
function resolveArticleBackgrnd(data) {
		var img = 'littlefluffball_art/' + data.img;
		
		var articlebackgrnd = "<div id='"+
            '' +
            "' class=\"with-bg-size\" style=\"background-image:url('" 
        + img + "')\">";

		return articlebackgrnd;
	}


var ddBasic = [
    { text: 'Chibi', value: 0},
    { text: 'Flat', value: 1},
    { text: 'Shaded', value: 2},
//    { text: 'Ref Sheets', value: 3},
    { text: 'All', value: 4}
];
var showtype = ddBasic.length-1;
function activateOrderSelect(){

$('#divNoImage').ddslick({
    data: ddBasic,
    selectText:'All',
    width: "100px",
    background: 'transparent',
    onSelected: function(selectedData){
        showtype = selectedData.selectedIndex;
        getContent();
//        if(loaded){ urltype = selectedData.selectedIndex;
//        urls_added=[];
//        docCookies.setItem('urltype',urltype, 3600);
//        docCookies.removeItem('qafter')
//        _qafter = "";
//        getContent();
                  //}
       
    }   
});
}
 