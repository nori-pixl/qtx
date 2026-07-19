import { QtWidget } from '../QtWidget.mjs';
export class QTableWidget extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.rows = Number(props.rows) || 0;
    this.props.cols = Number(props.cols) || 0;
    this.props.headers = Array.isArray(props.headers) ? props.headers : [];
  }
}
