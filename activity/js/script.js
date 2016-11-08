var radarChartData = {
    labels: ["难度", "乐趣", "时长", "费用", "设备要求", "工具要求"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(52,73,94,0.2)",
            strokeColor: "#95A5A6",
            pointColor: "#95A5A6",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28,48,40,19,96,27]
        }
    ]
};

var doughnutData = [
    {
        value: 100,
        color:"#F1C40F",
        highlight: "#F39C12",
        label: "爱好者"
    },
    {
        value: 50,
        color: "#E67E22",
        highlight: "#D35400",
        label: "设计师"
    },
    {
        value: 100,
        color: "#34495E",
        highlight: "#2C3E50",
        label: "软硬工程师"
    },
    {
        value: 40,
        color: "#ECF0F1",
        highlight: "#BDC3C7",
        label: "其他"
    },
];

window.onload = function(){
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myRadar = new Chart(ctx).Radar(radarChartData, {responsive: true});
};