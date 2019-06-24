var bdmapcfg = {
  'imgext':'.png', //瓦片图的后缀 ------ 根据需要修改，一般是 .png .jpg
  /*'tiles_dir':'http://172.118.210.201:8080' */  //瓦片图的目录，为空默认在 baidumap_v2/tiles/ 目录
	'tiles_dir':'http://127.0.0.1:8077/nc_style'   //瓦片图的目录，为空默认在 baidumap_v2/tiles/ 目录none标识使用地图自定义图层
};

//////////////////下面的保持不动///////////////////////////////////
var scripts = document.getElementsByTagName("script");
var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src");
bdmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/")+1); //地图API主目录, images,tiles都在此目录下

//20190509ywb注释
(function(){
  window.BMap_loadScriptTime = (new Date).getTime();
  //加载地图API主文件
  document.write('<script type="text/javascript" src="'+bdmapcfg.home+'baidumap_offline_v2_20160921.js"></script>');
})();