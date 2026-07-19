import { QtWidget } from '../QtWidget.mjs';
export class QFrame extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.shape = props.shape || "NoFrame";
  }
}
