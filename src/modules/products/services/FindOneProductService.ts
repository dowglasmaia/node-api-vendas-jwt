import AppError from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import Product from '../type-orm/entities/Product';
import ProductRepository from '../type-orm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

class FindOneProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default FindOneProductService;
