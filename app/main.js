require.config({
  paths:{
    jquery: "../com/jquery"
  }
})

require(['jquery','../com/waterfall','../com/carousel','../com/gotop'],function($,waterfall,carousel,gotop){
  var container = $('#header-wrap .container');
  carousel.init(container);
  new gotop;
  waterfall($('#pic-ct'));
}
  )
