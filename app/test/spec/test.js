/* global describe, it */

(function () {
  'use strict';
  describe('Windu engineering test', function () {
    describe('Description', function () {
      it('should be hidden be default', function () {
        expect($('#more-information').css('display')).toBe('none');
      });
      it('should be visible after one click on button', function () {
        $('#show-more').click();
        expect($('#more-information').css('display')).toBe('block');
      });
      it('should be hidden after second click on button', function () {
        $('#show-more').click();
        expect($('#more-information').css('display')).toBe('none');
      });
    });
  });
})();
