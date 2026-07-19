import { QtWidget } from '../QtWidget.mjs';
export class QTextEdit extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.text = props.text || "";
    if (props.onChange && typeof props.onChange !== 'function') throw new Error("QTxmljs: onChange must be a function");
    this.onChange = props.onChange || null;
  }
}
