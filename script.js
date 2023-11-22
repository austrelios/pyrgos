

// Code for multilingual display of text
// set initial language according to browser language, or default Lang if this none of site languages
const default_language = 'en',
  language_selector = document.getElementById('language_selector'),
  htmlTag = document.querySelector('html'),
  language_elements = [...document.querySelectorAll('*[lang]')],
  docTitle =
  {
    en: 'English document title',
    gr: 'Ελληνικός Τίτλος '
  }

 switch_Language();

function switch_Language()  // IIFE
{
  // remove <html lang="en"> from langElms
  let i_html = language_elements.findIndex(el => el === htmlTag)
  if (i_html > -1) language_elements.splice(i_html, 1);

  // set initial language according to browser language, or default Lang if this none of site languages
  let initial_language = (navigator.language || navigator.userLanguage || default_language).substring(0, 2)
  if (!docTitle[initial_language]) {
    initial_language = default_language;
  }

  language_selector.value = initial_language;

  showLang();

  function showLang() {
    let selected_language = language_selector.value;
    
    console.log("The language selected is " + selected_language);
    htmlTag.lang = selected_language
    document.title = docTitle[selected_language]

    language_elements.forEach(el => {
      if (el.lang === selected_language) {
        console.log("el.lang:" + el.lang + " " + " Selected language:" + selected_language + " Hiding element " + el.innerHTML);
        el.classList.remove("noDisplay");
      }
      else {
        console.log("el.lang:" + el.lang + " " + " Selected language:" + selected_language + " Showing element " + el.innerHTML);
        el.classList.add("noDisplay")
      }

    })
  }


  // the final touch !
  language_selector.onchange = showLang;
}



