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

function Giveup_all() {
    if (confirm("確定放棄本次申請，點擊確定(放棄申請)或取消(繼續申請)")) {
        location.href = "activity_manager";
    }
}

function Giveup_index() {
    if (confirm("確定放棄本次申請，點擊確定(放棄申請)或取消(繼續申請)")) {
        location.href = "index";
    }
}

function Giveup_chat() {
    if (confirm("確定放棄本次申請，點擊確定(放棄申請)或取消(繼續申請)")) {
        location.href = "chatroom";
    }
}

function Giveup_personality() {
    if (confirm("確定放棄本次申請，點擊確定(放棄申請)或取消(繼續申請)")) {
        location.href = "personality";
    }
}

function ok() {
    alert("系統偵測是管理員，請點擊確定(進入活動管理)");
    location.href = "activity_manager";
}

function ok_login() {
    alert("系統偵測是管理員，請點擊確定(進入活動管理)");
    location.href = "activity_add_on";
}

function Complete() {
    alert("申請完成");
    location.href = "activity_manager";
}

function Complete_add() {
    alert("新增完成");
    location.href = "activity_add_on";
}