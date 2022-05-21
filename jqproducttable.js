$(document).ready(function(){
  var sku;
  var name;
  var price;
  var quantity
  var row;
  var txt1; 
  var txt2;
  var txt3;
  var txt4;
  var txt5;
  var flag = 1;
  $('#add_product').click(function(){
     var flag1 = add_update();
     if(flag1 != 0){
      var tr = $("<tr></tr>");
      tr.attr('id',txt1)
      tr.append(txt1);
      tr.append(txt2);
      tr.append(txt3);
      tr.append(txt4);
      tr.append(txt5);
      $("#table").append(tr);

      $('#product_sku').val("");
      $('#product_name').val("");
      $('#product_price').val("");
      $('#product_quantity').val("");
      $('.error').hide();
      $('.success').show();
      }
   });
   function add_update() {
      flag = 1;

      sku = $('#product_sku').val();
      name = $('#product_name').val();
      price = $('#product_price').val();
      quantity = $('#product_quantity').val();
    
    // Create text with jQuery

     txt1 = $("<td></td>").html(sku);
     txt2 = $("<td></td>").html(name);
     txt3 = $("<td></td>").html(price);
     txt4 = $("<td></td>").html(quantity);
     txt5 = $("<td></td>").html('<a href="#" style="margin-right:10px" class="edit">Edit</a><a href="#" class="del">Delete</a>');
  //    flag = 1;
     if(sku == ""){
       flag = 0;
       $('#product_sku').css("border-color", "red");
       $('#sku').text(' * SKU field is empty').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else if(sku != Number(sku)){
       flag = 0;
       $('#product_sku').css("border-color", "red");
       $('#sku').text('');
       $('#sku').text(' * SKU field should be integer').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else {
       $('#product_sku').css("border-color", "black");
       $('#sku').text('')
     }
     if(name == ""){
       flag = 0; 
       $('#product_name').css("border-color", "red");
       $('#name').text(' * Name field is empty').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else if(name == Number(name)){
       flag = 0;
       $('#product_name').css("border-color", "red");
       $('#name').text('');
       $('#name').text(' * Name field should be string').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else {
       $('#product_name').css("border-color", "black");
       $('#name').text('')
     }
     if(price == ""){
       flag = 0;
       $('#product_price').css("border-color", "red");
       $('#price').text(' * Price field is empty').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else if(price != Number(price)){
       flag = 0;
       $('#product_price').css("border-color", "red");
       $('#price').text('');
       $('#price').text(' * Price field should be integer').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else {
       $('#product_price').css("border-color", "black");
       $('#price').text('');
     }
     if(quantity == ""){
       flag = 0;
       $('#product_quantity').css("border-color", "red");
       $('#quantity').text(' * Quantity field is empty').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else if(quantity != Number(quantity)){
       flag = 0;
       $('#product_quantity').css("border-color", "red");
       $('#quantity').text('');
       $('#quantity').text(' * Quantity field should be integer').css('color','red');
       $('.success').hide();
       $('.error').show();}
     else {
       $('#product_quantity').css("border-color", "black");
       $('#quantity').text('');
     }
  //    if(flag != 0){
  //    var tr = $("<tr></tr>");
  //    tr.attr('id',txt1)
  //    tr.append(txt1);
  //    tr.append(txt2);
  //    tr.append(txt3);
  //    tr.append(txt4);
  //    tr.append(txt5);
  //    $("#table").append(tr);

  //    $('#product_sku').val("");
  //    $('#product_name').val("");
  //    $('#product_price').val("");
  //    $('#product_quantity').val("");
  //    $('.error').hide();
  //    $('.success').show();
  //    }
     return flag;
   }
   $('#product_list').on('click', '.del', function(event){
      console.log($(event.target).parent());
      if(confirm("Do you want to delete") == true) {
      //confirm("Delete") ;
      $(event.target).parent().parent().remove();
      confirm("Deleted Successfully");
      }
   });

   $('#product_list').on('click', '.edit', function(event){
       row = $(event.target).parent().parent();
      
       var edit_sku = row.find('td:eq(0)').text();
       var edit_name = row.find('td:eq(1)').text();
       var edit_price = row.find('td:eq(2)').text();
       var edit_quantity = row.find('td:eq(3)').text();

       $('#product_sku').val(edit_sku);
       $('#product_name').val(edit_name);
       $('#product_price').val(edit_price);
       $('#product_quantity').val(edit_quantity);

       $('#add_product').hide();
       $('#update_product').show();
       // var id = row.attr('id');
       row.empty();


   });
   
   $('#update_product').on('click', function(){
      //  var sku = $('#product_sku').val();
      //  var name = $('#product_name').val();
      //  var price = $('#product_price').val();
      //  var quantity = $('#product_quantity').val();
 
      //  Create text with jQuery
 
      //  var txt1 = $("<td></td>").html(sku);
      //  var txt2 = $("<td></td>").html(name);
      //  var txt3 = $("<td></td>").html(price);
      //  var txt4 = $("<td></td>").html(quantity);
      //  var txt5 = $("<td></td>").html('<a href="#" style="margin-right:10px" class="edit">Edit</a><a href="#" class="del">Delete</a>');
       
       
       var flag2 = add_update();
     if(flag2 != 0){
       row.append(txt1);
       row.append(txt2);
       row.append(txt3);
       row.append(txt4);
       row.append(txt5);
       row.show();

       $('#product_sku').val("");
       $('#product_name').val("");
       $('#product_price').val("");
       $('#product_quantity').val("");

       $('#add_product').show();
       $('#update_product').hide();
       $('.error').hide();
      $('.success').show();
     }
   });
   $('#notification').on('click', '.close', function(event){
       console.log(event.target);
       $(event.target).parent().hide();
   });
});
