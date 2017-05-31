"use strict";
import React from 'react';
import ReactDOM from 'react-dom';


export default class SingleBarGraph extends React.Component {

  constructor(props) {

    super(props);

    this.graph = null;

    this.onWindowResize = this.onWindowResize.bind(this);

  }

  componentDidMount() {

    window.addEventListener('resize', this.onWindowResize);
    this.createGraph();
  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.onWindowResize);
  }

  componentDidUpdate() {

      this.createGraph();
  }

  onWindowResize(e) {

      this.forceUpdate();
  }


  render() {

      return (
          <div className="component-single-bar-graph">
          </div>
      );
  }

  createGraph() {

    var graph_selector = ReactDOM.findDOMNode(this);
    var width = 500;
    var height = 100;
    var scaleWidth = d3.scaleLinear();
    var bar_colors = ['#0e58e3', '#82dafb'];
    var value_colors = ['#fff', '#000'];

    var label_y = 35;

    if (!this.graph) {

        this.graph = d3.select(graph_selector)
            .append('svg')
            .attr('class', 'chart')
            .attr('width', width)
            .attr('height', height + label_y);
    }

    scaleWidth.domain([0, 100]).range([0, width]);
    var current_x = 0;

    this.graph.selectAll('g').remove();
    var bar = this.graph.selectAll('g')
        .data(this.props.data)
        .enter()
        .append('g');


        bar.append('rect')
            .attr('height', height)
            .attr('width', (d) => {
                return scaleWidth(d.value);
            })
            .attr('x', (d) => {

                var this_x = current_x;
                current_x+= scaleWidth(d.value);
                return this_x;
            })
            .attr('y', label_y)
            .style('fill', (d, index) => {
                return bar_colors[index];
            });

            bar.append('text')
                .attr('x', (d, index) => {
                    var padding = 10;
                    if (!index) {
                        return padding;
                    }
                    return width - padding;
                })
                .attr('y', (height / 2) + label_y)
                .attr('dy', '.35em')
                .attr('class', 'value keep-color')
                .style('fill', (d, index) => {
                    return value_colors[index];
                })
                .style('text-anchor', (d, index) => {

                    if (!index) {
                        return 'start';
                    }
                    return 'end';

                })
                .style('font-size', '15px')
                .text((d) => {
                    return d.value + '%';
                });

                bar.append('text')
            .attr('x', function(d, index) {
                if (!index) {
                    return 0;
                }
                return width;
            })
            .attr('y', label_y / 2)
            .attr('dy', '.35em')
            .attr('class', 'label')
            .style('fill', '#000')
            .style('text-anchor', (d, index) => {

                if (!index) {
                    return 'start';
                }
                return 'end';

            })
            .style('font-size', '18px')
            .text((d) => {
                return d.label;
            })

  }
}
