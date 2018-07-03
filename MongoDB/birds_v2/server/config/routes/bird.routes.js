const birdController = require('../../controllers/birds');
const router = require('express').Router();

router.get('/', birdController.index);    
router.get('/new', birdController.new);    
router.post('/', birdController.create);    
router.get('/:id', birdController.show);    
router.get('/edit/:id', birdController.edit);    
router.post('/:id', birdController.update);    
router.get('/destroy/:id', birdController.destroy);

module.exports = router;