const express = require('express');
const router = express.Router();

router
  .get('/', (req, res, next) => {
    res.status(200).json({
      message: 'Orders were fetched'
    });
  })

  /* 
 *  POST /orders/
 */

  .post('/', (req, res, next) => {
    res.status(201).json({
      message: 'Order was created'
    });
  })
  /* 
 *  GET /orders/:orderId
 */
  .get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;

    res.status(201).json({
      message: `Order with ID ${id} was fetched`,
      id: id
    });
  });

module.exports = router;
