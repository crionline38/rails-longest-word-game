// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    document.getElementById('inp').value = document.getElementById('r0').innerText.charAt(0)
    + document.getElementById('r1').innerText.charAt(0)
    + document.getElementById('r2').innerText.charAt(0)
    + document.getElementById('r3').innerText.charAt(0)
    + document.getElementById('r4').innerText.charAt(0)
    + document.getElementById('r5').innerText.charAt(0)
    + document.getElementById('r6').innerText.charAt(0)
    + document.getElementById('r7').innerText.charAt(0)
    + document.getElementById('r8').innerText.charAt(0);
}
