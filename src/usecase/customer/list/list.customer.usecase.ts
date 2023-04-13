import Customer from "../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { InputListCustomerDto, OutputListCustomerDto } from "./list.customer.dto";

export default class ListCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(input: InputListCustomerDto): Promise<OutputListCustomerDto> {
    const customers = await this.customerRepository.findAll();
    return OutputMapper.toOutput(customers);
  }
}

class OutputMapper {
  static toOutput(customerList: Customer[]): OutputListCustomerDto {
    return {
      customers: customerList.map((customer)=> ({
        id: customer.id,
        name: customer.name,
        address: {
          street: customer.address._street,
          city: customer.address._city,
          number: customer.address._number,
          zip: customer.address._zip
        }
      })),
    };
  }
}
