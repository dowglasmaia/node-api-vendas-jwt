import { getCustomRepository } from 'typeorm';
import Product from '../type-orm/entities/Product';
import ProductRepository from '../type-orm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.find();

    return products;
  }
}

export default ListProductService;
