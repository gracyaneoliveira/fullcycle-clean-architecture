import CreateProductUseCase from "./create.product.usecase";

const input = {
  name: "John",
  price: 10
}

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe("Init test create product use case", () => {

  it("should create a product", async ()=> {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    const output = await productCreateUseCase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      price: input.price
    });
  });

  it("should thrown an error when name is missing", async ()=> {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    input.name = "";

    await expect(productCreateUseCase.execute(input)).rejects.toThrow("Name is required");
  });

  it("should thrown an error when price is zero", async ()=> {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    input.name = "John";
    input.price = 0;

    await expect(productCreateUseCase.execute(input)).rejects.toThrow("Price must be greater than zero");
  });

  it("should thrown an error when price is less than zero", async ()=> {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    input.name = "John";
    input.price = -10;

    await expect(productCreateUseCase.execute(input)).rejects.toThrow("Price must be greater than zero");
  });
});
