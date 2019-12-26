function Manager() {
    if (confirm("系統偵測非管理員無法進入，點擊確定(申請管理權限)或取消(返回)")) {
        location.href= "activity_manager_application";
    }
}