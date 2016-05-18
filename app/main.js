
define(function (require) {

    var table = require('./tableDrawer.js');
    var categoryDashboard = require('./categoryDashboard.js');


    categories = table.initData("sample_data_sales.csv", function(data, fields) {
        categoryDashboard.createDashboard("category-dashboard", fields, table);
        var header = document.getElementById("table_header");
        
        var late = Object.keys(data[0])[0]
        header.innerHTML =  "Showing data by " + late
    });



});