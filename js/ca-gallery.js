var gProj = [{
  id: "sokoban",
  name: "Sokoban",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
  link: 'games/sokoban'
},
{
  id: "mineSweeper",
  name: "mineSweeper",
  title: "find the mines",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
  link: 'games/mineSweeper'
  
},
{
  id: "touchNums",
  name: "touchNums",
  title: "find the mines",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
  link: 'games/touchNums'
  
},
{
id: "calcu",
name: "calcu",
title: "the calculator",
desc: "lorem ipsum lorem ipsum lorem ipsum",
publishedAt: 1448693940000,
labels: ["Matrixes", "keyboard events"],
link: 'games/calcu'

},
{
  id: "guessNum",
  name: "guessNum",
  title: "guess the nums",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
  link: 'games/guessNum'
  
  },
  {
    id: "inPicture",
    name: "inPicture",
    title: "guess the nums",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    link: 'games/inPicture'
    
    }
]

function initPage() {
  renderProtfolio()
  renderModals()
}
initPage()


function renderProtfolio() {
  var strHTML = ''
  for (var i = 0; i < gProj.length; i++) {
    var proj = gProj[i];
    strHTML +=
      '<div class="col-md-4 col-sm-6 portfolio-item"> \
  <a class="portfolio-link" data-toggle="modal" href="#'+ proj.id  + '"> \
    <div class="portfolio-hover">\
      <div class="portfolio-hover-content">\
        <i class="fa fa-plus fa-3x"></i>\
      </div>\
    </div>\
    <img class="img-fluid" src="img/portfolio/'+ gProj[i].id + '.jpg" alt="">\
  </a>\
  <div class="portfolio-caption">\
    <h4>'+ gProj[i].name + '</h4>\
    <p class="text-muted">'+ gProj[i].title + '</p>\
  </div>\
</div>'
  }
  // we get the element 
  var elPort = document.querySelector('.projCon')

  // we insert the strHTML 
  elPort.innerHTML = strHTML
}

function renderModals() {
  
  var strHTML = ''
  for (var i = 0; i < gProj.length; i++) {
    var proj = gProj[i];
    strHTML += '<div class="portfolio-modal modal fade" id="'+ proj.id  + '" tabindex="-1" role="dialog" aria-hidden="true">\
    <div class="modal-dialog">\
      <div class="modal-content">\
        <div class="close-modal" data-dismiss="modal">\
          <div class="lr">\
            <div class="rl"></div>\
          </div>\
        </div>\
        <div class="container">\
          <div class="row">\
            <div class="col-lg-8 mx-auto">\
              <div class="modal-body">\
                <!-- Project Details Go Here -->\
                <a href="'+proj.link + '">\
                <h2>'+ gProj[i].name + '</h2>\
                </a>\
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\
                <img class="img-fluid d-block mx-auto" src="img/portfolio/'+ gProj[i].id + '.jpg" alt="">\
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis\
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,\
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>\
                <ul class="list-inline">\
                  <li>Date: January 2017</li>\
                  <li>Client: Threads</li>\
                  <li>Category: Illustration</li>\
                </ul>\
                <button class="btn btn-primary" data-dismiss="modal" type="button">\
                    <i class="fa fa-times"></i>\
                    Close Project</button>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>'

  }
  var elBody = document.querySelector('body')
  elBody.innerHTML += strHTML

}
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


function openMail() {
  var myMail = 'yaronby10@gmail.com'
  var subject = document.querySelector('#subject').value
  var massage = document.querySelector('#massage').value
  var str =   + myMail + subject + massage
}