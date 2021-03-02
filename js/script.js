// IPO Pattern for program design - Input -> Process -> Output

/*----- constants -----*/

const BASE_URL = "https://www.superheroapi.com/api.php/10222670862712756/search/wonder";

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

init();

function init() {
  getData();
}
function getData(){
  $.ajax(BASE_URL)
  .then(function(data) {
    console.log('data: ', data);
  }, function(error) {
      console.log('error: ', error);
  });
}