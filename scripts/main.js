(function(window){
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  //displays the value when the range slider is toggled
  var rangeSlider = function() {
  var slider = $('.range-slider');
  var range = $('.range-slider__range');
  var value = $('.range-slider__value');

  slider.each(function() {

    value.each(function() {
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function() {
      $(this).next(value).html(this.value);
    });
  });
};
rangeSlider();

//code for modal

$('input[name="size"]').change(function() {
 if($(this).is(':checked') && $(this).val() == 'venti') {
   $('#myModal').modal('show');
  /** $('input[name="flavorShot"]').change(function() {
    if($(this).val == !'none' {
      $('input[name="strength"]').change(function() {
       if($(this).val()=='100'){

     }
   }
 }**/
 }
 }
);



//end code for modal




  formHandler.addSubmitHandler(
  //set value of this and pass the data object
  function (data){
  myTruck.createOrder.call(myTruck, data);
  checkList.addRow.call(checkList, data);
});

 formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);
