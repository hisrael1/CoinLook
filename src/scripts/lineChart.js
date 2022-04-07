function renderGraph(hash) {
    const parseDate = d3.timeParse("%Q");

    for (let i = 0; i < hash.length; i++) {
        hash[i][0] = parseDate(hash[i][0])
        hash[i][1] = Math.round(100 * hash[i][1])/100;
    }

    let pricesData = [];
    hash.forEach(ele=> {
        let price = {
            time: ele[0],
            price: ele[1]
        };
        pricesData.push(price);
    });

    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    var svg = d3.select(".prices")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleTime()
            .domain(d3.extent(pricesData, function(d) { return d.time; }))
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        var y = d3.scaleLinear()
            .domain( [d3.min(pricesData, d=>d.price)*.95, d3.max(pricesData, d => d.price)])
            .range([ height, 0 ]);
        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("path")
            .datum(pricesData)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.time) })
            .y(function(d) { return y(d.price) })
            );

        svg
            .append("g")
            .selectAll("dot")
            .data(pricesData)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return x(d.time) } )
            .attr("cy", function(d) { return y(d.price) } )
            .attr("r", 1)
            .attr("fill", "#072ac6");
}

export default renderGraph;


