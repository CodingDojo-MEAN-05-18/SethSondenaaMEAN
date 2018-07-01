const taskController = require('../../controllers/tasks');
const router = require('express').Router();

router.get('/', taskController.index);    
router.post('/', taskController.create);    
router.get('/:id', taskController.show);    
router.put('/:id', taskController.update);    
router.delete('/:id', taskController.destroy);

module.exports = router;