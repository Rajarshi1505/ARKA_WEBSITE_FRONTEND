var btn1=document.getElementById("event-btn1");

btn1.addEventListener("click", function() {
    // var val=btn.value;
    // var event_id="event"+val;
    var ev1=document.getElementById("event1");
    var ev_show1=document.getElementById("event1show");
    ev1.style.display = "none";
    ev_show1.style.display="block";
});

var coll1=document.getElementById("collapse-btn1");

coll1.addEventListener("click", function() {
    var ev1=document.getElementById("event1");
    var ev_show1=document.getElementById("event1show");
    ev1.style.display = "block";
    ev_show1.style.display="none";
})