var sectiontitle = "About";
function initRow(){
     $row_container = $(' <div class="container"></div>').appendTo( $('BODY') );
     $title_row_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
       $title_div = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                     '</div>').appendTo($title_row_div);
   $title_div.html( '<br><div class="about-bg"></div><div class="about-title">' + 'Teeny\'s Commissions</div><br>' );
    $control_div= $('<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1" style = "float: right; align: right; margin-left:auto; margin-right:0;">'+
                       '<br><div id="divNoImage" class="dd-container" style = "width:60px; margin-left:auto; margin-right:0;"></div><br></div>').appendTo($title_row_div);
    $row_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
    $row_add = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="about-text"></div></div>').appendTo( $row_div);
    $back_div = $('<div class="row" width="680px"></div>').appendTo( $row_container );
    $back_add = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>').appendTo( $back_div);
    $back_add.html('<center><a class="commisionlink" href="mailto:littlefluffballdraws@gmail.com&amp;subject=Commision%20Inquiry">Commission Me?</a><br><a href="index.html"><i class="fa fa-home fa-3x"></i></a></center>');
}
$(function() {
    initRow();
});