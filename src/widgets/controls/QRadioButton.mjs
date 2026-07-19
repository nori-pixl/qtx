import { QtWidget } from '../QtWidget.mjs';
export class QRadioButton extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.text = props.text || "";
    this.props.checked = !!props.checked;
    if (props.onChange && typeof props.onChange !== 'function') throw new Error("QTxmljs: onChange must be a function");
    this.onChange = props.onChange || null;
  }
}
