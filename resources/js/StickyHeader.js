(function() {
  /**
   * Once scrolling to a specific element, the site header will be sticky on top.
   * @param [jquery object] eles [An element that will be scrolled on]
   * @param [jquery object] header [a header element]
   * @param [string] offset [An offset-top value between the screen and an element]
   */
  function StickyHeader(eles, header, offset) {
    this.itemsToReveal = eles;
    this.header = header;
    this.offset = offset;
    this.createHeaderWaypoints();
  }

  StickyHeader.prototype = {
    createHeaderWaypoints: function() {
      var _self = this;
      new Waypoint({
        element: _self.itemsToReveal,
        handler: function(direction) {
          if (direction === 'down') {
            $(_self.header).addClass('sticky');
          } else {
            $(_self.header).removeClass('sticky');
          }
        },
        offset: _self.offset
      });
    }
  };
  // export to window
  window.StickyHeader = StickyHeader;
})();