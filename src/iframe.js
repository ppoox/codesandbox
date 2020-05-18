const iframeWrap = document.createElement("div");
iframeWrap.setAttribute("id", "iframeWrap");
iframeWrap.setAttribute("class", "iframe-wrap");

const iframe = document.createElement("iframe");
iframe.setAttribute("id", "iframe");

iframe.setAttribute("src", "../index.html");
iframe.setAttribute("width", "500px");
iframe.setAttribute("heigth", "500px");
iframe.setAttribute("scrolling", "auto");

const app = document.getElementById("app");

app.append(iframeWrap);
iframeWrap.append(iframe);

document.getElementsByTagName("body").width = "300px";

document.getElementById("resize1").addEventListener("click", function() {
  console.log("resize1", document.getElementById("iframe").height);
  document.getElementById("iframe").height = "100px";
});

document.getElementById("resize2").addEventListener("click", function() {
  console.log("resize2", document.getElementById("iframe").height);
  document.getElementById("iframe").height = "300px";
});

// document.getElementById("iframe").onresize = function() {
//   console.log("dddd");
// };

// document.getElementById("iframe").addEventListener("resize", function() {
//   console.log("aa");
// });

const observe = new MutationObserver(function(mutation) {
  console.log("change", mutation);
});

const target = document.getElementById("iframe");
observe.observe(target, {
  attributes: true
});

// document.getElementById("appleLogin").addEventListener("click", function() {});
