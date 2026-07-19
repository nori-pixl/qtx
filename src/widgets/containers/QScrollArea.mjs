import { QtWidget } from '../QtWidget.mjs';
export class QScrollArea extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.resizable = props.resizable !== false;
  }
}
