var Pen = require('../models/pen');
// List of all Pens
exports.pens_list = async function(req, res) {
    try{
    thepens = await Pen.find();
    res.send(thepens);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/* for a specific Pen.
exports.pens_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Pen detail: ' + req.params.id);
};*/
// Handle Pen create on POST.
exports.pens_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Pen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"pen1":"Reybolds", "pen2":"Pen" , "pen_cost":89}
    document.pen1 = req.body.pen1;
    document.pen2 = req.body.pen2;
    document.pen_cost = req.body.pen_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Pen delete form on DELETE.
exports.pens_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await Pen.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };
  
// Handle pen update form on PUT.
/*exports.pen_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await pen.findById( req.params.id)
    // Do updates of properties
    if(req.body.pen1)
    toUpdate.pen1 = req.body.pen1;
    if(req.body.pen2) toUpdate.pen2 = req.body.pen2;
    if(req.body.pen_cost) toUpdate.pen_cost = req.body.pen_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };*/
  
   exports.pen_update_put = async function(req, res) {
    res.send('NOT IMPLEMENTED: Pen delete DELETE ' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.pens_view_all_Page = async function(req, res) {
    try{
    thepens = await Pen.find();
    res.render('pen', { title: 'Pen Search Results', results: thepens });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // for a specific pen.
exports.pen_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Pen.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };



   // Handle pen update form on PUT.
exports.pen_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Pen.findById( req.params.id)
    if(req.body.checkboxsale) 
      toUpdate.sale = true;
    else 
      toUpdate.same = false;
    // Do updates of properties
    if(req.body.pen1) toUpdate.pen1 = req.body.pen1;
    if(req.body.pen2) toUpdate.pen2 = req.body.pen2;
    if(req.body.pen_cost) toUpdate.pen_cost = req.body.pen_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   }; 


   // Handle Costume delete on DELETE.
exports.pen_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await Pen.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };

  // Handle a show one view with id specified by query
exports.pens_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await Pen.findById( req.query.id)
  res.render('pendetail',
  { title: 'Pen Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };



  // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pen_create_Page = function(req, res) {
console.log("create view")
try{
res.render('pencreate', { title: 'pen Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a costume.
// query provides the id
exports.pen_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await Pen.findById(req.query.id)
  res.render('penupdate', { title: 'pen Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle a delete one view with id from query
exports.pen_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await Pen.findById(req.query.id)
  res.render('pendelete', { title: 'pen Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  


   
