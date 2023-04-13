import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update.product.usecase";

const product = new Product("123", "product", 10);

const input = {
  id: product.id,
  name: "product Updated",
  price: 25.55
}

const MockRepository = () => {
  return {
    create: jest.fn(), 
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  }
}

describe("Init test for product update use case", () => {

  it("should update a product", async ()=> {
    const productRepository = MockRepository();
    const productUpdateUseCase = new UpdateProductUseCase(productRepository);

    const output = await productUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });

  it("should thrown an error when name is missing", async ()=> {
    const productRepository = MockRepository();
    const productUpdateUseCase = new UpdateProductUseCase(productRepository);

    input.name = "";

    await expect(productUpdateUseCase.execute(input)).rejects.toThrow("Name is required");
  });
});
