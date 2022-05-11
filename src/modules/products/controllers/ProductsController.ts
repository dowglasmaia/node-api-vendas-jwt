/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import FindOneProductService from '../services/FindOneProductService';
import ListProductService from '../services/ListProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const service = new ListProductService();

    const products = await service.execute();

    return response.json(products);
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const service = new FindOneProductService();

    const product = await service.execute({ id });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const service = new CreateProductService();

    const product = await service.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const { id } = request.params;

    const service = new UpdateProductService();

    const product = await service.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new DeleteProductService();

    await service.execute({ id });

    return response.json([]);
  }
}
