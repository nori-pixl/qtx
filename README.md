# XQTjs

Node.jsを介してQtウィジェットをネイティブに制御するための、厳格かつ安全なJavaScriptフレームワーク。


## ディレクトリ構造

```text
qtxmljs-project/
├── package.json
├── requirements.txt
├── README.md
├── test.mjs
└── src/

├── index.mjs

├── bridge/

│ ├── connector.mjs

│ └── qt_engine.py

└── widgets/

├── QtWidget.mjs

├── containers/

│ ├── QMainWindow.mjs

│ ├── QDialog.mjs

│ ├── QWidget.mjs

│ ├── QFrame.mjs

│ └── QScrollArea.mjs

├── layouts/

│ ├── QHBoxLayout.mjs

│ ├── QVBoxLayout.mjs

│ └── QGridLayout.mjs

├── displays/

│ ├── QLabel.mjs

│ └── QProgressBar.mjs

├── controls/

│ ├── QPushButton.mjs

│ ├── QCheckBox.mjs

│ ├── QRadioButton.mjs

│ ├── QSlider.mjs

│ ├── QSpinBox.mjs

│ ├── QLineEdit.mjs

│ └── QTextEdit.mjs

└── data_views/

├── QComboBox.mjs

├── QListWidget.mjs

├── QTreeWidget.mjs

└── QTableWidget.mjs
```

##セットアップ

必要なPythonモジュールをインストールします。

```bash
pip install -r requirements.txt
```

## 使用例

`test.mjs`のようなスクリプトファイルを作成します。

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

const actionBtn = new QPushButton("action_btn", { text: "Click Me" });

actionBtn.onClick = () => {

console.log("Button clicked!");

};

mainLayout.appendChild(titleLabel);

mainLayout.appendChild(actionBtn);

qtx.load(mainWindow);

qtx.run("main_window");

```

アプリケーションを実行します:

```bash
node test.mjs
```
