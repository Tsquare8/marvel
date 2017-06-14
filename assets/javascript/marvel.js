(function() {

  let searchButton = $("#search-button");

  function getText() {
    return $("#response").val();
  }
  searchButton.click(function() {
    console.log("submit button clicked");

    $.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=10ed9a2faf9fac4882a96e3af156375c&hash=0758fd1888cdda1af6163bd7d8f2a937&limit=100&nameStartsWith=" + getText(), function(data) {

      let results = data.data.results;

      $.each(results, function(index, value) {

        $("#table").append(function() {

          row = `<tr class="row">

                          <td><span>${value.name}</span></td>
                           <td><img id="url" src="${value.thumbnail.path + "." + value.thumbnail.extension}"></td>

                         </tr>`
          return row;

        });

      });
    });
  });

})();
