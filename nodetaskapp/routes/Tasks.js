var express = require('express');  
var router = express.Router();  

var Task = require('../models/Task');  
var task_controller = require('../controllers/taskController'); 


router.get('/Tasks', task_controller.task_list);     
router.get('/Addtask', task_controller.task_create_get); 
router.post('/Addtask', task_controller.task_create_post);     
router.get('/:id', task_controller.task_details); 
router.get('/deletetask/:id', task_controller.task_delete_get);

module.exports = router;


/*
router.post('/', function(req, res, next) {  
Task.addTask(req.body, function(err, count) {  
if (err) {  
res.json(err);  
} else {  
res.json(req.body); //or return count for 1 & 0  
}  
});  
});  

router.delete('/:id', function(req, res, next) {  
Task.deleteTask(req.params.id, function(err, count) {  
if (err) {  
res.json(err);  
} else {  
res.json(count);  
}  
});  
});  

router.put('/:id', function(req, res, next) {  
Task.updateTask(req.params.id, req.body, function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
});  
*/
module.exports = router;