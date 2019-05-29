import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class DonutSegment extends Component {
  @tracked cx = 80;
  @tracked cy = 80;
  @tracked radius = 60;
  @tracked colors = ['#96CCFF', '#FFDFDF', '#FBF1A9', '#A463F2', '#FFA3D7', '#9EEBCF'];

  get segFraction() {
    return this.args.fractions[this.args.index];
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get dashOffset() {
    let strokeDiff = this.segFraction * this.circumference;
    return this.circumference - strokeDiff;
  }

  get angleOffset() {
    // When index is zero, make the offset -90.
    // otherwise, add up the fractions before the current index.
    const reducer = (acc, cur, idx) => (idx < this.args.index) ? acc + cur : acc;
    let frac = this.args.fractions.reduce(reducer, 0);
    return -90 + frac * 360;
  }

  get color() {
    return this.colors[this.args.index];
  }

  get percentageLabel() {
    return `${Math.round(this.segFraction * 100)}%`;
  }

  get labelX() {
    let angle = this.segFraction * 360 / 2 + this.angleOffset;
    let radians = angle * (Math.PI / 180);
    return this.radius * Math.cos(radians) + this.cx;
  }

  get labelY() {
    let angle = this.segFraction * 360 / 2 + this.angleOffset;
    let radians = angle * (Math.PI / 180);
    return this.radius * Math.sin(radians) + this.cy;
  }

}
