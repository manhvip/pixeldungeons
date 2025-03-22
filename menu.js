function createNavigationBox() {
    let menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '10px';
    menu.style.right = '10px';
    menu.style.background = 'rgba(0, 0, 0, 0.8)';
    menu.style.color = 'white';
    menu.style.padding = '10px';
    menu.style.borderRadius = '5px';
    menu.style.zIndex = '9999';

    let select = document.createElement('select');
    select.style.color = 'black'; // Mặc định chữ màu đen
    select.style.background = 'white';
    select.style.padding = '5px';
    select.style.border = '1px solid gray';
    select.style.fontSize = '14px';

    let options = [
        { label: '1', width: 5000, height: 4000 },
        { label: '2', width: 6000, height: 4500 },
        { label: '3', width: 7000, height: 5000 },
        { label: '4', width: 8000, height: 5500 },
        { label: '5', width: 9000, height: 6000 }
    ];

    let defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.innerText = "Chọn một khung hình...";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    options.forEach(opt => {
        let option = document.createElement('option');
        option.value = JSON.stringify({ width: opt.width, height: opt.height });
        option.innerText = opt.label;
        select.appendChild(option);
    });

    // Khi chọn một tùy chọn, áp dụng ngay lập tức và đổi màu chữ
    select.onchange = function () {
        select.style.color = 'red'; // Đổi màu chữ thành đỏ sau khi chọn
        let selectedOption = JSON.parse(select.value);
        window.localStorage.setItem('customWidth', selectedOption.width);
        window.localStorage.setItem('customHeight', selectedOption.height);
        applyZoom(selectedOption.width, selectedOption.height);
    };

    menu.appendChild(document.createTextNode('Select View: '));
    menu.appendChild(select);
    document.body.appendChild(menu);
}

// Hàm cập nhật zoom ngay lập tức mà không cần reload
function applyZoom(width, height) {
    let e = window.innerWidth / width,
        i = window.innerHeight / height;
    window.cameras?.main?.setZoom(Math.max(e, i));
}

(function () {
    let storedWidth = localStorage.getItem('customWidth');
    let storedHeight = localStorage.getItem('customHeight');
    if (storedWidth && storedHeight) {
        applyZoom(parseFloat(storedWidth), parseFloat(storedHeight));
    }
    createNavigationBox();
})();
