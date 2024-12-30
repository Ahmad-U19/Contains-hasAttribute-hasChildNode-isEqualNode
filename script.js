var parent=document.getElementById("content");

var target=document.getElementById("ahm");

var find =parent.contains(target);

console.log(find);

var targ=document.getElementById("header");

var y=targ.hasAttribute("class");

console.log(y);

var t=document.getElementById("header");

s=t.hasChildNodes();

console.log(s);

var tt=document.getElementById("list-1").children[1];

var tt2=document.getElementById("list-2").firstElementChild;

var f=tt.isEqualNode(tt2);

console.log(f);