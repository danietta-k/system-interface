// Empty JS for your own code to be here

window.onload= function() {

    document.getElementById('change_pass_btn').onclick = function() {
        openbox('change_pass_form', this);
        return false;
    };
};
function openbox(id, change_pass_btn) {
    var div = document.getElementById(id);
    if(div.style.display == 'block') {
        div.style.display = 'none';
        change_pass_btn.innerHTML = 'Изменить';
        _clear();
        }
    else {
        div.style.display = 'block';
        change_pass_btn.innerHTML = 'Отмена';
    }
}


function _clear(){
	document.getElementById('_old_pass').value = '';
	document.getElementById('_new_pass').value = '';
	document.getElementById('_repeat_new_pass').value = '';
}
