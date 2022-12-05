// check to see if this is an index file for a series and get value index.json
function useMc2Trainerp() {
  if (localStorage.getItem("mc2Trainer")) {
    // unhide all trainer notes
    var elements = document.getElementsByClassName("trainer-hide");
    for (var i = 0; i < elements.length; i++) {
      elements[i].className = "trainer";
    }
    // unhide all items which are collapsed for students
    elements = document.getElementsByClassName("collapsible");
    for (var i = 0; i < elements.length; i++) {
      elements[i].className = "revealed";
    }
    elements = document.getElementsByClassName("collapsed");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }

}

export function useFindSummaries() {
  var coll = document.getElementsByClassName("summary");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var text = this.innerHTML;
      var new_text = "";
      if (text.includes("+")) {
        new_text = text.replace("+", "-");
      } else {
        new_text = text.replace("-", "+");
      }
      this.innerHTML = new_text;
      // get nextElementSibling
      var content = this.nextElementSibling;
      // hide or show?
      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("summary-shown");
        this.classList.add("summary-hidden");
      } else {
        content.style.display = "block";
        this.classList.remove("summary-hidden");
        this.classList.add("summary-shown");
      }
    });
  }
}

export function useFindCollapsible() {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        //this.className= "collapsible";
        this.classList.remove("revealed");
        this.classList.add("collapsible");
      } else {
        content.style.display = "block";
        //this.className= "revealed";
        this.classList.remove("collapsible");
        this.classList.add("revealed");
      }
    });
  }
}

// page is set in the nav bar of each web page
function pageGoBack(page) {
  if (localStorage.getItem("returnpage")) {
    page = localStorage.getItem("returnpage");
    localStorage.removeItem("returnpage");
  }
  window.location.replace(page);
}
// to show verses
export function usePopUp(field) {
  var content = document.getElementById(field);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
    //this.className= "revealed";
  }
}
// If you are in Lesson 1 and want a person to go to Lesson 7,
// The return button will now bring them back
// rather than take them to the index.
// called from html pages
function goToPageAndSetReturn(page) {
  localStorage.setItem("returnpage", window.location.href);
  window.location.replace(page);
}
function hideWhenOffline() {
  // get rid of all readmore comments
  var readmore = document.getElementsByClassName("readmore");
  if (readmore.length > 0) {
    console.log("I found readmore");
    for (var i = 0; i < readmore.length; i++) {
      readmore[i].style.display = "none";
    }
  }
  readmore = document.getElementsByClassName("bible_readmore");
  if (readmore.length > 0) {
    console.log("I found bible_readmore");
    for (var i = 0; i < readmore.length; i++) {
      readmore[i].style.display = "none";
    }
  }
  // hide external-link
  var links = document.getElementsByClassName("external-link");
  if (links.length > 0) {
    console.log("I found external-link");
    for (var i = 0; i < links.length; i++) {
      links[i].style.className = "unlink";
    }
  }
  // hide external-movie
  links = document.getElementsByClassName("REALexternal-movie");
  if (links.length > 0) {
    console.log("I found external-link");
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "none";
    }
  }
}
