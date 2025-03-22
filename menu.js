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
    let options = [
        { label: '1', width: 5000, height: 4000 },
        { label: '2', width: 6000, height: 4500 },
        { label: '3', width: 7000, height: 5000 },
        { label: '4', width: 8000, height: 5500 },
        { label: '5', width: 9000, height: 6000 }
    ];

    options.forEach(opt => {
        let option = document.createElement('option');
        option.value = JSON.stringify({ width: opt.width, height: opt.height });
        option.innerText = opt.label;
        select.appendChild(option);
    });

    let btnApply = document.createElement('button');
    btnApply.innerText = 'Apply';
    btnApply.style.marginLeft = '5px';
    btnApply.onclick = function () {
        let selectedOption = JSON.parse(select.value);
        window.localStorage.setItem('customWidth', selectedOption.width);
        window.localStorage.setItem('customHeight', selectedOption.height);
        location.reload();
    };

    menu.appendChild(document.createTextNode('Select View: '));
    menu.appendChild(select);
    menu.appendChild(btnApply);

    document.body.appendChild(menu);
}

(function () {
    let storedWidth = localStorage.getItem('customWidth');
    let storedHeight = localStorage.getItem('customHeight');
    if (storedWidth && storedHeight) {
        let e = window.innerWidth / parseFloat(storedWidth),
            i = window.innerHeight / parseFloat(storedHeight);
        window.cameras?.main?.setZoom(Math.max(e, i));
    }
    createNavigationBox();
})();
