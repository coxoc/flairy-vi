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
          alert("change!!");
        } else {
					(new Flairy.Msg.Kill(Flairy.Kernel.pid)).post(this.onShutdown);
        }
      }
    }


  });

})();
