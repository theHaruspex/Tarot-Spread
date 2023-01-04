function delay(URL) {
  setTimeout(function() {window.location=URL}, 2000);
}

function fade_page_out() {
  document.body.style.opacity = '0'
}

function page_exit_flow(URL) {
  delay(URL)
  fade_page_out()
}

function reveal_element(element) {
  element.style.transition = "1s"
  element.style.opacity = "100"
}