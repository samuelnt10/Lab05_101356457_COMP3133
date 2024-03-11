export{}

class Customer {
    // Properties
    private firstName: string;
    private lastName: string;

    // Constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to greet
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

// Create an instance of the Customer class
let customer = new Customer("John", "Smith");

// Call the greeter method to get the output
customer.greeter();
