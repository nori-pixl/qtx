export class QtWidget {
  constructor(id, props = {}) {
    if (!id) throw new Error("QTxmljs: id is required");
    this.id = id;
    this.props = props;
    this.children = [];
  }
  appendChild(childWidget) {
    if (!(childWidget instanceof QtWidget)) {
      throw new Error("QTxmljs: Invalid child widget type");
    }
    this.children.push(childWidget);
  }
}
