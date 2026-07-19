import { QtWidget } from '../QtWidget.mjs';
export class QPushButton extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.text = props.text || "Button";
    if (props.onClick && typeof props.onClick !== 'function') throw new Error("QTxmljs: onClick must be a function");
    this.onClick = props.onClick || null;
  }
}
