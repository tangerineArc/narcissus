import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function LineChart({ data, limits }: LineChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 260;
    const height = 170;
    const margin = { top: 30, right: 30, bottom: 10, left: 30 };

    svg.selectAll("*").remove();

    svg.attr("width", width).attr("height", height);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.phase) as [number, number])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain(limits)
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<ChartPoint>()
      .x((d) => x(d.phase))
      .y((d) => y(d.point));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("class", "animate-pulse")
      .attr("stroke", "#ffffd199")
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("stroke-dasharray", "2, 2");

    svg
      .selectAll(".data-point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-point")
      .attr("cx", (d) => x(d.phase))
      .attr("cy", (d) => y(d.point))
      .attr("r", 5)
      .attr("fill", "#ffffd1");

    svg
      .selectAll(".data-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "data-label")
      .attr("x", (d) => x(d.phase))
      .attr("y", (d) => y(d.point) - 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#ffffd1")
      .text((d) => d.point);
  }, [data, limits]);

  return <svg ref={svgRef}></svg>;
}

type LineChartProps = {
  data: ChartPoint[];
  limits: number[];
};

type ChartPoint = {
  phase: number;
  point: number;
};
