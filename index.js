const itemList = [
  {
    name: "Web",
    path: "/common/web.html",
  },
  {
    name: "Wordpress",
    path: "/common/index.html",
  },
  {
    name: "HTML",
    path: "/htmlcss/html.html",
  },
  {
    name: "Base",
    path: "/base.html",
    class: "active",
  },
  {
    name: "CSS",
    path: "/htmlcss/css.html",
  },
  {
    name: "Javascript",
    path: "/javascript/basic.html",
  },
  {
    name: "AJAX",
    path: "/javascript/AJAX.html",
  },
  {
    name: "jQuery",
    path: "/javascript/jquery.html",
  },
  {
    name: "Loops",
    path: "/javascript/loops.html",
  },
  {
    name: "Arrays",
    path: "/javascript/arrays.html",
  },
  {
    name: "Functions",
    path: "/javascript/functions.html",
  },
  {
    name: "Objects",
    path: "/javascript/objects.html",
  },
  {
    name: "Challenges",
    path: "/javascript/codingchallange.html",
  },
  {
    name: "React JS",
    path: "/react/basics.html",
  },
  {
    name: "Hooks",
    path: "/react/hooks.html",
  },
  {
    name: "Redux",
    path: "/react/redux.html",
  },
  {
    name: "Context API",
  },
  {
    name: "SCSS",
    path: "/css/scss.html",
  },
  {
    name: "Webpack",
    path: "/react/webpack.html",
  },
  {
    name: "Git",
    path: "/common/git.html",
  },
  {
    name: "Typescript",
  },
  {
    name: "Jest",
  },
  {
    name: "Next JS",
    path: "/javascript/nextjs.html",
  },
  {
    name: "HTTP Protocols",
  },
  {
    name: "Web Sockets",
  },
  {
    name: "Node JS",
  },
  {
    name: "Express JS",
  },
  {
    name: "Babel",
  },
  {
    name: "Mongo DB",
  },
  {
    name: "Lodash",
  },
  {
    name: "Tailwind CSS",
    path: "/css/tailwind.html",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "WebComponent",
  },
];

$(document).ready(function () {
  itemList.map((item) => {
    const newnumber = Math.floor(Math.random() * 90000) + 10000;
    item.hash = "hash" + newnumber.toString();
  });
  itemList.forEach((item) => {
    var tabshtml = '<button class="nav-link ' + item.class + '" id="' + item.hash + '-tab" data-bs-toggle="pill" data-bs-target="#' + item.hash + '" type="button"' + 'role="tab" aria-controls="' + item.hash + '" aria-selected="true"> ' + item.name + " </button>";
    document.getElementById("v-pills-tab").innerHTML += tabshtml;

    $.get(item.path, function (data, status) {
      var tabscontent = '<div class="tab-pane fade show ' + item.class + '" id="' + item.hash + '" role="tabpanel" aria-labelledby="' + item.hash + '-tab">' + data + "</div>";
      document.getElementById("v-pills-tabContent").innerHTML += tabscontent;
    });
  });
  $.getScript("assets/prism.js", function (jd) {});
});
