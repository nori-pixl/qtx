import { QtWidget } from '../QtWidget.mjs';
export class QLabel extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.text = props.text || "";
    this.props.alignment = props.alignment || "Left";
  }
}
