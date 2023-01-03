const past_section = document.getElementById("past_section")
const present_section = document.getElementById("present_section")
const future_section = document.getElementById("future_section")


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
  console.log(description)
  
  element.style.background = `url(${data['background_filepath']}`;
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

load_tarot_data()
