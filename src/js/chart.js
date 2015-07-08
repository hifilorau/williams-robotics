app.charts = function () {
	var secondColor = "#474657";

	
	
	var data = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
        {
					label: "VC investment in Robotics in millions",
					fillColor: secondColor,
					strokeColor: "#7D2B39",
					pointColor: "#B9727A",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [13, 30, 60, 69, 172, 323, 500]
        }  
    ]
	};
	
		var options = {
			 bezierCurve : true,
			 pointDot : true,
			 scaleFontColor: "white",
			 showTooltips: false,
//			 responsive: true,
//			 maintainAspectRatio: true
		};
			var canvas = document.getElementById("line-chart");
			var ctx = canvas.getContext("2d");
			new Chart(ctx).Line(data, options);

	
		
	var donutData = [
    {
        value: 56,
        color: secondColor,
        highlight: "#7D2B39",
        label: "Automotive"
    },
    {
        value: 11,
        color: "#C19577",
        highlight: "#7D2B39",
        label: "Metals"
    },
    {
        value: 7,
        color: "#4B7A72",
        highlight: "#7D2B39",
        label: "Food"
    },
		
		 {
        value: 6,
        color: "#71A264",
        highlight: "#7D2B39",
        label: "Life sciences/biomedical"
    },
		 {
        value: 2,
        color: "##9AC190",
        highlight: "#7D2B39",
        label: "Plastics/rubber"
    },
		 {
        value: 4,
        color: "#E6C3AB",
        highlight: "#7D2B39",
        label: "Semiconductor/electronics"
    },
		{
        value: 14,
        color: "#7D7b60",
        highlight: "#7D2B39",
        label: "Other"
    },
]
	
	var donutCanvas = document.getElementById("donut-chart");
	var donutCtx = donutCanvas.getContext("2d");
	new Chart(donutCtx).Doughnut(donutData, {
    animateScale: true,
		segmentShowStroke: false
});
};


