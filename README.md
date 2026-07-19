# QTxmljs

A strict and safe JavaScript framework to control Qt widgets natively via Node.js.

## Directory Structure

```text
qtxmljs-project/
├── package.json
├── requirements.txt
├── README.md
├── test.mjs
└── src/
    ├── index.mjs
    ├── bridge/
    │   ├── connector.mjs
    │   └── qt_engine.py
    └── widgets/
        ├── QtWidget.mjs
        ├── containers/
        │   ├── QMainWindow.mjs
        │   ├── QDialog.mjs
        │   ├── QWidget.mjs
        │   ├── QFrame.mjs
        │   └── QScrollArea.mjs
        ├── layouts/
        │   ├── QHBoxLayout.mjs
        │   ├── QVBoxLayout.mjs
        │   └── QGridLayout.mjs
        ├── displays/
        │   ├── QLabel.mjs
        │   └── QProgressBar.mjs
        ├── controls/
        │   ├── QPushButton.mjs
        │   ├── QCheckBox.mjs
        │   ├── QRadioButton.mjs
        │   ├── QSlider.mjs
        │   ├── QSpinBox.mjs
        │   ├── QLineEdit.mjs
        │   └── QTextEdit.mjs
        └── data_views/
            ├── QComboBox.mjs
            ├── QListWidget.mjs
            ├── QTreeWidget.mjs
            └── QTableWidget.mjs
```

## Setup

Install required Python modules:

```bash
pip install -r requirements.txt
```

## Usage Example

Create a script file like `test.mjs`:

```javascript
import qtx, { 
  QMainWindow, 
  QVBoxLayout, 
  QLabel, 
  QPushButton 
} from './src/index.mjs';

qtx.init();

const mainWindow = new QMainWindow("main_window", { 
  title: "Application Window", 
  width: 500,
  height: 400 
});

const mainLayout = new QVBoxLayout("main_layout");
mainWindow.appendChild(mainLayout);

const titleLabel = new QLabel("title_lbl", { text: "Hello Qt" });
const actionBtn  = new QPushButton("action_btn", { text: "Click Me" });

actionBtn.onClick = () => {
  console.log("Button clicked!");
};

mainLayout.appendChild(titleLabel);
mainLayout.appendChild(actionBtn);

qtx.load(mainWindow);
qtx.run("main_window");
```

Run the application:

```bash
node test.mjs
```
