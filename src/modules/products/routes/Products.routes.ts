/* eslint-disable prettier/prettier */
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsContrller = new ProductsController();

productsRouter.get('/', productsContrller.findAll);

//Validação de Dados 'PARAMS' com o 'celebrate'
productsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsContrller.findById,
);

productsRouter.post('/', productsContrller.create);

productsRouter.put('/:id', productsContrller.update);

productsRouter.delete('/:id', productsContrller.delete);

export default productsRouter;
