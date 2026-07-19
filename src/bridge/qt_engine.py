import sys
import json
import threading
from PySide6.QtWidgets import (
    QApplication, QMainWindow, QDialog, QWidget, QFrame, QScrollArea,
    QHBoxLayout, QVBoxLayout, QGridLayout, QLabel, QProgressBar,
    QPushButton, QCheckBox, QRadioButton, QSlider, QSpinBox, QLineEdit, QTextEdit,
    QComboBox, QListWidget, QTreeWidget, QTableWidget
)

app = QApplication(sys.argv)
widgets_pool = {}
layouts_pool = {}
main_window = None

def listen_js_commands():
    global main_window
    while True:
        try:
            line = sys.stdin.readline().strip()
            if not line:
                continue
            
            data = json.loads(line)
            cmd = data.get("command")
            
            if cmd == "create":
                w_type = data["widget"]
                w_id = data["id"]
                
                if w_type == "QMainWindow":
                    main_window = QMainWindow()
                    main_window.setWindowTitle(data.get("title", "Window"))
                    main_window.resize(int(data.get("width", 800)), int(data.get("height", 600)))
                    central = QWidget()
                    layout = QVBoxLayout()
                    central.setLayout(layout)
                    main_window.setCentralWidget(central)
                    layouts_pool[w_id] = layout
                    widgets_pool[w_id] = main_window
                    
                else:
                    w_class = getattr(sys.modules['PySide6.QtWidgets'], w_type, None)
                    if w_class:
                        instance = w_class()
                        
                        if hasattr(instance, "setText") and "text" in data:
                            instance.setText(data["text"])
                        elif hasattr(instance, "setPlaceholderText") and "placeholder" in data:
                            instance.setPlaceholderText(data["placeholder"])
                        elif hasattr(instance, "setValue") and "value" in data:
                            instance.setValue(int(data["value"]))
                            
                        parent_id = data.get("parent_id")
                        target_layout = layouts_pool.get(parent_id) or layouts_pool.get(list(layouts_pool.keys())[0])
                        
                        if "Layout" in w_type:
                            if hasattr(target_layout, "addLayout"):
                                target_layout.addLayout(instance)
                            layouts_pool[w_id] = instance
                        else:
                            if hasattr(target_layout, "addWidget"):
                                target_layout.addWidget(instance)
                            
                            if w_type in ["QFrame", "QWidget", "QScrollArea"]:
                                sub_layout = QVBoxLayout()
                                instance.setLayout(sub_layout)
                                layouts_pool[w_id] = sub_layout
                                
                        widgets_pool[w_id] = instance
                        
            elif cmd == "bind":
                w_id = data["id"]
                if w_id in widgets_pool and hasattr(widgets_pool[w_id], "clicked"):
                    widgets_pool[w_id].clicked.connect(
                        lambda checked=False, id=w_id: print(json.dumps({"event": "trigger", "id": id}), flush=True)
                    )
                    
            elif cmd == "update":
                w_id, key, val = data["id"], data["key"], data["value"]
                if w_id in widgets_pool:
                    instance = widgets_pool[w_id]
                    if key == "text" and hasattr(instance, "setText"):
                        instance.setText(val)
                    elif key == "value" and hasattr(instance, "setValue"):
                        instance.setValue(int(val))
                        
            elif cmd == "run":
                if main_window:
                    main_window.show()
                    
        except Exception as e:
            pass

threading.Thread(target=listen_js_commands, daemon=True).start()
sys.exit(app.exec())
