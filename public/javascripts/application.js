Ext.ns("FlairyVi");

Flairy.require([
])(function() {
  FlairyVi.Application = Ext.extend(Flame.Application,{

    title: "flairy-vi",
    constructor: function(cfg) {
      cfg = cfg || {};
      Ext.apply(cfg, {meta: {title: this.title}});
      FlairyVi.Application.superclass.constructor.call(this, cfg);
    },

    onMessage: function(msg) {
      if (msg.msg.indexOf("FM_DOOM") !== -1) {
        if (term_freeze() != term._formelement.value) {
          var dlg = Ext.MessageBox.confirm(
            "終了確認",
            "変更が保存されていません。終了しますか？",
            function(btn) {
              if (btn === 'yes') {
					      (new Flairy.Msg.Kill(Flairy.Kernel.pid)).post();
              } else {
					      (new Flairy.Msg.Survive("ユーザーによる判断").post();
              }
            },
            this
          );
        } else {
					(new Flairy.Msg.Kill(Flairy.Kernel.pid)).post();
        }
      }
    }


  });

})();
