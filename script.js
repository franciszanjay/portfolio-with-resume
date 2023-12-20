 

var links=document.getElementsByClassName("links");
var items=document.getElementsByClassName("tab-items");
 function openwindow(tabname)
 {
for(link of links){

link.classList.remove("active-links");

}
for(item of items){

item.classList.remove("active-items");

}

event.currentTarget.classList.add("active-links");
document.getElementById(tabname).classList.add("active-items");

 }



function openmenu(){
    var menuitems=document.getElementById("menus");


menuitems.style.right = "0";

}
function closemenu(){
        var menuitems=document.getElementById("menus");

menuitems.style.right = "-200px";

}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbzwmTnTY_O-PwHGVI9BxmQ2mGNSHFRTWYCB_6WX_AGnSKyJGUg2JFfPPXXYW8r0B4UY/exec'
  const form = document.form['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })