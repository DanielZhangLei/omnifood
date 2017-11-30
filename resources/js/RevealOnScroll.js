(function() {
  /**
   * Trigger an animation once an element has been scrolled.
   * @param [jquery object] eles [An element that will be scrolled on]
   * @param [string] offset [An offset-top value between the screen and an element]
   */
  function RevealOnScroll(eles, offset) {
    this.itemsToReveal = eles;
    this.offset = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  RevealOnScroll.prototype = {
    hideInitially: function() {
      this.itemsToReveal.addClass('hidden');
    },
    createWaypoints: function() {
      var _self = this;
      this.itemsToReveal.each(function(){
        var currentItem = this;
        new Waypoint({
          element: currentItem,
          handler: function() {
            $(currentItem).addClass('visible');
          },
          offset: _self.offset
        });
      });
    }
  };
  // export to window
  window.RevealOnScroll = RevealOnScroll;
})();