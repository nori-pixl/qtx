import { QtWidget } from '../QtWidget.mjs';
export class QMainWindow extends QtWidget {
  constructor(id, props = {}) {
    super(id, props);
    this.props.title = props.title || "MainWindow";
    this.props.width = Number(props.width) || 800;
    this.props.height = Number(props.height) || 600;
  }
}
