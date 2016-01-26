
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback($$quaintGoogleChartsDraw);

$$quaintGoogleChartsList = [];

function $$quaintGoogleChartsDraw() {
    $$quaintGoogleChartsList.forEach(function (config) {
        var data = google.visualization.arrayToDataTable(config.data, false);
        var type = config._type.toLowerCase();
        type = type[0].toUpperCase() + type.slice(1) + "Chart";
        elem = document.getElementById(config.divId);
        var chart = new google.visualization[type](elem);
        config.height = config.height && parseInt(config.height);
        config.width = config.width && parseInt(config.width);
        chart.draw(data, config);
    });
}
