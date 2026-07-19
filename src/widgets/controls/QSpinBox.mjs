import { QtWidget } from '../QtWidget.mjs';
export class QSpinBox extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.min = Number(props.min) || 0;
    this.props.max = Number(props.max) || 100;
    this.props.value = Number(props.value) || 0;
    if (props.onChange && typeof props.onChange !== 'function') throw new Error("QTxmljs: onChange must be a function");
    this.onChange = props.onChange || null;
  }
}
