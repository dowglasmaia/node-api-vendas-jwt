import { getCustomRepository } from 'typeorm';
import Product from '../type-orm/entities/Product';
import { ProductsRepository } from '../type-orm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.find();

    return products;
  }
}

export default ListProductService;
