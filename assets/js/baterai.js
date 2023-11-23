const batteryLevelElement = document.getElementById('battery-level');
const batteryStatusElement = document.getElementById('battery-status');
const batteryIconElement = document.getElementById('battery-icon');

if ('getBattery' in navigator) {
  navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
      batteryLevelElement.textContent = `${Math.floor(battery.level * 100)}%`;

      if (battery.charging) {
        batteryStatusElement.textContent = ' (Plug-In)';
        batteryIconElement.className = 'fa fa-plug';
      } else {
        batteryStatusElement.textContent = ' (Not Plug-In)';
        batteryIconElement.className = 'fa fa-battery-half';
      }
    }

    updateBatteryStatus();

    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
  });
} else {
  batteryLevelElement.textContent = 'Not supported';
  batteryStatusElement.textContent = '';
  batteryIconElement.className = '';
}
