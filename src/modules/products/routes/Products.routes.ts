/* eslint-disable prettier/prettier */
import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsContrller = new ProductsController();

productsRouter.get('/', productsContrller.findAll);

productsRouter.get('/:id', productsContrller.findById);

productsRouter.post('/', productsContrller.create);

productsRouter.put('/:id', productsContrller.update);

productsRouter.delete('/:id', productsContrller.delete);

export default productsRouter;
