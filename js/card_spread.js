const past_section = document.getElementById("past_section");
const present_section = document.getElementById("present_section");
const future_section = document.getElementById("future_section");
const header_elements = document.getElementsByClassName("header");
const card_box_elements = document.getElementsByClassName("card_box");
const description_elements = document.getElementsByClassName("description");
const deal_button_elements = document.getElementsByClassName("deal_button");
const link_elements = document.getElementsByTagName("a");
const back_button = document.getElementById("back_button");


function load_element_background(element, background_filepath) {
  element.style.background = `url(${background_filepath}`;
  element.style.backgroundSize = 'cover';
  element.style.backgroundPosition = 'center 0';
  element.style.backgroundRepeat = 'no-repeat';
}


function load_section(element, data) {
  let img = element.getElementsByTagName('img')[0];
  let description = element.getElementsByClassName('description')[0];
  
  load_element_background(element, data['background_filepath'])
  img.src = data['card_filepath'];
  description.textContent = data['description'];
}


async function load_tarot_data() {
  let response = await fetch("resources/tarot_data.json");
  let tarot_json = await response.json();

  let [index_a, index_b, index_c] = pull_random_indicies();
  let past_tarot_data = tarot_json[index_a];
  let present_tarot_data = tarot_json[index_b];
  let future_tarot_data = tarot_json[index_c];

  load_section(past_section, past_tarot_data);
  load_section(present_section, present_tarot_data);
  load_section(future_section, future_tarot_data);
}


function transistion_elements_array(elements_array, ms_timeout) {
  for (let i = 0; i < elements_array.length; i++) {
    setTimeout(reveal_element, ms_timeout, elements_array[i]);
  }
}


function transition_flow() {
  setTimeout(reveal_element, 1000, back_button);
  setTimeout(reveal_element, 1000, past_section);
  setTimeout(reveal_element, 2000, present_section);
  setTimeout(reveal_element, 3000, future_section);
  
  transistion_elements_array(card_box_elements, 4000);
  transistion_elements_array(header_elements, 5000);
  transistion_elements_array(description_elements, 5000);
  transistion_elements_array(deal_button_elements, 7000);
}


load_tarot_data()
transition_flow()