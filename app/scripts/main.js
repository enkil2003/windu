'use strict';

var Module = (function () {
  var showMoreButton = $('#show-more');
  var moreInformation = $('#more-information');

  showMoreButton.on('click', function() {
    moreInformation.toggle();
    if (showMoreButton.opened) {
      showMoreButton.opened = false;
      showMoreButton.text('Show More');
    } else {
      showMoreButton.opened = true;
      showMoreButton.text('Show Less');
    }
  });

  showMoreButton.opened = false;

  return showMoreButton;
}());
