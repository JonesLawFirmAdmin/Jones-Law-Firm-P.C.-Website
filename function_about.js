// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
  sectionsColor: ['white', 'var(--metallic-sunburst)', 'var(--sage)', 'var(--metallic-sunburst)', 'var(--sage)', 'var(--metallic-sunburst)'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['Lawyer Spotlight', 'Bio', 'Before Jones Law', 'Practice Areas', 'State Bar', 'Federal Courts'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'var(--transparent-black)');
    $nav.css('background', 'var(--more-transparent-black)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },


});
