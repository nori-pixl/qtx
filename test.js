import qtx, { 
  QMainWindow, 
  QVBoxLayout, 
  QLabel, 
  QLineEdit, 
  QPushButton 
} from './src/index.mjs';

try {
  qtx.init();

  const mainWindow = new QMainWindow("main_window", { 
    title: "Enterprise Application Console", 
    width: 600,
    height: 450 
  });

  const mainLayout = new QVBoxLayout("main_layout");
  mainWindow.appendChild(mainLayout);

  const statusLabel = new QLabel("status_lbl", { 
    text: "System Ready. Please Enter Target ID." 
  });
  
  const tokenInput = new QLineEdit("token_input", { 
    placeholder: "Input security token key here..." 
  });
  
  const executeBtn = new QPushButton("execute_btn", { 
    text: "Connect to Server" 
  });

  executeBtn.onClick = () => {
    console.log("ActionTriggered: Processing secure sequence.");
    
    qtx.setProp("status_lbl", "text", "Authenticating credentials...");
    qtx.setProp("token_input", "text", "Access Denied");
    
    setTimeout(() => {
      qtx.setProp("status_lbl", "text", "Connection Status: Established Successfully.");
    }, 1500);
  };

  mainLayout.appendChild(statusLabel);
  mainLayout.appendChild(tokenInput);
  mainLayout.appendChild(executeBtn);

  qtx.load(mainWindow);
  qtx.run("main_window");

  console.log("QTxmljs: Applied full application dependency injection tree.");

} catch (error) {
  console.error("Fatal Application Failure: ", error.message);
}

