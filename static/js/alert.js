function Manager() {
    if (confirm("系統偵測非管理員無法進入，請點擊確定(申請管理權限)或取消(返回)")) {
        location.href = "activity_manager_application";
    }
}

function Giveup() {
    if (confirm("確定放棄本次申請，點擊確定(放棄申請)或取消(繼續申請)")) {
        location.href = "activity";
    }
}

function Complete() {
    alert("申請完成");
    location.href = "activity_manager";
}