const past_section = document.getElementById("past_section")
const present_section = document.getElementById("present_section")
const future_section = document.getElementById("future_section")

const header_elements = document.getElementsByClassName("header")
const img_elements = document.getElementsByTagName("img")
const description_elements = document.getElementsByClassName("description")



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

function load_section(element, data) {
  let img = element.getElementsByTagName('img')[0];
  let description = element.getElementsByClassName('description')[0];

  element.style.background = `url(${data['background_filepath']}`;
  element.style.backgroundSize = 'cover';
  element.style.backgroundPosition = 'center 0';
  element.style.backgroundRepeat = 'no-repeat'

  img.src = data['card_filepath']
  description.textContent = data['description']
}

async function load_tarot_data() {
  let [index_a, index_b, index_c] = pull_random_indicies()
  let response = await fetch("resources/tarot_data.json");
  let tarot_json = await response.json();

  let past_tarot_data = tarot_json[index_a]
  let present_tarot_data = tarot_json[index_b]
  let future_tarot_data = tarot_json[index_c]

  load_section(past_section, past_tarot_data)
  load_section(present_section, present_tarot_data)
  load_section(future_section, future_tarot_data)
}

function show_section(element) {
  element.style.transition = "1s"
  element.style.visibility = "visible"
}

function transistion_elements_array(elements_array, ms_timeout) {
  for (let i = 0; i < elements_array.length; i++) {
    setTimeout(show_section, ms_timeout, elements_array[i])
  }
}

function transition_flow() {
  setTimeout(show_section, 1000, past_section)
  setTimeout(show_section, 2000, present_section)
  setTimeout(show_section, 3000, future_section)
  
  transistion_elements_array(img_elements, 4000)
  transistion_elements_array(header_elements, 5000)
  transistion_elements_array(description_elements, 5000)
}

load_tarot_data()
transition_flow()

// Do screen transistions