define(function () {

    var table;

    var ObjectTypes = {nominal: "Nominal",
                    quantitative: "Quantitative",
                    ordinal: "Ordinal",
                    interval: "Interval"};

    function createRow(category){
        var element = document.createElement("div");
        element.className = "category-dashboard-category";
        element.textContent = category.name;
        if (category.type == ObjectTypes.quantitative){
            var button = document.createElement("button")
            button.addEventListener("click", function() { table.toggleCircles(category) } );
            button.textContent = "Toggle Circle";
            element.appendChild(button)
        }

        return element;
    }


    return {
        createDashboard : function(id, categories, _table) {
            table = _table;
            var div = document.getElementById(id)
            if (!div)
                return

            categories.forEach(function(category) {
                div.appendChild(createRow(category));
            });
        }
    }
});