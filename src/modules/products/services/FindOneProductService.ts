import AppError from '@shared/errors/app-error';
import { getCustomRepository } from 'typeorm';
import Product from '../type-orm/entities/Product';
import { ProductsRepository } from '../type-orm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

class FindOneProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = productsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default FindOneProductService;
