import { QtWidget } from '../QtWidget.mjs';
export class QListWidget extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.items = Array.isArray(props.items) ? props.items : [];
  }
}
