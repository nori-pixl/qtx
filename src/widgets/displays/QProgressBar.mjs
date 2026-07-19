import { QtWidget } from '../QtWidget.mjs';
export class QProgressBar extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.min = Number(props.min) || 0;
    this.props.max = Number(props.max) || 100;
    this.props.value = Number(props.value) || 0;
  }
}
