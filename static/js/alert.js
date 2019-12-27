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

function Giveup_add() {
    if (confirm("確定放棄新增活動，點擊確定(放棄新增，返回管理頁面)或取消(繼續新增)")) {
        location.href = "activity_manager";
    }
}

function Giveup_change() {
    if (confirm("確定放棄修改活動，點擊確定(放棄修改，返回管理頁面)或取消(繼續修改)")) {
        location.href = "activity_add_on";
    }
}

function Giveup_change_choice() {
    if (confirm("確定放棄修改活動，點擊確定(返回管理頁面)或取消(繼續選擇)")) {
        location.href = "activity_add_on";
    }
}

function Giveup_delete() {
    if (confirm("確定放棄刪除活動，點擊確定(返回管理頁面)或取消(繼續選擇)")) {
        location.href = "activity_change_on";
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
    location.href = "activity_delete_on";
}

function Complete() {
    alert("申請完成");
    location.href = "activity_manager";
}

function Complete_add() {
    alert("新增完成");
    location.href = "activity_add_on";
}

function Complete_change() {
    alert("修改完成");
    location.href = "activity_change_on";
}

function Complete_change_choice() {
    alert("活動已選擇");
    location.href = "activity_change";
}

function Complete_delete() {
    alert("刪除完成");
    location.href = "activity_delete_on";
}