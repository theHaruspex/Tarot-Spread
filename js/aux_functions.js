function fade_page_out() {
  document.body.style.transition = "1s"
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


function generate_random_integer(min, max) {
  let seed = Math.random();
  let float = seed * (max-min) + min;
  let integer = Math.floor(float)
  return integer
}


function pull_random_indicies() {
  let indicies = [];
  while (indicies.length < 3) {
    let random_index = generate_random_integer(0, 22)
    if (!indicies.includes(random_index)) {
      indicies.push(random_index)
    }
  }
  return indicies
}


function delay(URL) {
  setTimeout(function() {window.location = URL}, 1000);
}
