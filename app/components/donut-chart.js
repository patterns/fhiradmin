import Component from '@glimmer/component';

export default class DonutChart extends Component {

  get fractions() {
    return this.args.segments.map((a) => a.count / this.dataTotal);
  }

  get dataTotal() {
    const reducer = (acc, cur) => acc + parseInt(cur.count, 10);
    return this.args.segments.reduce(reducer, 0);
  }

}
