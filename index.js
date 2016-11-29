var myUrl = {
  iohData: "https://api.myjson.com/bins/2sxxw",
  iohDataFirstTwenty: "https://api.myjson.com/bins/3t97v",
  iohNCKU: "https://api.myjson.com/bins/11uij",
  iohSCU: "https://api.myjson.com/bins/43suj",
  iohKMU: "https://api.myjson.com/bins/vmqz",
  iohCJCU: "https://api.myjson.com/bins/4qy6j",
  iohNSYSU: "https://api.myjson.com/bins/1hq9v",
  iohNTU: "https://api.myjson.com/bins/31o5v",
  iohNCNU: "https://api.myjson.com/bins/ynjn",
  iohTTU: "https://api.myjson.com/bins/3y1ab",
};

var vm = new Vue({
  el: "#app",
  data: {
    ncku_talks: [],
    scu_talks: [],
    kmu_talks: [],
    cjcu_talks: [],
    nsysu_talks: [],
    ntu_talks: [],
    ncnu_talks: [],
    ttu_talks: [],
  },
  ready: function(){
    $.ajax({
      url: myUrl.iohNCKU,
      success: function(res){
        vm.ncku_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohSCU,
      success: function(res){
        vm.scu_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohKMU,
      success: function(res){
        vm.kmu_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohCJCU,
      success: function(res){
        vm.cjcu_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohNSYSU,
      success: function(res){
        vm.nsysu_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohNTU,
      success: function(res){
        vm.ntu_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohNCNU,
      success: function(res){
        vm.ncnu_talks = res
      }
    });
    $.ajax({
      url: myUrl.iohTTU,
      success: function(res){
        vm.ttu_talks = res
      }
    });
  }
});