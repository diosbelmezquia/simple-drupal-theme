/**
 * @file
 * Balidea Custom Code of the javascript behaviour.
 */

(function (Drupal, once) {
  Drupal.behaviors.balideaGeneral = {
    attach: function (context, settings) {

      // Add button to the body.
      once('showSiteName', 'body', context).forEach(function (element) {
        let btn = document.createElement("button");
        btn.innerHTML = "Show site name";
        btn.classList.add('btn', 'btn--site-name');
        btn.onclick = function () {
          // Show site name on click on button.
          alert(drupalSettings.siteName);
        };
        element.appendChild(btn);
      })

    }
  };
})(Drupal, once);
