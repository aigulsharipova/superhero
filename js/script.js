// IPO Pattern for program design - Input -> Process -> Output

/*----- constants -----*/

const BASE_URL = "https://www.superheroapi.com/api.php/10222670862712756/search/wonder";

// $('#exampleModal').modal('show');

/*----- app's state (variables) -----*/
let superheroData;

/*----- cached element references -----*/
const $collection = $('#collection');
/*----- event listeners -----*/
/*----- functions -----*/

// init();

// function init() {
  // getData();
// }
$('.card').click(function () {
  console.log('keke');
  getData();
});
function getData(){
  $.ajax(BASE_URL)
  .then(function(data) {
    console.log('data: ', data);
    superheroData = data;
    $('#exampleModal').modal('show');

    // render();
  }, function(error) {
      console.log('error: ', error);
  });
}

function render() {
  // superheroData.result.map(function);
}