function read_res(uri, callback, failback) {
  Flairy.Ajax.get("/~~flairy~~/res/" + uri, {
    success: function(resp, opt) {
      if (uri.match(/^\//)) {
        var u = "frs://" + uri;
      } else {
        u = "frs:///" + uri;
      }
      (new Flairy.Msg.Useres(u, Flairy.Kernel.pid)).postToKernel();

      FlairyVi.currentDocType = resp.getResponseHeader("Content-Type");
      callback(resp.responseText);
    },
    failure: function(resp, opt) {
      failback(resp);
    },
    disableCaching: true
  });
}


function write_res(uri, data, suc, mime) {

	if(!suc) { suc = function(){}; }

	if(!mime) { mime = Flairy.Mime.OCTET; }

	while(uri.indexOf("/") == 0) {

		uri = uri.substring(1);

	}
	Flairy.Ajax.putData("/~~flairy~~/res/" + uri, mime, data, {

		success: suc.createInterceptor(function(){

			(new Flairy.Msg.Notify("frs:///" + uri, Flairy.Kernel.pid)).post(Flairy.Kernel.env._KPID);

		}) ,
		failure: function(resp, opt) {

		var msg = Flairy.Res.Message.getMessage(resp.status, opt.method);

		  if(!msg) {
			msg = "原因は不明です.";

		  }
		  Ext.Msg.alert("失敗", msg);

		}
	});
}

