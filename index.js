const itemList = [
  {
    name: "Javascript",
    path: "/javascript/basic.html",
    hash: "item001",
    class: "active",
  },
  {
    name: "Loops",
    path: "/javascript/loops.html",
    hash: "item002",
  },
  {
    name: "Arrays",
    path: "/javascript/arrays.html",
    hash: "item003",
  },
  {
    name: "Functions",
    path: "/javascript/functions.html",
    hash: "item004",
  },
  {
    name: "Objects",
    path: "/javascript/objects.html",
    hash: "item005",
  },
  {
    name: "Challenges",
    path: "/javascript/codingchallange.html",
    hash: "item006",
  },
  {
    name: "React JS",
    path: "/react/basics.html",
    hash: "item007",
  },
  {
    name: "Hooks",
    path: "/react/hooks.html",
    hash: "item008",
  },
  {
    name: "Redux",
    path: "/react/redux.html",
    hash: "item009",
  },
];

$(document).ready(function () {
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
