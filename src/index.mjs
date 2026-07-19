import { QMainWindow } from './widgets/containers/QMainWindow.mjs';
import { QDialog } from './widgets/containers/QDialog.mjs';
import { QWidget } from './widgets/containers/QWidget.mjs';
import { QFrame } from './widgets/containers/QFrame.mjs';
import { QScrollArea } from './widgets/containers/QScrollArea.mjs';
import { QHBoxLayout } from './widgets/layouts/QHBoxLayout.mjs';
import { QVBoxLayout } from './widgets/layouts/QVBoxLayout.mjs';
import { QGridLayout } from './widgets/layouts/QGridLayout.mjs';
import { QLabel } from './widgets/displays/QLabel.mjs';
import { QProgressBar } from './widgets/displays/QProgressBar.mjs';
import { QPushButton } from './widgets/controls/QPushButton.mjs';
import { QCheckBox } from './widgets/controls/QCheckBox.mjs';
import { QRadioButton } from './widgets/controls/QRadioButton.mjs';
import { QSlider } from './widgets/controls/QSlider.mjs';
import { QSpinBox } from './widgets/controls/QSpinBox.mjs';
import { QLineEdit } from './widgets/controls/QLineEdit.mjs';
import { QTextEdit } from './widgets/controls/QTextEdit.mjs';
import { QComboBox } from './widgets/data_views/QComboBox.mjs';
import { QListWidget } from './widgets/data_views/QListWidget.mjs';
import { QTreeWidget } from './widgets/data_views/QTreeWidget.mjs';
import { QTableWidget } from './widgets/data_views/QTableWidget.mjs';

class QTxmljs {
  init() {
    console.log("QTxmljs: Engine initialized.");
  }
  load(rootWidget) {
    console.log("QTxmljs: Loading " + rootWidget.id);
  }
  run(id) {
    console.log("QTxmljs: Running " + id);
  }
}

const qtx = new QTxmljs();
export default qtx;
export {
  QMainWindow, QDialog, QWidget, QFrame, QScrollArea,
  QHBoxLayout, QVBoxLayout, QGridLayout,
  QLabel, QProgressBar,
  QPushButton, QCheckBox, QRadioButton, QSlider, QSpinBox, QLineEdit, QTextEdit,
  QComboBox, QListWidget, QTreeWidget, QTableWidget
};
