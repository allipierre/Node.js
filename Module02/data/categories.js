/*var filename = 'https://apex.oracle.com/pls/apex/pierrealli/hr/employees/';
var callData = function() {
  $.ajax({
    type: 'GET',
    url: filename,
    dataType: 'json',
    success: function(pData) {
      for (var i = 0; i < pData.items.length; i++) {
        console.log(pData.items[0].ename);
      }
    }
  });
}

$(document).ready(function(){
  var callData_1 = callData();
  console.log(callData_1);

});*/

//categories Module
var categories = {};
categories["programmierung"] = {
  title: 'Programmierung',
  image: '/images/programmierung.jpg',
  subtitle: 'test',
  count: 6
};
categories["audiovideo"] = {
  title: 'Video & Audio',
  image: '/images/audiovideo.jpg',
  subtitle: '',
  count: 1
};
categories["foto"] = {
  title: 'Bildbearbeitung & Fotografie',
  image: '/images/foto.jpg',
  subtitle: '',
  count: 1
};
categories["business"] = {
  title: 'Business',
  image: '/images/business.jpg',
  subtitle: '',
  count: 1
};

exports.list = categories;
