Ext.ns("FlairyVi");

Flairy.require([
])(function() {
  FlairyVi.Application = Ext.extend(Flame.Application,{

    constructor: function(cfg) {
      cfg = cfg || {};
      Ext.apply(cfg, {meta: {title: "vi"}});
      FlairyVi.Application.superclass.constructor.call(this, cfg);
    }

  });

})();
