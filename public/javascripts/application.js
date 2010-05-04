Ext.ns("FlairyVi");

Flairy.require([
])(function() {
  FlairyVi.Application = Ext.extend(Flame.Application,{

    title: "flairy-vi",
    constructor: function(cfg) {
      cfg = cfg || {};
      Ext.apply(cfg, {meta: {title: this.title}});
      FlairyVi.Application.superclass.constructor.call(this, cfg);
    }

  });

})();
