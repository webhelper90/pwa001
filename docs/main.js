function click1(event) {
    // /** @type{ons.OnsNavigatorElement} */
    // const onsNavigator1 = document.getElementById('ons-navigator1');
    // onsNavigator1.pushPage('page4.html');

    pushPage('page4.html')
}

function initApp(event) {
var myNavigator = document.querySelector('#myNavigator'); // navigatorのIDを指定

  ons.backbutton().on('backbutton', function(event) {
    if (myNavigator.canPopPage()) { // 戻るページがあるか確認
      myNavigator.popPage();
    } else {
      // ルートページにいる場合の処理
      ons.notification.confirm({
        message: 'アプリを終了しますか？',
        buttonLabels: ['はい', 'いいえ'],
        callback: function(idx) {
          if (idx === 0) { // 'はい'が選択された場合
            navigator.app.exitApp(); // アプリを終了 (Cordovaが必要)
          }
        }
      });
    }

    // デフォルトの挙動をキャンセル
    event.callParentHandler();
  });
}

function popstate1(event) {
    /** @type{ons.OnsNavigatorElement} */
    const onsNavigator1 = document.getElementById('ons-navigator1');

    if (onsNavigator1.pages.length > 1) {  // 戻るページがあるか確認
        onsNavigator1.popPage();
    } else {
        // ホームページの表示など、ルートページでの処理
        // 例: ホームページに遷移
        window.location.href = '#page5'; // ホームページのURLを設定
        onsNavigator1.resetPage('page5.html');  // home.htmlにリセット
    }
}

function pushPage(page) {
    /** @type{ons.OnsNavigatorElement} */
    const onsNavigator1 = document.getElementById('ons-navigator1');

    const state = { page: page };
    const title = ''; // 必要に応じて設定
    const url = `#${page}`; // ハッシュを使ってページを区別
    history.pushState(state, title, url);
    onsNavigator1.pushPage(page);
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
