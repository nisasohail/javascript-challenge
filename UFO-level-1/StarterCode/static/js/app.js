var tableData = data;
// function to display UFO sightings
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  // clear the table for new data
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  // initial display of all UFO sightings
  console.log(tableData);
  tableDisplay(tableData);
  // 'Filter Table' button
  var button = d3.select("#filter-btn");
  // filter the database and display
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
        if (dateInput.trim() === "" ) {
      // display the whole database if the date field has no date
      var filteredData = tableData;
    } else {
      // otherwise, display the filtered dataset  
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
      // display message if no records found
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });

//Filter the data based on input parameters like data and only return values for which
// //criteria is satisfied. 
// function filterData(dateV,stateV,countryV) {
//   console.log("In filterData" + date)
//   if (date)
//     var filtData = tableData.filter(fData => (fData.datetime == dateV) && (fData.state == stateV) );
//     //loadFiltData = 'y';
//     console.log("loadFiltData " + FiltData)
//     console.log(filtData);
//     return(filtData)
      
// }

//Main logic.
// Load all the table data of UFO sightings and render in html template.

if (loadFiltData == 'y') {
  console.log("in filt data y")
  finalData = filtData;
  }
else {
  console.log("in filt data n")
  finalData = tableData;
  }
console.log("First time main logic")
console.log(finalData)
inputTbody.html("");
loadTableData(finalData)

// User clicks the button to filter data
filtButton.on("click", function() {

 // Prevent the whole page from refreshing.
 d3.event.preventDefault();

 // Get the value property of the input element
 var dateValue = inputDate.property("value");
 var stateValue = inputState.property("value");

 console.log(" in filtbutton.on code ")
 console.log("dateValue  " + dateValue);
 console.log("stateValue " + stateValue);
 console.log(" after getting date/state value")
 var filtData = tableData.filter(fData => (fData.datetime == dateValue) && (fData.state == stateValue) ) ;
 console.log(filtData) 
 loadFiltData = "y";
 if (loadFiltData == 'y') {
  console.log("in filt data y")
  finalData = filtData;
  }
else {
  console.log("in filt data n")
  finalData = tableData;
  }
console.log(finalData)
//Clear all previuos data from UFO table
inputTbody.html("");
loadTableData(finalData)
});