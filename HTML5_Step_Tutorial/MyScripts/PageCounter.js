//
// @file 
// @brief  localStorageを使って、ページ閲覧回数を保存する
// @author ongaeshi
// @date   2011/01/23

var PageCounter = (function() {
  function key() {
    return document.location.pathname;
  }

  function get(name) {
    if (!name)
      name = key();
      
    v = window.localStorage.getItem(name);

    if (v)
      return parseInt(window.localStorage.getItem(name));
    else
      return 0;
  }
  
  function set(v) {
    window.localStorage.setItem(key(), v);
  }
  
  function _dump() {
    //console.log(key() + " : " + get());
  }
  
  return {
    inc: function() {
      set(get() + 1);
      _dump();
    },
    
    count: function(name) {
      return get(name);
    },
    
    clear: function() {
      window.localStorage.clear();
      _dump();
    },

    clearNotify: function(url) {
      if (confirm("記録をクリアします、よろしいですか？")) {
        PageCounter.clear();
        location.replace(url);
      }
    },

    dump: function() {
      _dump();
    }
  };
})();


// スクリプト読み込みのタイミングで+1   
PageCounter.inc();

