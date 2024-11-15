function popstate1(event) {
    
    /** @type{ons.OnsNavigatorElement} */
    const onsNavigator1 = document.getElementById('ons-navigator1');

    if (onsNavigator1.pages.length > 1) {  // 戻るページがあるか確認
        onsNavigator1.popPage();
        
        //ブラウザのヒストリーから1つ除外する
        //history.go(-1); // ブラウザのヒストリーから1つ除外する
    } else {
        // ホームページの表示など、ルートページでの処理
        // 例: ホームページに遷移
        //window.location.href = '#page5'; // ホームページのURLを設定
        onsNavigator1.resetToPage('page5.html');  // home.htmlにリセット
    }

}

function pushPage(page) {
    /** @type{ons.OnsNavigatorElement} */
    const onsNavigator1 = document.getElementById('ons-navigator1');

    const state = { page: page };
    const title = ''; // 必要に応じて設定
    //const url = `#${page}`; // ハッシュを使ってページを区別
    //history.pushState(state, title, url);
    history.pushState(state, '');
    onsNavigator1.pushPage(page);
}


function click1(event) {
    // /** @type{ons.OnsNavigatorElement} */
    // const onsNavigator1 = document.getElementById('ons-navigator1');
    // onsNavigator1.pushPage('page4.html');

    pushPage('page4.html')
}

function load1(event) {
    ons.ready(() => {
        ons.setDefaultDeviceBackButtonListener((event) => {
            popstate1(event);
        });
    });
}

function back1(event) {
    /** @type{ons.OnsNavigatorElement} */
    const onsNavigator1 = document.getElementById('ons-navigator1');

    if (onsNavigator1.pages.length > 1) {  // 戻るページがあるか確認
        onsNavigator1.popPage();

        //ブラウザのヒストリーから1つ除外する
        history.go(-1); // ブラウザのヒストリーから1つ除外する
    } else {
        // ホームページの表示など、ルートページでの処理
        // 例: ホームページに遷移
        //window.location.href = '#page5'; // ホームページのURLを設定
        onsNavigator1.resetToPage('page5.html');  // home.htmlにリセット
    }

    event.stopPropagation();
}

window.addEventListener('popstate', popstate1);
document.addEventListener('init', (event) => {
    let page = event.target;
    if (page.id === 'ons-page5') {
        let onsbutton1_element = document.querySelector('#ons-button1');
        if(onsbutton1_element) {
            onsbutton1_element.addEventListener('click', click1);
            page.addEventListener('destroy', function(event) {
                onsbutton1_element.removeEventListener('click', click1);
            }, { 'once' : true });
        }
    }
});
document.addEventListener('init', (event) => {
    let page = event.target;
    if (page.id === 'ons-page4') {
        let onsbackbutton1_element = document.querySelector('#ons-back-button1');
        if(onsbackbutton1_element) {
            onsbackbutton1_element.addEventListener('click', back1);
            page.addEventListener('destroy', function(event) {
                onsbackbutton1_element.removeEventListener('click', back1);
            }, { 'once' : true });
        }
    }
});
