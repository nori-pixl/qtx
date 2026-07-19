import { QtWidget } from '../QtWidget.mjs';
export class QComboBox extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.items = Array.isArray(props.items) ? props.items : [];
    this.props.currentIndex = Number(props.currentIndex) || 0;
    if (props.onSelect && typeof props.onSelect !== 'function') throw new Error("QTxmljs: onSelect must be a function");
    this.onSelect = props.onSelect || null;
  }
}
